const d = require('./programmatic-pages.json');
const subs = {};
d.forEach(p => {
  const key = p.subcategory;
  if (!(key in subs)) subs[key] = { count: 0, audiences: new Set(), category: p.category };
  subs[key].count++;
  subs[key].audiences.add(p.targetAudience);
});
Object.entries(subs).sort((a,b) => a[1].count - b[1].count).forEach(([k, v]) => {
  console.log(v.count + ' pages | ' + k + ' (' + v.category + ') | audiences: ' + [...v.audiences].join(', '));
});
