import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';
import type { Post } from '../types/post';
import type { ReaderPosition } from './useArticleReader';
import { categoryDetails, formatPostDate, formatPostNumber } from '../utils/post-formatters';
import ArticleBody from './ArticleBody';
import './ArticleReader.css';

export default function ArticleReader({ post, opener, position, onClose }: {
  post: Post;
  opener: HTMLElement | null;
  position: ReaderPosition;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const category = categoryDetails[post.category];

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const root = document.documentElement;
    const body = document.body;
    const scroller = document.querySelector<HTMLElement>('.archive-content');
    const previous = {
      rootOverflow: root.style.overflow,
      rootGutter: root.style.scrollbarGutter,
      scrollBehavior: root.style.scrollBehavior,
      bodyOverflow: body.style.overflow,
      listOverflow: scroller?.style.overflowY ?? ''
    };
    root.style.scrollbarGutter = 'stable';
    root.style.scrollBehavior = 'auto';
    root.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    if (scroller) scroller.style.overflowY = 'hidden';
    dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });
    // Cancel native dialog autofocus scrolling and any pending smooth scroll.
    window.scrollTo({ left: position.x, top: position.y, behavior: 'instant' });
    if (scroller) scroller.scrollTop = position.list;

    return () => {
      dialog.close();
      root.style.overflow = previous.rootOverflow;
      root.style.scrollbarGutter = previous.rootGutter;
      body.style.overflow = previous.bodyOverflow;
      if (scroller) {
        scroller.style.overflowY = previous.listOverflow;
        scroller.scrollTop = position.list;
      }
      window.scrollTo({ left: position.x, top: position.y, behavior: 'instant' });
      root.style.scrollBehavior = previous.scrollBehavior;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [opener, position]);

  function trapFocus(event: ReactKeyboardEvent<HTMLDialogElement>) {
    if (event.key !== 'Tab') return;
    const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], [tabindex="0"]'
    )).filter((node) => node.getClientRects().length > 0);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="article-dialog"
      data-fade-entry={!document.startViewTransition || undefined}
      aria-labelledby="article-reader-title"
      aria-modal="true"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      onKeyDown={trapFocus}
      onWheel={(event) => event.stopPropagation()}
      onTouchStart={(event) => event.stopPropagation()}
      onTouchEnd={(event) => event.stopPropagation()}
    >
      <article className="article-reader-card" style={{ viewTransitionName: 'article-card' }}>
        <button ref={closeRef} className="article-close" type="button" onClick={onClose} aria-label="Close article">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
        </button>
        <div className="article-reader-scroll" tabIndex={0} aria-label="Article content">
          <div className="article-reader-inner">
            <div className="entry-meta article-meta">
              <time dateTime={post.created_at}>{formatPostDate(post.created_at)}</time>
              <span>{category.number} {category.label} / {formatPostNumber(post.post_no)}</span>
            </div>
            <h2 id="article-reader-title" className="article-title" style={{ viewTransitionName: 'article-title' }}>{post.title}</h2>
            {post.image_url && (
              <img className="article-cover" src={post.image_url} alt={post.title} decoding="async"
                style={{ viewTransitionName: 'article-cover' }} />
            )}
            <ArticleBody content={post.content} />
          </div>
        </div>
      </article>
    </dialog>,
    document.body
  );
}
