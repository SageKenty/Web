import './App.css';
import React,{useState,useRef,useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';

const blogData = [
  { id: 1, date: "2026.04.27", tag: "Tech", title: "C2PAを用いたコンテンツ証明の検討" },
  { id: 2, date: "2026.04.20", tag: "Lab", title: "修士1年、研究テーマが決まるまで" },
  { id: 3, date: "2026.04.15", tag: "N高", title: "プログラミングTAとして意識していること" },
  { id: 4, date: "2026.04.10", tag: "Tech", title: "React + Tailwind v4 で作るポートフォリオ" },
  { id: 5, date: "2026.04.05", tag: "Daily", title: "北九州での生活と開発環境" },
];

function App() {
    
  return (
    <>
      <Header />
      <main className="pt-10 w-screen">
        <Hero />
        <Works />
        
  <section id="Blog" className="w-full py-[5vw] bg-white">
  <div className="mx-[10vw] px-6">
    <h2 className="text-[3vw] font-black mb-[3vw]">Latest Logs</h2>

    {/* ブログリスト本体 */}
    <div className="flex flex-col border-t border-slate-200">
      {blogData.map((blog) => (
        <a 
          key={blog.id} 
          href={`/blog/${blog.id}`} 
          className="flex items-center py-[1.5vw] border-b border-slate-100 hover:bg-slate-50 transition-colors group"
        >
          {/* Timestamp: 幅を固定(10vw)して揃える */}
          <span className="w-[10vw] text-[1.2vw] text-slate-400 font-mono">
            {blog.date}
          </span>

          {/* Tag: オレンジの丸 ＋ テキスト */}
          <div className="flex items-center w-[12vw]">
            <span className="w-[0.8vw] h-[0.8vw] bg-orange-500 rounded-full mr-[0.8vw]"></span>
            <span className="text-[1.2vw] font-bold text-slate-700">{blog.tag}</span>
          </div>

          {/* Title: 残りの幅を全部使う */}
          <h3 className="flex-1 text-[1.5vw] font-medium text-slate-800 group-hover:text-orange-600 transition-colors truncate">
            {blog.title}
          </h3>

          {/* 右端に矢印とかあると「押せる感」が出ます */}
          <span className="text-slate-300 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      ))}
    </div>

    {/* View ALL LOGS ボタン */}
    <div className="mt-[4vw] flex justify-center">
      <a 
        href="/blog" 
        className="px-[3vw] py-[1vw] border-2 border-slate-900 text-slate-900 text-[1.2vw] font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all"
      >
        VIEW ALL LOGS
      </a>
    </div>
  </div>
</section>

      </main>
    </>
  );
}

export default App;