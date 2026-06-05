// src/constants/blogs.ts
export interface BlogItem {
  id: number;
  date: string;
  tag: 'Tech' | 'Lab' | 'Game' | 'Daily' | 'Info'; // タグはこの中から選択
  title: string;
  slug: string;
  isFeatured?: boolean; // トップページに表示させるかどうかのフラグ
}

export const ALL_BLOG_DATA: BlogItem[] = [
  { id: 1, date: "2026.04.27", tag: "Info", title: "HanzOnについて", slug: "first-post", isFeatured: true },
];