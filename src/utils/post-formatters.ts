import type { PostCategory } from '../types/post';

export const categoryDetails: Record<PostCategory, { number: string; label: string }> = {
  kiri: { number: '01', label: 'kiri' },
  fragments: { number: '02', label: 'fragments' },
  games: { number: '03', label: 'games' },
  places: { number: '04', label: 'places' },
  others: { number: '05', label: 'others' }
};

export function createExcerpt(content: string | null, maxLength = 120) {
  if (!content) return '';

  const plainText = content
    .replace(/<[^>]*>/g, '')
    .replace(/[#*_>`~-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (plainText.length <= maxLength) return plainText;
  return `${plainText.slice(0, maxLength).trim()}…`;
}

export function formatPostDate(createdAt: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).format(new Date(createdAt));
}

export function formatPostNumber(postNo: number) {
  return String(postNo).padStart(3, '0');
}
