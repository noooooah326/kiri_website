import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import type { Post } from '../types/post';

type Source = { card: HTMLElement; title: HTMLElement | null; cover: HTMLElement | null };
export type ReaderPosition = { x: number; y: number; list: number };

function nameSource(source: Source, enabled: boolean) {
  for (const [node, name] of [[source.card, 'article-card'], [source.title, 'article-title'],
    [source.cover, 'article-cover']] as const) {
    if (node) node.style.viewTransitionName = enabled ? name : '';
  }
}

export function useArticleReader() {
  const [activePost, setActivePost] = useState<Post | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const position = useRef<ReaderPosition>({ x: 0, y: 0, list: 0 });
  const source = useRef<Source | null>(null);
  const transition = useRef<ViewTransition | null>(null);
  const busy = useRef(false);
  const closing = useRef(false);

  async function changeView(update: () => void) {
    transition.current?.skipTransition();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduced) {
      flushSync(update);
      return;
    }
    document.documentElement.classList.add('article-transition');
    const current = document.startViewTransition(() => { flushSync(update); });
    transition.current = current;
    // Duplicate/unsupported snapshots must never prevent opening or closing.
    void current.ready.catch(() => undefined);
    await current.finished.catch(() => undefined);
    if (transition.current === current) {
      transition.current = null;
      document.documentElement.classList.remove('article-transition');
    }
  }

  function openArticle(post: Post, trigger: HTMLElement) {
    if (busy.current || activePost) return;
    const card = trigger.closest<HTMLElement>('article');
    if (!card) return;
    busy.current = true;
    position.current = {
      x: window.scrollX, y: window.scrollY,
      list: document.querySelector<HTMLElement>('.archive-content')?.scrollTop ?? 0
    };
    window.scrollTo({ left: position.current.x, top: position.current.y, behavior: 'instant' });
    opener.current = trigger;
    trigger.focus({ preventScroll: true });
    const origin: Source = {
      card,
      title: card.querySelector<HTMLElement>('[data-reader-title]'),
      cover: card.querySelector<HTMLElement>('[data-reader-cover]')
    };
    source.current = origin;
    nameSource(origin, true);
    void changeView(() => {
      nameSource(origin, false);
      setActivePost(post);
    }).finally(() => { if (!closing.current) busy.current = false; });
  }

  function closeArticle() {
    if (!activePost || !source.current || closing.current) return;
    const origin = source.current;
    busy.current = true;
    closing.current = true;
    void changeView(() => {
      nameSource(origin, true);
      setActivePost(null);
    }).finally(() => {
      nameSource(origin, false);
      busy.current = false;
      closing.current = false;
      source.current = null;
    });
  }

  return { activePost, opener: opener.current, position: position.current, openArticle, closeArticle };
}
