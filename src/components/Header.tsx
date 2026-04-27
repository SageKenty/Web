import React from 'react';
// 1. ここで直接インポート
import logoImg from '../assets/Hanz-on_50.webp'; 

/*ナビゲーションバー*/
const Navbar = () => {
  const menuItems = [
    { name: 'Home', href: '#Home' },
    { name: 'Works', href: '#Works' },
    { name: 'Blog', href: '#Blog' },
    { name: 'About', href: '#About' },
    { name: 'Contact', href: '#Contact' }
  ];

  return (
    <nav>
      <ul className="flex items-center space-x-10">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a 
              href={item.href} 
              className="
                relative py-2 text-sm font-bold text-gray-500 transition-all duration-300
                hover:text-[#F7931A] 
                /* 下線のエフェクトを追加 */
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-[#F7931A] after:transition-all after:duration-300 hover:after:w-full
              "
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const BrandLogo = ({ src }: { src: string }) => (
  <div className="flex items-center h-full group cursor-pointer">
    <img 
      src={src} // 3. 変数は { } で囲む
      alt="Hanz ON Logo" 
      className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
    />
    <p className="ml-4 text-4xl font-black tracking-tighter">
      Hanz <span className="text-[#FF8C00] drop-shadow-[0_0_8px_rgba(255,140,0,0.3)]">ON</span>
    </p>
  </div>
);

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 px-12 flex items-center justify-between">
      {/* 4. インポートした画像をここで渡す */}
      <BrandLogo src={logoImg} />
      <Navbar />
    </header>
  );
};

export default Header;