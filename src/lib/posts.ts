import { supabase } from './supabase';
import type { Post } from '../types/post';

const columns = 'id,title,slug,category,content,image_url,created_at,is_public,post_no';
const batchSize = 1000;

export async function fetchPublicPosts(signal: AbortSignal): Promise<Post[]> {
  if (!supabase) throw new Error('Archive connection is not configured.');

  const posts: Post[] = [];
  // Fetch all batches so the existing local filters and pagination stay accurate.
  let offset = 0;
  while (true) {
    const { data, error, count } = await supabase
      .from('posts')
      .select(columns, { count: 'exact' })
      .eq('is_public', true)
      .order('created_at', { ascending: false })
      .order('id', { ascending: false })
      .range(offset, offset + batchSize - 1)
      .abortSignal(signal);

    if (error) throw error;
    const batch = (data ?? []) as Post[];
    posts.push(...batch);
    if (batch.length === 0 || (count !== null && posts.length >= count)) break;
    // Use the returned length: the server may impose a smaller row limit.
    offset += batch.length;
  }

  return posts;
}
