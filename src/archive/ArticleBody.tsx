import { useMemo } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

export default function ArticleBody({ content }: { content: string | null }) {
  const html = useMemo(() => {
    const rendered = marked.parse(content ?? '', { async: false, breaks: true, gfm: true });
    const clean = DOMPurify.sanitize(rendered, {
      ALLOWED_TAGS: ['p', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'em',
        'b', 'i', 'u', 's', 'del', 'a', 'img', 'figure', 'figcaption', 'blockquote',
        'ul', 'ol', 'li', 'pre', 'code', 'hr', 'table', 'thead', 'tbody', 'tr', 'th',
        'td', 'sup', 'sub', 'span', 'div'],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'colspan', 'rowspan', 'start'],
      ALLOW_DATA_ATTR: false
    });
    const template = document.createElement('template');
    template.innerHTML = clean;
    template.content.querySelectorAll('a').forEach((link) => {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
    template.content.querySelectorAll('img').forEach((image) => {
      image.loading = 'lazy';
      image.decoding = 'async';
    });
    return template.innerHTML;
  }, [content]);

  return <div className="article-body" dangerouslySetInnerHTML={{ __html: html }} />;
}
