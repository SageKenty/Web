import React, { useState } from 'react';
import { DESIGN } from '../../constants/design';
import logoImg from '../../assets/Hanz-on_50.webp'; 
import { Menu, X } from 'lucide-react'; // アイコンライブラリ（lucide-react）を想定。なければ三本線で代用可
import {NAV_ITEMS} from '../../constants/navigation';
import {NavLink} from '../ui/NavLink';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // メニューの開閉状態

  // 1vwはスマホだと小さすぎるため、高さなどはモバイル用に固定値(h-16など)を混ぜるのがコツです
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-16 md:h-[5vw] bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 px-6 md:px-12 flex items-center justify-between">
      
      {/* Brand Logo */}
      <div className="flex items-center h-full group cursor-pointer">
        <img 
          src={logoImg} 
          alt="Hanz ON Logo" 
          className="h-10 md:h-[4vw] w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
        />
        <p className="ml-3 md:ml-4 text-xl md:text-[3vw] font-black tracking-tighter">
          Hanz <span style={{ color: DESIGN.colors.primary }}>ON</span>
        </p>
      </div>

      {/* --- PC Navbar (md以上で表示) --- */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-[3vw]">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <NavLink item={item} className="text-[1.5vw]" />
            </li>
          ))}
        </ul>
      </nav>

      {/* --- Mobile Hamburger Button (md未満で表示) --- */}
      <button 
        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-color"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* --- Mobile Menu Overlay --- */}
      {/* isOpenがtrueの時だけ表示。アニメーションをつけるとよりプロっぽくなります */}
      <div className={`
        fixed inset-0 top-16 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <nav className="bg-white flex flex-col items-center pt-12 space-y-8 min-h-screen">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.name} 
              item={item} 
              className="text-2xl" 
              onClick={() => setIsOpen(false)} 
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;