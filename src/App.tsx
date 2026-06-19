import './App.css';
// 1. BrowserRouter を追加でインポート
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import WorksPage from './pages/WorksPage';
import BlogPost from './pages/BlogPost'; // ブログの詳細ページ（動的ルーティング）
import ScrollToTop from './components/utils/ScrollToTop';
import ShogiDemo from './pages/demos/syougi/ShogiDemo'; // デモページのインポート
import ShootingDemo from './pages/demos/shooting/Shooting';

function App() {
  return (
    <BrowserRouter>
      {/* ナビゲーション（全ページ共通） */}
      <ScrollToTop />
      {/* URLに応じて中身が切り替わるエリア */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/blogs/:id" element={<BlogPost />} /> {/* 動的ルーティング */}
        {/* デモページのルートもここで追加 */}
        <Route path="/demos/shogi" element={<ShogiDemo />} />
        <Route path = "/demos/shooting" element={ <ShootingDemo />} />
        <Route path="*" element={<div>404 Not Found</div>} /> {/* 404ページ */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;