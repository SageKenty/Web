import React from 'react';
import { DESIGN } from '../../constants/design';
import logoImg from '../../assets/Hanz-on_50.webp'; 

const Header = () => {
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Works', href: '#works' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' },
    { name: 'Skill', href: '#skill' }
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[5vw] bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 px-12 flex items-center justify-between">
      {/* Brand Logo */}
      <div className="flex items-center h-full group cursor-pointer">
        <img src={logoImg} alt="Hanz ON Logo" className="h-[4vw] w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
        <p className="ml-4 text-[3vw] font-black tracking-tighter">
          Hanz <span style={{ color: DESIGN.colors.primary }}>ON</span>
        </p>
      </div>

      {/* Navbar */}
      <nav>
        <ul className="flex items-center space-x-[3vw]">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className={`
                  relative py-[0.5vw] text-[1.5vw] font-bold text-gray-500 transition-all duration-300
                  hover:text-[${DESIGN.colors.accent}] 
                  /* 下線のエフェクト */
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                  after:transition-all after:duration-300 hover:after:w-full
                  after:bg-[${DESIGN.colors.accent}]
                `}
                >
                {item.name}
                </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;