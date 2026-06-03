// src/constants/blogs.ts
export interface BlogItem {
  id: number;
  date: string;
  tag: 'Tech' | 'Lab' | 'Game' | 'Daily'
  title: string;
  slug: string;
}

export const ALL_BLOG_DATA: BlogItem[] = [
  { id: 1, date: "2026.04.27", tag: "Tech", title: "工事中", slug: "sample" },
  { id: 2, date: "2026.04.20", tag: "Lab", title: "工事中", slug: "sample-2" },
  { id: 3, date: "2026.04.15", tag: "Game", title: "工事中", slug: "sample-3" },
  { id: 4, date: "2026.04.10", tag: "Tech", title: "工事中", slug: "sample-4" },
  { id: 5, date: "2026.04.05", tag: "Daily", title: "工事中", slug: "sample-5" },
];