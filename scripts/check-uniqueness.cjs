const fs = require("fs");
const path = require("path");

const tsPath = path.join(__dirname, "..", "src", "data", "programmaticSeoPages.ts");
const raw = fs.readFileSync(tsPath, "utf-8");

const TARGET_SLUGS = [
  "how-to-get-more-reviews-for-my-cpa-firm",
  "how-do-i-get-clients-to-leave-reviews-for-my-accounting-firm",
  "how-to-ask-clients-for-reviews-as-a-tax-preparer",
  "how-to-increase-online-reviews-for-bookkeepers",
  "how-to-generate-5-star-reviews-for-my-accounting-practice",
];

function extractPageBlock(source, slug) {
  const dq = String.fromCharCode(34);
  const marker = dq + slug + dq + ": {";
  const startIdx = source.indexOf(marker);
  if (startIdx === -1) throw new Error("Could not find slug " + slug);
  const braceStart = source.indexOf("{", startIdx + marker.length - 1);
  let depth = 0, i = braceStart;
  for (; i < source.length; i++) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}") { depth--; if (depth === 0) break; }
  }
  const block = source.slice(braceStart, i + 1);
  const trailingCommaRe = new RegExp(",\\s*([}\\]])", "g");
  const crRe = new RegExp("\\r", "g");
  let cleaned = block.replace(trailingCommaRe, "$1").replace(crRe, "");
  try { return JSON.parse(cleaned); }
  catch (e) {
    try { return new Function("return (" + cleaned + ")")(); }
    catch (e2) { throw new Error("Failed to parse: " + e2.message); }
  }
}

const pages = {};
for (const slug of TARGET_SLUGS) pages[slug] = extractPageBlock(raw, slug);

function collectFields(page) {
  const fields = {};
  fields["problemStatement"] = page.problemStatement || "";
  fields["solutionOverview"] = page.solutionOverview || "";
  fields["heroSubtitle"] = page.heroSubtitle || "";
  fields["ctaTitle"] = page.ctaTitle || "";
  fields["ctaDescription"] = page.ctaDescription || "";
  if (Array.isArray(page.keyBenefits)) {
    page.keyBenefits.forEach((kb, i) => {
      fields["keyBenefits[" + i + "].title"] = kb.title || "";
      fields["keyBenefits[" + i + "].description"] = kb.description || "";
    });
  }
  if (Array.isArray(page.howItWorks)) {
    page.howItWorks.forEach((hw, i) => {
      fields["howItWorks[" + i + "].title"] = hw.title || "";
      fields["howItWorks[" + i + "].description"] = hw.description || "";
    });
  }
  if (Array.isArray(page.faqs)) {
    page.faqs.forEach((faq, i) => {
      fields["faqs[" + i + "].question"] = faq.question || "";
      fields["faqs[" + i + "].answer"] = faq.answer || "";
    });
  }
  return fields;
}

const pageFields = {};
for (const slug of TARGET_SLUGS) pageFields[slug] = collectFields(pages[slug]);

function fieldCategory(fieldLabel) {
  const idxRe = new RegExp("\\[\\d+\\]");
  return fieldLabel.replace(idxRe, "");
}

const fieldCatValues = {};
for (const slug of TARGET_SLUGS) {
  const fields = pageFields[slug];
  for (const [label, value] of Object.entries(fields)) {
    if (!value) continue;
    const cat = fieldCategory(label);
    if (!fieldCatValues[cat]) fieldCatValues[cat] = {};
    if (!fieldCatValues[cat][value]) fieldCatValues[cat][value] = [];
    fieldCatValues[cat][value].push({ slug, label });
  }
}

const exactDuplicates = [];
for (let i = 0; i < TARGET_SLUGS.length; i++) {
  for (let j = i + 1; j < TARGET_SLUGS.length; j++) {
    const slugA = TARGET_SLUGS[i];
    const slugB = TARGET_SLUGS[j];
    const fieldsA = pageFields[slugA];
    const fieldsB = pageFields[slugB];
    for (const label of Object.keys(fieldsA)) {
      if (fieldsB[label] && fieldsA[label] === fieldsB[label] && fieldsA[label].length > 0) {
        exactDuplicates.push({ field: label, slugA, slugB, value: fieldsA[label] });
      }
    }
    for (const [labelA, valA] of Object.entries(fieldsA)) {
      if (!valA) continue;
      for (const [labelB, valB] of Object.entries(fieldsB)) {
        if (!valB) continue;
        if (fieldCategory(labelA) === fieldCategory(labelB) && labelA !== labelB && valA === valB) {
          const key = [valA, slugA, slugB].join("|||");
          if (!exactDuplicates.find(d => [d.value, d.slugA, d.slugB].join("|||") === key)) {
            exactDuplicates.push({ field: labelA + " / " + labelB, slugA, slugB, value: valA });
          }
        }
      }
    }
  }
}

function extractSentences(text) {
  if (!text) return [];
  const splitRe = new RegExp("[.!?]+");
  const wsRe = new RegExp("\\s+", "g");
  return text.split(splitRe).map(s => s.trim().replace(wsRe, " ")).filter(s => s.split(" ").length >= 10);
}

