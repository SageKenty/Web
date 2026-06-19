
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Header from '../../../components/layout/Header.js';
import {Footer} from '../../../components/layout/Footer.js';
import {ShootingGame} from './ShootingGame.tsx'; // シューティングゲームのロジックをインポート

export default function ShootingDemo() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-28 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          {/* 上部ナビ */}
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors mb-10">
            <ArrowLeft size={16} /> Back to HOME
          </Link>
          <br></br>
          <Link to="/works" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Portfolios
          </Link>
          {/* 記事ヘッダーメタ */}
          <header className="border-b border-slate-100 pb-8 mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">シューティングゲーム</h1>
          </header>
          <ShootingGame />
        </article>
      </div>
      <Footer />
    </>
  );
}

