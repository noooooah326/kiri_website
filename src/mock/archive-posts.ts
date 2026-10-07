import type { Post } from '../types/post';

export const mockPosts: Post[] = [
  {
    id: '8f2d73e4-42b4-4c63-9b7e-21c570e2fd01',
    title: 'A quiet afternoon',
    slug: 'a-quiet-afternoon',
    category: 'kiri',
    content: 'Kiri stayed beside the window for most of the afternoon. The room was quiet, and the light slowly moved across the floor.',
    image_url: '/images/archive/kiri-window.png',
    created_at: '2026-07-10T15:30:00+08:00',
    is_public: true,
    post_no: 12
  },
  {
    id: '4a93b8ce-a1ef-4c44-9055-e023cc043a02',
    title: 'Rain after midnight',
    slug: 'rain-after-midnight',
    category: 'fragments',
    content: 'It started raining after midnight. For a while, the streets outside became completely quiet.',
    image_url: '/images/archive/night-rain.png',
    created_at: '2026-07-08T00:42:00+08:00',
    is_public: true,
    post_no: 7
  },
  {
    id: '07f1bc31-c5a7-48b6-a115-d42fa4c05303',
    title: 'Animal Crossing',
    slug: 'animal-crossing-island-progress',
    category: 'games',
    content: 'I changed part of the island again today. The residential area is finally beginning to look more complete.',
    image_url: '/images/archive/animal-crossing.png',
    created_at: '2026-07-06T21:15:00+08:00',
    is_public: true,
    post_no: 9
  },
  {
    id: 'bc58570d-178e-43a0-bc43-e44d6657ab04',
    title: 'Marina Bay',
    slug: 'marina-bay-evening',
    category: 'places',
    content: 'An ordinary evening near Marina Bay. The sky was darker than usual, and there were not many people around.',
    image_url: '/images/archive/marina-bay.png',
    created_at: '2026-07-03T19:20:00+08:00',
    is_public: true,
    post_no: 5
  },
  {
    id: '92d8ddbd-e606-44d0-b92d-6b641f50ba05',
    title: 'Switch 2',
    slug: 'switch-2',
    category: 'others',
    content: 'A few photos from the day I opened the Switch 2. The packaging was simpler than I expected.',
    image_url: '/images/archive/switch-2.png',
    created_at: '2026-06-28T16:05:00+08:00',
    is_public: true,
    post_no: 4
  },
  {
    id: 'd964f74a-1244-4797-b56d-2398df865b06',
    title: 'No photograph today',
    slug: 'no-photograph-today',
    category: 'fragments',
    content: 'Nothing special happened today. I stayed at home, played games for a while, and went to sleep late.',
    image_url: null,
    created_at: '2026-06-24T23:18:00+08:00',
    is_public: true,
    post_no: 6
  },
  {
    id: 'cbced11e-11aa-48cf-b593-7061dd061007',
    title: 'First morning light',
    slug: 'first-morning-light',
    category: 'kiri',
    content: 'Kiri woke before the alarm and watched the first line of light appear beneath the curtain.',
    image_url: null,
    created_at: '2026-06-21T07:12:00+08:00',
    is_public: true,
    post_no: 11
  },
  {
    id: '49bc34dd-0a55-473d-a13c-720538e47908',
    title: 'The long way home',
    slug: 'the-long-way-home',
    category: 'places',
    content: 'I took the longer bus route home. The city looked unfamiliar for a few stops, which was enough.',
    image_url: null,
    created_at: '2026-06-17T22:06:00+08:00',
    is_public: true,
    post_no: 4
  },
  {
    id: '550e9cc3-27d0-4f5d-bcbe-0903ec845309',
    title: 'One more island evening',
    slug: 'one-more-island-evening',
    category: 'games',
    content: 'I moved the trees by the river and stayed until the in-game sky turned dark.',
    image_url: null,
    created_at: '2026-06-12T20:44:00+08:00',
    is_public: true,
    post_no: 8
  },
  {
    id: 'f0f5fc48-535c-48ca-af86-ae8adab44910',
    title: 'Desk, late June',
    slug: 'desk-late-june',
    category: 'others',
    content: 'The desk has become crowded again: camera batteries, two notebooks, and a cable I keep forgetting to put away.',
    image_url: null,
    created_at: '2026-06-08T18:34:00+08:00',
    is_public: true,
    post_no: 3
  },
  {
    id: 'bc073444-02c4-48d4-8fce-c8cc44e9fd11',
    title: 'Small things from May',
    slug: 'small-things-from-may',
    category: 'fragments',
    content: 'A list of things worth keeping: rain on the kitchen window, cold tea, and a song heard through the wall.',
    image_url: null,
    created_at: '2026-05-31T23:41:00+08:00',
    is_public: true,
    post_no: 5
  },
  {
    id: 'a3ba3582-8d2a-48cd-a38c-16b797c28407',
    title: 'Private draft',
    slug: 'private-draft',
    category: 'others',
    content: 'This entry should not appear on the public Archive page.',
    image_url: null,
    created_at: '2026-06-20T12:00:00+08:00',
    is_public: false,
    post_no: 2
  }
];
