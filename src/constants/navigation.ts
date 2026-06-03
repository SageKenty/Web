// src/constants/navigation.ts
export const NAV_ITEMS = [
  { name: 'トップ', href: '/' },
  { name: '制作事例', href: '/works' }, // React Router導入後、トップの特定位置へ飛ばす工夫
  { name: 'ブログ', href: '/blogs' },    // ブログ一覧ページへ
  { name: '自己紹介', href: '/#about' },
  //{ name: 'Skill', href: '/#skill' }
] as const;

export const SNS_ITEMS = [
  { name: 'X', href: 'https://twitter.com/yourid' },
  { name: 'GitHub', href: 'https://github.com/yourid' },
  { name: 'Instagram', href: 'https://instagram.com/yourid' },
] as const;