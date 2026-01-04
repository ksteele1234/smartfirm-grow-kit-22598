/**
 * Normalize blog HTML that comes from the editor/CMS.
 *
 * Known content issues we fix:
 * 1. Anchor spans are HTML-escaped (e.g. "&lt;span ...&gt;&lt;/span&gt;")
 * 2. TOC links use wrong prefix (href="@section" instead of href="#section")
 */
export function normalizeBlogHtml(html: string): string {
  if (!html) return "";

  let result = html;

  // Fix 1: Decode escaped anchor spans
  // Example: &lt;span id=&quot;foo&quot; class=&quot;anchor-target&quot;&gt;&lt;/span&gt;
  result = result.replace(
    /&lt;span([\s\S]*?)anchor-target([\s\S]*?)&gt;&lt;\/span&gt;/g,
    (_match, a, b) => {
      const attrs = `${a}anchor-target${b}`
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&");

      return `<span${attrs}></span>`;
    }
  );

  // Fix 2: Replace malformed TOC links (href="@..." → href="#...")
  result = result.replace(/href="@([^"]+)"/g, 'href="#$1"');

  // Fix 3: Also handle href='@...' with single quotes
  result = result.replace(/href='@([^']+)'/g, "href='#$1'");

  return result;
}
