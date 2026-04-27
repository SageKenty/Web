import React from 'react';
import Navbar from './navbar';
// 1. ここで直接インポート
import logoImg from '../assets/Hanz-on_50.webp'; 

// 2. 引数（Props）をオブジェクトとして受け取り、型を指定する
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