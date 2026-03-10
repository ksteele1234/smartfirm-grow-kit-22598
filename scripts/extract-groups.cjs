const pages = require('../data/programmatic-pages.json');
const SOLUTION = new Set(['solutions-conversational', 'hybrid', 'alternatives']);

const groups = {};
pages.filter(p => !p.published).forEach(p => {
  const dir = SOLUTION.has(p.category) ? 'solution' : 'service';
  const key = dir + '/' + p.subcategory;
  if (!groups[key]) groups[key] = { dir, subcategory: p.subcategory, templateType: SOLUTION.has(p.category) ? 'solution' : 'service', pages: [] };
  groups[key].pages.push({ slug: p.slug, targetAudience: p.targetAudience, focusKeyword: p.focusKeyword, h1: p.h1, title: p.title, metaDescription: p.metaDescription });
});

const fs = require('fs');
fs.writeFileSync(__dirname + '/../data/page-groups.json', JSON.stringify(groups, null, 2));
console.log('Groups written. Summary:');
Object.entries(groups).sort((a,b) => b[1].pages.length - a[1].pages.length).forEach(([key, g]) => {
  console.log('\n' + key + ' (' + g.templateType + ', ' + g.pages.length + ' pages)');
  g.pages.forEach(p => console.log('  ' + p.slug + ' | kw: "' + p.focusKeyword + '" | aud: ' + p.targetAudience));
});