const sentenceMap = {};
for (const slug of TARGET_SLUGS) {
  const fields = pageFields[slug];
  for (const [label, value] of Object.entries(fields)) {
    const sentences = extractSentences(value);
    for (const sent of sentences) {
      const normalized = sent.toLowerCase();
      if (!sentenceMap[normalized]) sentenceMap[normalized] = [];
      sentenceMap[normalized].push({ slug, field: label });
    }
  }
}

const duplicateSentences = [];
for (const [sentence, locations] of Object.entries(sentenceMap)) {
  const uniqueSlugs = [...new Set(locations.map(l => l.slug))];
  if (uniqueSlugs.length > 1) duplicateSentences.push({ sentence, locations, slugs: uniqueSlugs });
}

function shortSlug(slug) {
  const map = {
    "how-to-get-more-reviews-for-my-cpa-firm": "CPA-reviews",
    "how-do-i-get-clients-to-leave-reviews-for-my-accounting-firm": "Acct-leave-reviews",
    "how-to-ask-clients-for-reviews-as-a-tax-preparer": "Tax-ask-reviews",
    "how-to-increase-online-reviews-for-bookkeepers": "Bookkeeper-reviews",
    "how-to-generate-5-star-reviews-for-my-accounting-practice": "Acct-5star-reviews",
  };
  return map[slug] || slug;
}

console.log("=".repeat(80));
console.log("CONTENT UNIQUENESS CHECK -- 5 Published Review-Generation Pages");
console.log("=".repeat(80));
console.log("");
console.log("-".repeat(80));
console.log("FIELD UNIQUENESS SUMMARY");
console.log("-".repeat(80));
console.log("");

const scalarFields = ["problemStatement", "solutionOverview", "heroSubtitle", "ctaTitle", "ctaDescription"];
for (const field of scalarFields) {
  const values = TARGET_SLUGS.map(s => pageFields[s][field]).filter(Boolean);
  const unique = new Set(values);
  const status = unique.size === values.length
    ? "ALL UNIQUE (" + values.length + "/" + values.length + ")"
    : unique.size + "/" + values.length + " unique";
  console.log("  " + field + ": " + status);
}

for (const prefix of ["keyBenefits", "howItWorks", "faqs"]) {
  for (const suffix of ["title", "description", "question", "answer"]) {
    const cat = prefix + "." + suffix;
    if (!fieldCatValues[cat]) continue;
    const allValues = Object.keys(fieldCatValues[cat]);
    const totalEntries = Object.values(fieldCatValues[cat]).reduce((sum, arr) => sum + arr.length, 0);
    const duplicated = Object.entries(fieldCatValues[cat]).filter(([_, arr]) => {
      const slugs = new Set(arr.map(a => a.slug));
      return slugs.size > 1;
    });
    let status;
    if (duplicated.length === 0) {
      status = "ALL UNIQUE (" + allValues.length + " distinct values across " + totalEntries + " entries)";
    } else {
      status = allValues.length + " distinct / " + totalEntries + " total -- " + duplicated.length + " value(s) shared across pages";
    }
    console.log("  " + cat + ": " + status);
  }
}

console.log("");
console.log("-".repeat(80));
console.log("EXACT DUPLICATE FIELD VALUES");
console.log("-".repeat(80));
console.log("");

if (exactDuplicates.length === 0) {
  console.log("  None found! All field values are unique across page pairs.");
} else {
  console.log("  Found " + exactDuplicates.length + " exact duplicate(s):");
  console.log("");
  for (const dup of exactDuplicates) {
    console.log("  FIELD: " + dup.field);
    console.log("  PAGES: " + shortSlug(dup.slugA) + " <-> " + shortSlug(dup.slugB));
    const preview = dup.value.substring(0, 120) + (dup.value.length > 120 ? "..." : "");
    console.log("  VALUE: " + JSON.stringify(preview));
    console.log("");
  }
}

console.log("-".repeat(80));
console.log("SUBSTANTIALLY SIMILAR SENTENCES (10+ words appearing on multiple pages)");
console.log("-".repeat(80));
console.log("");

if (duplicateSentences.length === 0) {
  console.log("  None found! No sentence of 10+ words is shared between pages.");
} else {
  console.log("  Found " + duplicateSentences.length + " shared sentence(s):");
  console.log("");
  for (const ds of duplicateSentences) {
    const preview = ds.sentence.substring(0, 140) + (ds.sentence.length > 140 ? "..." : "");
    console.log("  SENTENCE: " + JSON.stringify(preview));
    console.log("  APPEARS ON: " + ds.slugs.map(shortSlug).join(", "));
    console.log("  FIELDS: " + ds.locations.map(l => shortSlug(l.slug) + "/" + l.field).join(", "));
    console.log("");
  }
}

console.log("=".repeat(80));
const totalIssues = exactDuplicates.length + duplicateSentences.length;
if (totalIssues === 0) {
  console.log("VERDICT: All 5 review pages have fully unique content across all checked fields.");
} else {
  console.log("VERDICT: Found " + exactDuplicates.length + " exact field duplicate(s) and " + duplicateSentences.length + " shared sentence(s).");
  console.log("         Review these to ensure sufficient content differentiation.");
}
console.log("=".repeat(80));
