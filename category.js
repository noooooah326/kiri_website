import { supabase } from './supabase.js';

const categories = ['kiri', 'fragments', 'games', 'places', 'others', 'archives'];
const pageSize = 3;
const newWindowMs = 3 * 24 * 60 * 60 * 1000;

let currentCategory = 'kiri';
let currentPage = 1;
let totalPages = 1;

const grid = document.querySelector('#archive-grid');
const state = document.querySelector('#archive-state');
const title = document.querySelector('#category-title');
const path = document.querySelector('#category-path');
const meta = document.querySelector('#category-meta');
const pageIndicator = document.querySelector('#page-indicator');
const prevButton = document.querySelector('#prev-page');
const nextButton = document.querySelector('#next-page');
const categoryLinks = document.querySelectorAll('[data-category-link]');

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function quietDelay(ms) {
  if (prefersReducedMotion()) {
    return Promise.resolve();
  }

  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeText(value) {
  return String(value || '').trim();
}

function padPostNo(postNo) {
  return String(postNo || 0).padStart(2, '0');
}

function getDate(post) {
  const date = new Date(post.created_at);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(post) {
  const date = getDate(post);

  if (!date) {
    return '';
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

function isNewPost(post) {
  const date = getDate(post);

  if (!date) {
    return false;
  }

  const diff = Date.now() - date.getTime();
  return diff >= 0 && diff <= newWindowMs;
}

function readUrl() {
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = normalizeText(params.get('category')) || 'kiri';
  const requestedPage = Number.parseInt(params.get('page') || '1', 10);

  currentCategory = categories.includes(requestedCategory) ? requestedCategory : 'kiri';
  currentPage = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;
}

function writeUrl(replace = false) {
  const url = new URL(window.location.href);
  url.searchParams.set('category', currentCategory);
  url.searchParams.set('page', String(currentPage));
  window.history[replace ? 'replaceState' : 'pushState']({}, '', url);
}

function updateHeader() {
  title.textContent = currentCategory.toUpperCase();
  path.textContent = currentCategory;
  meta.textContent = `category index / page ${currentPage}`;
  pageIndicator.textContent = `Page ${currentPage}`;

  categoryLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.categoryLink === currentCategory);
  });
}

function setPagination(count) {
  totalPages = Math.max(1, Math.ceil((count || 0) / pageSize));
  prevButton.disabled = currentPage <= 1;
  nextButton.disabled = currentPage >= totalPages;
}

function createImage(post) {
  const imageWrap = document.createElement('div');
  imageWrap.className = 'card-image';

  const image = document.createElement('img');
  image.alt = '';
  image.loading = 'lazy';
  image.decoding = 'async';
  image.addEventListener('load', () => {
    image.classList.add('loaded');
  }, { once: true });
  image.src = normalizeText(post.image_url);

  if (image.complete) {
    queueMicrotask(() => image.classList.add('loaded'));
  }

  imageWrap.append(image);
  return imageWrap;
}

function createCard(post) {
  const card = document.createElement('article');
  const hasImage = Boolean(normalizeText(post.image_url));
  card.className = hasImage ? 'archive-card photo-card' : 'archive-card text-note-card';

  const top = document.createElement('div');
  top.className = 'card-top';

  const postNo = document.createElement('div');
  postNo.className = 'post-no';
  postNo.textContent = padPostNo(post.post_no);
  top.append(postNo);

  if (isNewPost(post)) {
    const stamp = document.createElement('span');
    stamp.className = 'new-stamp';
    stamp.textContent = 'NEW';
    top.append(stamp);
  }

  const heading = document.createElement('h2');
  heading.textContent = normalizeText(post.title) || 'untitled';

  const preview = document.createElement('p');
  preview.textContent = normalizeText(post.content);

  const date = document.createElement('time');
  const displayDate = formatDate(post);
  date.className = 'post-date';
  date.dateTime = normalizeText(post.created_at);
  date.textContent = displayDate;

  card.append(top);

  if (hasImage) {
    card.append(createImage(post));
  } else {
    const noteLabel = document.createElement('div');
    noteLabel.className = 'text-note-label';
    noteLabel.textContent = `TEXT ENTRY / ${currentCategory.toUpperCase()}`;
    card.append(noteLabel);
  }

  card.append(heading, preview, date);
  return card;
}

function renderPosts(posts) {
  grid.innerHTML = '';

  posts.forEach((post) => {
    grid.append(createCard(post));
  });
}

function renderEmpty() {
  grid.innerHTML = '';
  state.textContent = 'no public notes in this category yet.';
}

function enterGrid() {
  if (prefersReducedMotion()) {
    grid.classList.remove('is-fading', 'is-entering');
    return;
  }

  grid.classList.remove('is-fading');
  grid.classList.add('is-entering');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      grid.classList.remove('is-entering');
    });
  });
}

async function loadPosts(animate = false) {
  updateHeader();
  state.textContent = 'loading archive...';
  grid.setAttribute('aria-busy', 'true');

  const from = (currentPage - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabase
    .from('posts')
    .select('*', { count: 'exact' })
    .eq('is_public', true)
    .eq('category', currentCategory)
    .order('post_no', { ascending: false })
    .range(from, to);

  grid.setAttribute('aria-busy', 'false');

  if (error) {
    grid.innerHTML = '';
    grid.classList.remove('is-fading', 'is-entering');
    state.textContent = `archive could not be loaded: ${error.message}`;
    setPagination(0);
    return;
  }

  setPagination(count);

  if (!data || data.length === 0) {
    renderEmpty();
    if (animate) {
      enterGrid();
    } else {
      grid.classList.remove('is-fading', 'is-entering');
    }
    return;
  }

  state.textContent = '';
  renderPosts(data);

  if (animate) {
    enterGrid();
  } else {
    grid.classList.remove('is-fading', 'is-entering');
  }
}

async function goToPage(page) {
  if (page === currentPage) {
    return;
  }

  grid.classList.add('is-fading');
  await quietDelay(180);
  currentPage = Math.min(Math.max(1, page), totalPages);
  writeUrl();
  loadPosts(true);
}

prevButton.addEventListener('click', () => {
  if (!prevButton.disabled) {
    goToPage(currentPage - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (!nextButton.disabled) {
    goToPage(currentPage + 1);
  }
});

window.addEventListener('popstate', () => {
  readUrl();
  loadPosts();
});

readUrl();
writeUrl(true);
loadPosts();
