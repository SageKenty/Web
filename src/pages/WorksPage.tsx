import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { DESIGN } from '../constants/design';
import Header from '../components/layout/Header';
import {Footer} from '../components/layout/Footer';
import { PortfolioCard } from '../components/sections/Works'; // 👈 提示された部品をそのままインポートして100%使い回す
import { portfolioData } from '../constants/portfolio'; // 外部化した全件データ

const WorksPage = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  // データ内のすべてのタグを重複なしで動的に抽出（フィルターボタン用）
  const tags = ["All", ...Array.from(new Set(portfolioData.map(item => item.tag)))];

  // 選択されたタグに基づいて、全件データからフィルタリング
  const filteredWorks = selectedTag === "All"
    ? portfolioData
    : portfolioData.filter(item => item.tag === selectedTag);

  return (
    <>
      {/* 共通ヘッダー */}
      <Header />

      <div className="min-h-screen bg-white">
        
        {/* --- ページヘッダーエリア（BlogPageと統一感をもたせたデザイン） --- */}
        <div className="pt-32 pb-12 px-6 md:px-[10vw] bg-slate-50 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto">
            {/* ホームに戻るボタン（React RouterのLink） */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              All <span style={{ color: DESIGN.colors.primary }}>WORKS</span>
            </h1>
            <p className="text-slate-500 font-bold">これまでに設計・開発してきた成果物</p>
          </div>
        </div>

        {/* --- ジャンル別 フィルターエリア --- */}
        <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 md:px-[10vw]">
          <div className="max-w-[1400px] mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2 w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`
                    px-4 py-1.5 rounded-full border text-xs font-bold transition-all duration-200
                    ${selectedTag === tag
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-500 border-slate-200 hover:border-orange-500 hover:text-orange-500"
                    }
                  `}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- メインコンテンツエリア（実績一覧） --- */}
        <main className="px-6 md:px-[10vw] py-12 md:py-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            
            {/* 💡 ココがポイント：親要素で横並び、はみ出し（3枚超）は flex-wrap で綺麗に下の行に落とす設定 */}
            <div className="flex flex-col md:flex-row flex-wrap gap-5 md:gap-y-[4vw] md:gap-x-[2vw]">
              {filteredWorks.map((item) => (
                // 提示されたコードから「1ミリも仕様を変えていない」PortfolioCardをそのまま配置してループ
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>

            {/* 該当する作品がない場合のセーフティ */}
            {filteredWorks.length === 0 && (
              <div className="py-20 text-center text-slate-400 font-bold">
                該当するジャンルの作品は現在工事中です。
              </div>
            )}

          </div>
        </main>
      </div>

      {/* 共通フッター */}
      <Footer />
    </>
  );
};

export default WorksPage;