import React, { useState } from 'react';
import { DESIGN } from '../../constants/design';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { ArrowRight, ChevronUp } from 'lucide-react';
import '../../App.css';
import firebit from '../../assets/firebit.jpg';

interface PortfolioItem {
  id: number;
  tag: string;
  title: string;
  desc: string;
  status: 'Completed' | 'In Progress';
  img: string;
  link: string;
}

const portfolioData: PortfolioItem[] = [
  { id: 1, tag: "Web Design", title: "Firebit Project", desc: "説明文が入ります。", status: "Completed", img: firebit, link: "https://example.com" },
  { id: 2, tag: "App Dev", title: "Second Work", desc: "Figmaから逆算中。", status: "In Progress", img: firebit, link: "https://example.com" },
  { id: 3, tag: "UI/UX", title: "Third Work", desc: "ポートフォリオ欄。", status: "Completed", img: firebit, link: "https://example.com" },
  { id: 4, tag: "Blockchain", title: "Fourth Work", desc: "Proof of Work.", status: "Completed", img: firebit, link: "https://example.com" },
];

const PortfolioCard = ({ item, index, isExpanded }: { item: PortfolioItem; index: number; isExpanded: boolean }) => {
  const statusColor = item.status === "Completed" 
    ? DESIGN.colors.status.completed 
    : DESIGN.colors.status.inProgress;

  return (
    <a 
      href={item.link} 
      className={`
        /* 💡 PC(md以上)では常にflex。スマホでは全件表示中(isExpanded)か2枚目までならflex、それ以外はhidden */
        ${index >= 2 ? (isExpanded ? 'flex md:flex' : 'hidden md:flex') : 'flex'}
        flex-row md:flex-col
        w-full md:w-[calc((100%-4vw)/3)] 
        shrink-0 bg-slate-50 ${DESIGN.radius.card} 
        overflow-hidden
        shadow-[4px_4px_0px_rgba(0,0,0,0.1)] md:shadow-[6px_6px_0px_rgba(0,0,0,0.15)]
        active:scale-[0.98]
        hover:translate-x-0 hover:translate-y-0 hover:shadow-none transition-all duration-150
        /* スマホかつ展開時のみフェードインアニメーションを適用 */
        ${index >= 2 && isExpanded ? 'animate-fade-in' : ''}
      `}
    >
      {/* 画像エリア */}
      <div className="w-28 h-28 md:w-full md:h-[15vw] shrink-0 overflow-hidden p-2 md:p-0 rounded-3xl md:rounded-none md:rounded-t-2xl">
        <img 
          src={item.img} 
          alt={item.title} 
          className="w-full h-full object-cover rounded-2xl md:rounded-none" 
        />
      </div>

      {/* テキストエリア */}
      <div className="p-4 md:p-[1.5vw] flex flex-col justify-center flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <Badge text={item.tag} variant="pill" />
          <span className={`w-2 h-2 rounded-full ${statusColor} md:hidden`}></span>
        </div>
        
        <h3 className="text-base md:text-[1.8vw] font-black text-slate-800 leading-tight break-words">
          {item.title}
        </h3>

        <p className={`hidden md:block ${DESIGN.colors.textSub} mt-[0.5vw] text-[1vw] line-clamp-2`}>
          {item.desc}
        </p>
        
        <div className="hidden md:flex mt-[1vw] items-center gap-[0.5vw]">
          <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
          <span className="text-[0.9vw] font-medium text-slate-500">Status: {item.status}</span>
        </div>
      </div>
    </a>
  );
};

export default function PortfolioSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="works" className={`w-full ${DESIGN.layout.sectionPadding}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-[10vw]">
        <SectionHeader title="Proof Of Work" subTitle="制作事例" />
        
        {/* コンテナ：元のクラス構成に戻し、PCでのflex挙動（横スクロール）に影響を与えないように修正 */}
        <div className="grid grid-cols-1 gap-5 md:display-inherit md:flex md:flex-nowrap md:overflow-x-auto md:gap-[2vw] md:pb-8 custom-scrollbar">
          {portfolioData.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} isExpanded={isExpanded} />
          ))}
        </div>

        {/* スマホ専用：「もっと見る / 閉じる」ボタン */}
        <div className="mt-10 flex justify-center md:hidden">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg active:scale-95 transition-transform"
          >
            {isExpanded ? (
              <>
                Close Works
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                View All Works
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}