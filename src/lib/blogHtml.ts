/**
 * Normalize blog HTML that comes from the editor/CMS.
 *
 * We have a known content issue where anchor spans are HTML-escaped
 * (e.g. "&lt;span ...&gt;&lt;/span&gt;") inside otherwise-valid HTML.
 * That makes the anchor markup visible on the page and breaks ToC jump links.
 */
export function normalizeBlogHtml(html: string): string {
  if (!html) return "";

  // Decode ONLY escaped anchor spans (keeps the rest of the HTML untouched).
  // Example we fix:
  //   &lt;span id=&quot;foo&quot; class=&quot;anchor-target&quot;&gt;&lt;/span&gt;
  return html.replace(
    /&lt;span([\s\S]*?)anchor-target([\s\S]*?)&gt;&lt;\/span&gt;/g,
    (_match, a, b) => {
      const attrs = `${a}anchor-target${b}`
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&");

      return `<span${attrs}></span>`;
    }
  );
}
