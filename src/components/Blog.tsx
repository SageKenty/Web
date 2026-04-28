import React from 'react';

interface BlogItem {
  id: number;
  date: string;
  tag: string;
  title: string;
}   

const blogData = [
  { id: 1, date: "2026.04.27", tag: "Tech", title: "C2PAを用いたコンテンツ証明の検討" },
  { id: 2, date: "2026.04.20", tag: "Lab", title: "修士1年、研究テーマが決まるまで" },
  { id: 3, date: "2026.04.15", tag: "Game", title: "最近ハマっているイナイレラフビルド構築" },
  { id: 4, date: "2026.04.10", tag: "Tech", title: "React + Tailwind v4 で作るポートフォリオ" },
  { id: 5, date: "2026.04.05", tag: "Daily", title: "北九州での生活と開発環境" },
];

const BlogItem = ( { blog } : { blog: BlogItem }) => (
  <a 
    href={`/blog/${blog.id}`} 
    className="flex items-center py-[1.5vw] border-b border-slate-100 hover:bg-slate-50 transition-colors group"
  >
    {/* Timestamp */}
    <span className="w-[10vw] text-[1.2vw] text-slate-400 font-mono">
      {blog.date}
    </span>

    {/* Tag */}
    <div className="flex items-center w-[12vw] p-1.5 border border-[#FF8C00] rounded-sm mx-[2vw]">
      <span className="w-[2vw] h-[2vw] bg-orange-500 rounded-full mr-[2vw]"></span>
      <span className="text-[1.2vw] font-bold text-slate-700">{blog.tag}</span>
    </div>

    {/* Title */}
    <h3 className="flex-1 text-[1.5vw] font-medium text-slate-800 group-hover:text-orange-600 transition-colors truncate">
      {blog.title}
    </h3>

    {/* Arrow */}
    <span className="text-[#FF8C00] group-hover:translate-x-1 transition-transform">→</span>
  </a>
);

// --- 2. メインのセクション ---
export default function BlogSection() {
  return (
    <section id="Blog" className="w-full py-[5vw]">
      <div className="mx-[5vw] px-6">
        <h2 className="text-[3vw] font-black">Training Log</h2>
        <p className="text-[1.5vw] text-[#FF8C00] mb-[3vw]">ブログ</p>

        {/* リスト本体：mapの中身がスッキリしました */}
        <div className="flex flex-col border-t border-slate-200">
          {blogData.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>

        {/* View ALL LOGS ボタン */}
        <div className="mt-[4vw] flex justify-center">
          <a 
            href="/blog" 
            className="px-[3vw] py-[1vw] border-2 border-[#FF8C00] text-slate-900 text-[1.2vw] font-bold rounded-sm hover:bg-[#FF8C00] hover:text-white transition-all"
          >
            VIEW ALL LOGS
          </a>
        </div>
      </div>
    </section>
  );
}