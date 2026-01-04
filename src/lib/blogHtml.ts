/**
 * Normalize blog HTML that comes from the editor/CMS.
 *
 * Known content issues we fix:
 * 1. Anchor spans are HTML-escaped (e.g. "&lt;span ...&gt;&lt;/span&gt;")
 * 2. TOC links use wrong prefix (href="@section" instead of href="#section")
 * 3. Internal anchor links have target="_blank" which opens new tabs
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

  // Fix 4: Remove target="_blank" from internal anchor links (href="#...")
  // This prevents them from opening in new tabs
  result = result.replace(
    /<a([^>]*?)target="_blank"([^>]*?)href="#([^"]+)"([^>]*)>/g,
    '<a$1$2href="#$3"$4>'
  );
  result = result.replace(
    /<a([^>]*?)href="#([^"]+)"([^>]*?)target="_blank"([^>]*)>/g,
    '<a$1href="#$2"$3$4>'
  );

  // Fix 5: Also remove rel="noopener noreferrer nofollow" from internal anchor links
  result = result.replace(
    /<a([^>]*?)href="#([^"]+)"([^>]*?)rel="[^"]*"([^>]*)>/g,
    '<a$1href="#$2"$3$4>'
  );

  return result;
}
