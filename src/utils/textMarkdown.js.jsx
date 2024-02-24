export function convertMarkdownToHtml(markdown) {
  let html = markdown.replace(/\*\*([^\*]+)\*\*/g, "<span>$1</span>");
  html = html.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  html = html.replace(/\*([^\*]+)\*/g, "<em>$1</em>");
  html = html.replace(/_([^_]+)_/g, "<em>$1</em>");
  html = html.replace(/## ([^\n]+)/g, "<h2>$1</h2>");
  html = html.replace(/# ([^\n]+)/g, "<h1>$1</h1>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/\n/g, "<br>");

  return html;
}
