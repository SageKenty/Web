import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import PortfolioSection from './components/sections/Works';
import BlogSection from './components/sections/Blog';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PortfolioSection />
        <BlogSection />
        
      </main>
    </div>
  );
}

export default App;