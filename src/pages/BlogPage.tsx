import React, { useState } from 'react';
import { DESIGN } from '../constants/design';
import { Badge } from '../components/ui/Badge';
import { ArrowLeft, Search } from 'lucide-react'; // アイコン
import { ALL_BLOG_DATA } from '../constants/blogs';
import { BlogRow } from '../components/ui/BlogRow';
import Header from '../components/layout/Header';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // 検索フィルタリング（オプション）
  const filteredBlogs = ALL_BLOG_DATA.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* --- Page Header --- */}
      <Header/>
      <div className="pt-32 pb-12 px-6 md:px-[10vw] bg-slate-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Training <span style={{ color: DESIGN.colors.primary }}>LOGS</span>
          </h1>
          <p className="text-slate-500 font-bold">思考と技術のログを残す場所</p>
        </div>
      </div>

      {/* --- Filter & Search Area --- */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 md:px-[10vw]">
        <div className="max-w-5xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* タグ簡易フィルタ（例として配置） */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {["All", "Tech", "Lab", "Game", "Daily"].map(tag => (
              <button key={tag} className="px-4 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-500 hover:border-orange-500 hover:text-orange-500 transition-all">
                {tag}
              </button>
            ))}
          </div>

          {/* 検索バー */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* --- Blog List --- */}
      <main className="px-6 md:px-[10vw] py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col">
            {filteredBlogs.map((blog) => (
              <BlogRow key = {blog.id} blog={blog} />
            ))}

            {filteredBlogs.length === 0 && (
              <div className="py-20 text-center text-slate-400 font-bold">
                一致する記事が見つかりませんでした。
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;