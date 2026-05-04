import { DESIGN } from '../../constants/design';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { ArrowRight } from 'lucide-react';
import '../../App.css';
import firebit from '../../assets/firebit.jpg';

// 1. 型定義（外部からimportしてもOK）
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
  { id: 1, tag: "Web Design", title: "Firebit Project", desc: "", status: "Completed", img: firebit, link: "https://example.com" },
  { id: 2, tag: "App Dev", title: "Second Work", desc: "Figmaから逆算中。", status: "In Progress", img: firebit, link: "https://example.com" },
  { id: 3, tag: "UI/UX", title: "Third Work", desc: "ポートフォリオ欄。", status: "Completed", img: firebit, link: "https://example.com" },
  { id: 4, tag: "Blockchain", title: "Fourth Work", desc: "Proof of Work.", status: "Completed", img: firebit, link: "https://example.com" },
];

//const PortfolioCard = ({ item }: { item: PortfolioItem }) => (
//  <a href={item.link} className={`w-[calc((100%-4vw)/3)] shrink-0 bg-slate-50 ${DESIGN.radius.card} snap-start shadow-[4px_4px_0px_rgba(0,0,0,0.2)] -translate-y-1 -translate-x-1 hover:shadow-none hover:translate-y-0 hover:translate-x-0 transition-all duration-150`}>
//    <div className={`w-full h-[18vw] overflow-hidden rounded-t-2xl`}>
//      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
//    </div>
//    <div className="p-[2vw]">
//      <Badge text={item.tag} variant="pill" />
//      <h3 className="text-[2vw] font-bold mt-[1vw]">{item.title}</h3>
//      <p className={`${DESIGN.colors.textSub} mt-[1vw] text-[1vw]`}>{item.desc}</p>
//    </div>
//  </a>
//);

//const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
//  const statusColor = item.status === "Completed" 
//    ? DESIGN.colors.status.completed 
//    : DESIGN.colors.status.inProgress;
//
//  return (
//    <a 
//      href={item.link} 
//      className={`
//        /* スマホ：3件目以降は非表示(hidden)、PC：全て表示(md:flex) */
//        ${index >= 2 ? 'hidden md:flex' : 'flex'}
//        flex-col w-full md:w-[calc((100%-4vw)/3)] 
//        shrink-0 bg-slate-50 ${DESIGN.radius.card} snap-start 
//        shadow-[8px_8px_0px_rgba(0,0,0,0.1)] md:shadow-[4px_4px_0px_rgba(0,0,0,0.2)]
//        hover:translate-x-0 hover:translate-y-0 hover:shadow-none transition-all duration-150
//      `}
//    >
//      <div className="w-full h-56 md:h-[18vw] overflow-hidden rounded-t-2xl">
//        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
//      </div>
//
//      <div className="p-6 md:p-[2vw]">
//        <Badge text={item.tag} variant="pill" />
//        <h3 className="text-xl md:text-[2vw] font-bold mt-4 md:mt-[1vw]">{item.title}</h3>
//        <p className={`${DESIGN.colors.textSub} mt-2 md:mt-[1vw] text-sm md:text-[1vw] line-clamp-2`}>
//          {item.desc}
//        </p>
//        
//        <div className="mt-4 md:mt-[1vw] flex items-center gap-2">
//          <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
//          <span className="text-xs font-medium text-slate-500">Status: {item.status}</span>
//        </div>
//      </div>
//    </a>
//  );
//};

const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const statusColor = item.status === "Completed" 
    ? DESIGN.colors.status.completed 
    : DESIGN.colors.status.inProgress;

  return (
    <a 
      href={item.link} 
      className={`
        ${index >= 2 ? 'hidden md:flex' : 'flex'}
        flex-row md:flex-col
        w-full md:w-[calc((100%-4vw)/3)] 
        shrink-0 bg-slate-50 ${DESIGN.radius.card} 
        /* カード全体の枠組みからはみ出さないように overflow-hidden を確実に */
        overflow-hidden
        shadow-[4px_4px_0px_rgba(0,0,0,0.1)] md:shadow-[6px_6px_0px_rgba(0,0,0,0.15)]
        transition-all duration-200 active:scale-[0.98]
      `}
    >
      {/* 🖼 画像エリア：ここが修正ポイント！ */}
      <div className={`
        w-28 h-28 md:w-full md:h-[15vw] shrink-0 overflow-hidden 
        /* スマホ：四隅を丸く(rounded-2xl) ＋ 少し余白(p-2)をつけると可愛くなります */
        /* PC：余白なし(p-0) ＋ 上だけ丸く(rounded-t-2xl) ＋ 下の丸みは消す(rounded-b-none) */
        p-2 md:p-0 
        rounded-3xl md:rounded-none md:rounded-t-2xl
      `}>
        <img 
          src={item.img} 
          alt={item.title} 
          className="w-full h-full object-cover rounded-2xl md:rounded-none" 
        />
      </div>

      {/* ✍️ テキストエリア */}
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
  return (
    <section id="works" className={`w-full ${DESIGN.layout.sectionPadding}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-[10vw]">
        <SectionHeader title="Proof Of Work" subTitle="制作事例" />
        
        {/* コンテナ：スマホでは縦並び(grid)、PCでは横並び(flex) */}
        <div className="grid grid-cols-1 gap-10 md:flex md:flex-nowrap md:overflow-x-auto md:gap-[2vw] md:pb-8 custom-scrollbar">
          {portfolioData.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* スマホ専用：「もっと見る」ボタン */}
        <div className="mt-10 flex justify-center md:hidden">
          <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg active:scale-95 transition-transform">
            View All Works
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}