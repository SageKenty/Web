// src/constants/navigation.ts
export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Works', href: '/#works' }, // React Router導入後、トップの特定位置へ飛ばす工夫
  { name: 'Blog', href: '/blog' },    // ブログ一覧ページへ
  { name: 'About', href: '/#about' },
  { name: 'Skill', href: '/#skill' }
] as const;

export const SNS_ITEMS = [
  { name: 'X', href: 'https://twitter.com/yourid' },
  { name: 'GitHub', href: 'https://github.com/yourid' },
  { name: 'Instagram', href: 'https://instagram.com/yourid' },
] as const;