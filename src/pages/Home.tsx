import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import PortfolioSection from '../components/sections/Works';
import BlogSection from '../components/sections/Blog';
import About from '../components/sections/About'
import Skill from '../components/sections/Skill'
import {Footer} from '../components/layout/Footer';

import {DESIGN} from '../constants/design'

export default function Home() {
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
};