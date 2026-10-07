import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from 'react';
import type { CategoryFilter, Post, PostCategory } from '../types/post';
import ArticleReader from './ArticleReader';
import { useArticleReader } from './useArticleReader';
import {
  categoryDetails,
  createExcerpt,
  formatPostDate,
  formatPostNumber
} from '../utils/post-formatters';
import './ArchivePage.css';

const categoryOptions = [
  { value: 'all', label: 'All entries' },
  { value: 'kiri', label: '01 kiri' },
  { value: 'fragments', label: '02 fragments' },
  { value: 'games', label: '03 games' },
  { value: 'places', label: '04 places' },
  { value: 'others', label: '05 others' }
] as const;

const pageSize = 5;

function formatLocalTime(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  }).format(date);
}

function ArchiveLiveTime() {
  const [time, setTime] = useState(() => formatLocalTime(new Date()));

  useEffect(() => {
    const updateTime = () => setTime(formatLocalTime(new Date()));
    updateTime();
    const timer = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="archive-weather" aria-label={`Local time: ${time}`}>
      <time dateTime={new Date().toISOString()}>{time}</time>
    </div>
  );
}

function EntryMeta({ post }: { post: Post }) {
  const category = categoryDetails[post.category];

  return (
    <div className="entry-meta">
      <time dateTime={post.created_at}>{formatPostDate(post.created_at)}</time>
      <span>{category.number} {category.label} / {formatPostNumber(post.post_no)}</span>
    </div>
  );
}

type OpenArticle = (post: Post, trigger: HTMLElement) => void;

function EntryLink({ post, children, onOpen, className = '' }: {
  post: Post; children: ReactNode; onOpen: OpenArticle; className?: string;
}) {
  return (
    <button
      type="button"
      className={`archive-entry-trigger ${className}`}
      onClick={(event) => onOpen(post, event.currentTarget)}
      aria-haspopup="dialog"
      aria-label={`Read ${post.title}`}
    >
      {children}
    </button>
  );
}

function ArchiveSidebar({ selectedCategory, onSelect }: {
  selectedCategory: CategoryFilter;
  onSelect: (category: CategoryFilter) => void;
}) {
  return (
    <aside className="archive-sidebar" aria-label="Archive navigation">
      <a className="archive-brand" href="#top" aria-label="Back to Kiri homepage">kiri.pet</a>

      <nav className="archive-category-nav" aria-label="Archive categories">
        {(Object.keys(categoryDetails) as PostCategory[]).map((category) => {
          const item = categoryDetails[category];
          const active = selectedCategory === category;

          return (
            <button
              className={active ? 'is-active' : ''}
              type="button"
              key={category}
              onClick={() => onSelect(category)}
              aria-pressed={active}
            >
              <span className="nav-marker" aria-hidden="true" />
              <span className="nav-number">{item.number}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="archive-sidebar-footer">
        <ArchiveLiveTime />
        <div className="archive-socials" aria-label="Social links">
          <a href="https://github.com" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.75a9.25 9.25 0 0 0-2.93 18.03c.46.08.63-.2.63-.45v-1.78c-2.56.56-3.1-1.09-3.1-1.09-.42-1.06-1.02-1.34-1.02-1.34-.84-.57.06-.56.06-.56.92.07 1.41.95 1.41.95.82 1.4 2.15 1 2.68.76.08-.6.32-1 .58-1.23-2.04-.23-4.19-1.02-4.19-4.57 0-1.01.36-1.84.95-2.49-.1-.23-.41-1.17.09-2.45 0 0 .77-.25 2.54.95A8.8 8.8 0 0 1 12 7.12a8.7 8.7 0 0 1 2.31.31c1.76-1.2 2.54-.95 2.54-.95.5 1.28.18 2.22.09 2.45.59.65.95 1.48.95 2.49 0 3.56-2.16 4.33-4.21 4.56.33.29.62.85.62 1.72v2.63c0 .25.17.54.63.45A9.25 9.25 0 0 0 12 2.75Z" /></svg>
          </a>
          <a href="#archive" aria-label="Photography archive">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.4 6.25 9.55 4.5h4.9l1.15 1.75h2.65A2.75 2.75 0 0 1 21 9v7.5a2.75 2.75 0 0 1-2.75 2.75H5.75A2.75 2.75 0 0 1 3 16.5V9a2.75 2.75 0 0 1 2.75-2.75H8.4Zm3.6 9.8a3.55 3.55 0 1 0 0-7.1 3.55 3.55 0 0 0 0 7.1Z" /></svg>
          </a>
          <a href="mailto:hello@kiri.pet" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.75 5h16.5A1.75 1.75 0 0 1 22 6.75v10.5A1.75 1.75 0 0 1 20.25 19H3.75A1.75 1.75 0 0 1 2 17.25V6.75A1.75 1.75 0 0 1 3.75 5Zm.2 2 8.05 5.9L20.05 7H3.95Zm16.05 9.75V9.1l-7.56 5.54a.75.75 0 0 1-.88 0L4 9.1v7.65c0 .14.11.25.25.25h15.5a.25.25 0 0 0 .25-.25Z" /></svg>
          </a>
        </div>
      </div>
    </aside>
  );
}

function ArchiveFilter({ value, open, onOpenChange, onSelect }: {
  value: CategoryFilter;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (category: CategoryFilter) => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = categoryOptions.find((option) => option.value === value) ?? categoryOptions[0];

  useEffect(() => {
    if (!open) return undefined;

    function handleOutside(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) onOpenChange(false);
    }

    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open, onOpenChange]);

  function handleMenuKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const focused = optionRefs.current.findIndex((option) => option === document.activeElement);
    const last = categoryOptions.length - 1;
    let next = focused;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = last;
    if (event.key === 'ArrowDown') next = focused < last ? focused + 1 : 0;
    if (event.key === 'ArrowUp') next = focused > 0 ? focused - 1 : last;
    optionRefs.current[next]?.focus();
  }

  return (
    <div className="archive-filter" ref={rootRef}>
      <button
        className="archive-filter-trigger"
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => onOpenChange(!open)}
      >
        <span>{current.label}</span>
        <svg viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1 5 5 5-5" /></svg>
      </button>
      <div className={`archive-filter-menu${open ? ' is-open' : ''}`} role="menu" onKeyDown={handleMenuKeyDown}>
        {categoryOptions.map((option, index) => (
          <button
            type="button"
            role="menuitemradio"
            aria-checked={value === option.value}
            tabIndex={open ? 0 : -1}
            ref={(node) => { optionRefs.current[index] = node; }}
            key={option.value}
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function MobileArchiveHeader({ open, selectedCategory, onOpenChange, onSelect }: {
  open: boolean;
  selectedCategory: CategoryFilter;
  onOpenChange: (open: boolean) => void;
  onSelect: (category: CategoryFilter) => void;
}) {
  return (
    <>
      <header className="archive-mobile-header">
        <a href="#top">kiri.pet</a>
        <button type="button" aria-label={open ? 'Close archive navigation' : 'Open archive navigation'} aria-expanded={open} onClick={() => onOpenChange(!open)}>
          {open ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          )}
        </button>
      </header>
      <div className={`archive-mobile-menu${open ? ' is-open' : ''}`} aria-hidden={!open} onClick={() => onOpenChange(false)}>
        <div className="archive-mobile-menu-inner" onClick={(event) => event.stopPropagation()}>
          <span className="mobile-menu-label">Archive index</span>
          {(Object.keys(categoryDetails) as PostCategory[]).map((category) => {
            const item = categoryDetails[category];
            return (
              <button
                type="button"
                className={selectedCategory === category ? 'is-active' : ''}
                onClick={() => onSelect(category)}
                key={category}
                tabIndex={open ? 0 : -1}
              >
                <span>{item.number}</span>{item.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

function FeaturedArchivePost({ post, onOpen }: { post: Post; onOpen: OpenArticle }) {
  const excerpt = createExcerpt(post.content, 180);

  return (
    <article className={`featured-entry${post.image_url ? '' : ' has-no-image'}`}>
      {post.image_url && (
        <EntryLink post={post} onOpen={onOpen} className="featured-image-link">
          <img data-reader-cover src={post.image_url} alt={post.title} decoding="async" fetchPriority="high" />
        </EntryLink>
      )}
      <div className="featured-copy">
        <EntryMeta post={post} />
        <h2 data-reader-title><EntryLink post={post} onOpen={onOpen} className="entry-title-link">{post.title}</EntryLink></h2>
        {excerpt && <p>{excerpt}</p>}
        <EntryLink post={post} onOpen={onOpen} className="read-entry">Read entry <span aria-hidden="true">→</span></EntryLink>
      </div>
    </article>
  );
}

function ArchivePostRow({ post, onOpen }: { post: Post; onOpen: OpenArticle }) {
  const excerpt = createExcerpt(post.content);

  return (
    <article className={`archive-row${post.image_url ? '' : ' has-no-image'}`}>
      <div className="archive-row-link">
        <div className="archive-row-copy">
          <EntryMeta post={post} />
          <h3 data-reader-title><EntryLink post={post} onOpen={onOpen}>{post.title}</EntryLink></h3>
          {excerpt && <p>{excerpt}</p>}
        </div>
        {post.image_url && (
          <EntryLink post={post} onOpen={onOpen} className="archive-row-image">
            <img data-reader-cover src={post.image_url} alt={post.title} loading="lazy" decoding="async" />
          </EntryLink>
        )}
      </div>
    </article>
  );
}

function ArchivePagination({ currentPage, totalPages, onPageChange }: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav className="archive-pagination" aria-label="Archive pages">
      <button type="button" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous page">←</button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          type="button"
          className={page === currentPage ? 'is-current' : ''}
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => onPageChange(page)}
          key={page}
        >
          {page}
        </button>
      ))}
      <button type="button" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next page">→</button>
    </nav>
  );
}

function ArchiveScrollRail() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const archive = document.querySelector<HTMLElement>('#archive');
    const scroller = document.querySelector<HTMLElement>('.archive-content');
    if (!archive || !scroller) return undefined;
    const archiveElement = archive;
    const scrollerElement = scroller;

    function updateRail() {
      frame = 0;
      const scrollableDistance = Math.max(1, scrollerElement.scrollHeight - scrollerElement.clientHeight);
      setVisible(window.scrollY >= archiveElement.offsetTop - 2);
      setProgress(Math.min(1, Math.max(0, scrollerElement.scrollTop / scrollableDistance)));
    }

    function requestUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateRail);
    }

    updateRail();
    scrollerElement.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      scrollerElement.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  function scrollTo(selector: string) {
    document.querySelector(selector)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  }

  function scrollDown() {
    const scroller = document.querySelector<HTMLElement>('.archive-content');
    const list = document.querySelector<HTMLElement>('.archive-list');
    if (!scroller) return;

    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    const listTop = list
      ? list.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop
      : 0;

    if (list && scroller.scrollTop < listTop - 16) {
      scroller.scrollTo({ top: Math.max(0, listTop - 16), behavior });
      return;
    }

    scroller.scrollBy({
      top: Math.max(360, scroller.clientHeight * 0.68),
      behavior
    });
  }

  return (
    <nav className={`archive-scroll-rail${visible ? ' is-visible' : ''}`} aria-label="Archive scroll controls">
      <button type="button" onClick={() => scrollTo('#top')} aria-label="Return to Kiri homepage">↑</button>
      <span className="archive-scroll-track" aria-hidden="true">
        <span style={{ height: `${Math.max(8, progress * 100)}%` }} />
      </span>
      <button type="button" onClick={scrollDown} disabled={progress > 0.98} aria-label="Scroll down through Archive">↓</button>
    </nav>
  );
}
export default function ArchivePage({ posts, loading, error, retry }: {
  posts: Post[];
  loading: boolean;
  error: string | null;
  retry: () => void;
}) {
  const reader = useArticleReader();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pageContentMinHeight, setPageContentMinHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const pendingScrollTopRef = useRef<number | null>(null);

  const publicPosts = useMemo(
    () => posts
      .filter((post) => post.is_public)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()),
    [posts]
  );

  const filteredPosts = useMemo(
    () => selectedCategory === 'all'
      ? publicPosts
      : publicPosts.filter((post) => post.category === selectedCategory),
    [publicPosts, selectedCategory]
  );

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);
  const totalPages = Math.max(1, Math.ceil(remainingPosts.length / pageSize));
  const visiblePosts = remainingPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setFilterOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    if (mobileOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [mobileOpen]);

  useLayoutEffect(() => {
    if (pendingScrollTopRef.current === null || !contentRef.current) return;
    contentRef.current.scrollTop = pendingScrollTopRef.current;
    pendingScrollTopRef.current = null;
  }, [currentPage]);

  function selectCategory(category: CategoryFilter) {
    pendingScrollTopRef.current = 0;
    setPageContentMinHeight(0);
    setSelectedCategory(category);
    setCurrentPage(1);
    setFilterOpen(false);
    setMobileOpen(false);
  }

  function changePage(page: number) {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    if (nextPage === currentPage) return;

    if (contentRef.current) {
      pendingScrollTopRef.current = contentRef.current.scrollTop;
      setPageContentMinHeight((height) => Math.max(height, contentRef.current?.scrollHeight ?? 0));
    }
    setCurrentPage(nextPage);
  }

  return (
    <section className="archive-page" id="archive" aria-labelledby="archive-title">
      <ArchiveScrollRail />
      <ArchiveSidebar selectedCategory={selectedCategory} onSelect={selectCategory} />
      <MobileArchiveHeader open={mobileOpen} selectedCategory={selectedCategory} onOpenChange={setMobileOpen} onSelect={selectCategory} />

      <main className="archive-main">
        <header className="archive-heading">
          <div>
            <h1 id="archive-title">Archive</h1>
            <p>Memories and fragments.</p>
          </div>
          <ArchiveFilter value={selectedCategory} open={filterOpen} onOpenChange={setFilterOpen} onSelect={selectCategory} />
        </header>

        <div className="archive-content" key={selectedCategory} ref={contentRef} aria-busy={loading}>
          <div
            className="archive-content-page"
            style={pageContentMinHeight ? { minHeight: `${pageContentMinHeight}px` } : undefined}
          >
          {loading ? (
            <div className="archive-empty" role="status">Loading archive…</div>
          ) : error ? (
            <div className="archive-empty" role="alert">
              <p>{error}</p>
              <button className="archive-retry" type="button" onClick={retry}>Try again</button>
            </div>
          ) : featuredPost ? (
            <>
              <FeaturedArchivePost post={featuredPost} onOpen={reader.openArticle} />
              <div className="archive-list" aria-live="polite">
                {visiblePosts.map((post) => <ArchivePostRow post={post} onOpen={reader.openArticle} key={post.id} />)}
              </div>
              <footer className="archive-footer">
                <ArchivePagination currentPage={currentPage} totalPages={totalPages} onPageChange={changePage} />
                <span>© 2026 kiri.pet</span>
              </footer>
            </>
          ) : (
            <div className="archive-empty">No entries in this category yet.</div>
          )}
          </div>
        </div>
      </main>
      {reader.activePost && <ArticleReader post={reader.activePost} opener={reader.opener} position={reader.position} onClose={reader.closeArticle} />}
    </section>
  );
}
