import React from 'react';

const Navbar = () => {
  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Works', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
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

export default Navbar;