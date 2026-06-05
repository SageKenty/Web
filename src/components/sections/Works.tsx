import React from 'react';
import { Link } from 'react-router-dom';
import { DESIGN } from '../../constants/design';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { ArrowRight, ExternalLink } from 'lucide-react';
import '../../App.css';
import firebit from '../../assets/firebit.jpg';
import { portfolioData } from '../../constants/portfolio';
import type { PortfolioItem } from '../../constants/portfolio';

export const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  const statusColor = item.status === "Completed" 
    ? DESIGN.colors.status.completed 
    : DESIGN.colors.status.inProgress;

  return (
    <div 
      className={`
        /* 📱スマホ: 縦並び(flex-col) ➔ 💻PC: 横並び(md:flex-col、親コンテナがmd:flex-rowなのでカード自体は縦長になる) */
        flex flex-col
        w-full md:w-[calc((100%-4vw)/3)] 
        bg-slate-50 ${DESIGN.radius.card} 
        overflow-hidden
        shadow-[4px_4px_0px_rgba(0,0,0,0.1)] md:shadow-[4px_4px_0px_rgba(0,0,0,0.15)]
      `}
    >
      {/* 🖼️ 画像エリア：スマホ時は横幅いっぱいに可変、PC時はアスペクト比固定 */}
      <div className="w-full aspect-[16/9] md:aspect-auto md:h-[15vw] shrink-0 overflow-hidden">
        <img 
          src={item.img} 
          alt={item.title} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* 📝 コンテンツエリア（テキスト + ステータス + ボタン） */}
      <div className="p-4 md:p-[1.5vw] flex flex-col flex-1 min-w-0 justify-between">
        <div>
          {/* タグ ＆ ステータス（スマホ・PC共通で綺麗に収まる上部配置） */}
          <div className="flex items-center gap-3 mb-2">
            <Badge text={item.tag} variant="pill" />
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
              <span className="text-xs md:text-[0.9vw] font-medium text-slate-500">
                {item.status}
              </span>
            </div>
          </div>
          
          {/* タイトル */}
          <h3 className="text-lg md:text-[1.8vw] font-black text-slate-800 leading-tight break-words">
            {item.title}
          </h3>

          {/* 説明文（PCのみ表示、スマホはすっきりさせるため隠す設定を維持） */}
          <p className={`md:block ${DESIGN.colors.textSub} mt-[0.5vw] text-5px md:text-[1vw] line-clamp-2`}>
            {item.desc}
          </p>
        </div>

        {/* 🛠️ ボタンエリア（スマホもPCも下部に横並び配置。1つの時は100%幅に自動伸縮） */}
        <div className="flex gap-2 mt-4 md:mt-[1.5vw] w-full">
          {item.demoLink && (
            <a 
              href={item.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-1 py-3 md:py-2 px-3 bg-slate-900 text-white rounded-xl font-bold text-sm md:text-[0.9vw] active:scale-95 transition-all shadow-sm"
            >
              <ExternalLink size={14} />
              <span>Demo</span>
            </a>
          )}
          {item.githubLink && (
            <a 
              href={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-1 py-3 md:py-2 px-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-sm md:text-[0.9vw] active:scale-95 transition-all shadow-sm"
            >
              <span className="text-[14px]">🐙</span>
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function PortfolioSection() {
  const displayedWorks = portfolioData.slice(0, 3);

  return (
    <section id="works" className={`w-full ${DESIGN.layout.sectionPadding}`}>
      <div className=" mx-auto px-6 md:px-[10vw]">
        <SectionHeader title="Proof Of Work" subTitle="制作事例" />
        
        <div className="flex flex-col md:flex-row gap-5 md:gap-[2vw]">
          {displayedWorks.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link 
            to="/works"
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-800 active:scale-95 transition-all duration-150 text-sm md:text-base"
          >
            View All Works
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}