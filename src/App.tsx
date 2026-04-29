import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import PortfolioSection from './components/sections/Works';
import BlogSection from './components/sections/Blog';
import About from './components/sections/About'
import Skill from './components/sections/Skill'

import {DESIGN} from './constants/design'

import './App.css';

const Footer = () => {
  const navItems = [
    { name: 'Home', link: '#' },
    { name: 'Works', link: '#works' },
    { name: 'Blog', link: '#blog' },
    { name: 'About', link: '#about' },
    { name: 'Skill', link: '#skill'},
  ];

  const snsItems = [
    { name: 'X', link: 'https://twitter.com/yourid' },
    { name: 'GitHub', link: 'https://github.com/yourid' },
    { name: 'Instagram', link: 'https://instagram.com/yourid' },
  ];

  return (
    <footer className="w-full py-[3vw] px-[4vw] border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* ロゴセクション */}
        <div className="flex items-center">
          <div className="text-2xl font-black tracking-tighter">
            MY SITE<span className="text-orange-500">.</span>
          </div>
        </div>

        {/* ナビゲーションセクション */}
        <nav>
          <ul className="flex gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.link} className= {`relative py-[0.5vw] text-[1.5vw] font-bold text-gray-500 transition-all duration-300hover:text-[${DESIGN.colors.accent}] /* 下線のエフェクト */after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full after:bg-[${DESIGN.colors.accent}]`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* SNSセクション */}
        <div className="flex gap-5">
          {snsItems.map((sns) => (
            <a
              key={sns.name}
              href={sns.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-gray-500 hover:text-orange-500 transition-colors"
            >
              {sns.name}
            </a>
          ))}
        </div>

      </div>

      {/* コピーライト（おまけ） */}
      <div className="mt-12 text-center text-[10px] text-gray-400 tracking-widest uppercase">
        © {new Date().getFullYear()} Kento. All rights reserved.
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PortfolioSection />
        <BlogSection />
        <About />
        <Skill />
    </main>
    <Footer />
    </div>
  );
}

export default App;