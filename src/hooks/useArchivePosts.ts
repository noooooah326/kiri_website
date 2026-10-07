import { useCallback, useEffect, useState } from 'react';
import { fetchPublicPosts } from '../lib/posts';
import type { Post } from '../types/post';

export function useArchivePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const retry = useCallback(() => setAttempt((value) => value + 1), []);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20_000);
    setLoading(true);
    setError(null);

    fetchPublicPosts(controller.signal)
      .then((data) => { if (active) setPosts(data); })
      .catch(() => {
        if (active) {
          setPosts([]);
          setError('The archive could not be loaded. Please try again.');
        }
      })
      .finally(() => {
        window.clearTimeout(timeout);
        if (active) setLoading(false);
      });

    return () => {
      active = false;
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [attempt]);

  return { posts, loading, error, retry };
}
