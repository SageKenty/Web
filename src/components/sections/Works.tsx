import React from 'react';
import { Link } from 'react-router-dom'; // ページ遷移用のコンポーネント
import { DESIGN } from '../../constants/design';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { ArrowRight } from 'lucide-react';
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
  { id: 1, tag: "工事中", title: "全て工事中", desc: "説明文が入ります。", status: "Completed", img: firebit, link: "https://example.com" },
  { id: 2, tag: "工事中", title: "Second Work", desc: "工事中", status: "In Progress", img: firebit, link: "https://example.com" },
  { id: 3, tag: "工事中", title: "Third Work", desc: "工事中", status: "Completed", img: firebit, link: "https://example.com" },
  { id: 4, tag: "工事中", title: "Fourth Work", desc: "工事中", status: "Completed", img: firebit, link: "https://example.com" },
];

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  const statusColor = item.status === "Completed" 
    ? DESIGN.colors.status.completed 
    : DESIGN.colors.status.inProgress;

  return (
    <a 
      href={item.link} 
      className={`
        flex flex-row md:flex-col
        w-full md:w-[calc((100%-4vw)/3)] 
        bg-slate-50 ${DESIGN.radius.card} 
        overflow-hidden
        shadow-[4px_4px_0px_rgba(0,0,0,0.1)] md:shadow-[6px_6px_0px_rgba(0,0,0,0.15)]
        active:scale-[0.98]
        hover:translate-x-0 hover:translate-y-0 hover:shadow-none transition-all duration-150
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
  // 配列から「最初の3件」だけを取り出す
  const displayedWorks = portfolioData.slice(0, 3);

  return (
    <section id="works" className={`w-full ${DESIGN.layout.sectionPadding}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-[10vw]">
        <SectionHeader title="Proof Of Work" subTitle="制作事例" />
        
        {/* コンテナ：スクロールバー(overflow-x-auto, custom-scrollbar)を完全に排除 */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-[2vw]">
          {displayedWorks.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {/* 一覧ページへの導線ボタン */}
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