export type PostCategory = 'kiri' | 'fragments' | 'games' | 'places' | 'others';

export type Post = {
  id: string;
  title: string;
  slug: string;
  category: PostCategory;
  content: string | null;
  image_url: string | null;
  created_at: string;
  is_public: boolean;
  post_no: number;
};

export type CategoryFilter = 'all' | PostCategory;
