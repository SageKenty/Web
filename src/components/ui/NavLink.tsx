// src/components/ui/NavLink.tsx
import { Link } from 'react-router-dom'; // React Router導入後はこちらを使用

interface NavLinkProps {
  item: { name: string; href: string };
  className?: string;
  onClick?: () => void;
}

export const NavLink = ({ item, className, onClick }: NavLinkProps) => (
  <a 
    href={item.href}
    onClick={onClick}
    className={`
      relative py-1 font-bold text-gray-500 transition-all duration-300 hover:text-orange-600
      /* 下線のエフェクト：共通化しておけば一箇所直すだけで全ページ変わる */
      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
      after:transition-all after:duration-300 hover:after:w-full after:bg-orange-500
      ${className}
    `}
  >
    {item.name}
  </a>
);