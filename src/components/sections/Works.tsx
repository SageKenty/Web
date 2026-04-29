import { DESIGN } from '../../constants/design';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
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

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  // 色の判定ロジックをここに置く（スッキリ！）
  const statusColor = item.status === "Completed" 
    ? DESIGN.colors.status.completed 
    : DESIGN.colors.status.inProgress;

  return (
    <a href={item.link} className={`w-[calc((100%-4vw)/3)] shrink-0 bg-slate-50 ${DESIGN.radius.card} snap-start shadow-[4px_4px_0px_rgba(0,0,0,0.2)] -translate-y-1 -translate-x-1 hover:shadow-none hover:translate-y-0 hover:translate-x-0 transition-all duration-150`}>
      <div className={`w-full h-[18vw] overflow-hidden rounded-t-2xl`}>
      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-[2vw]">
        <Badge text={item.tag} variant="pill" />
        <h3 className="text-[2vw] font-bold mt-[1vw]">{item.title}</h3>
        <p className={`${DESIGN.colors.textSub} mt-[1vw] text-[1vw]`}>{item.desc}</p>
        
        {/* 進捗バッジくん */}
        <div className="mt-[1vw] flex items-center gap-[1vw]">
          <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
          <span className="text-[1.2vw] font-medium text-slate-700">
            Status: {item.status}
          </span>
        </div>
      </div>
    </a>
  );
};

export default function PortfolioSection() {
  return (
    <section id="works" className={`w-full ${DESIGN.layout.sectionPadding}`}>
      <div className={`${DESIGN.layout.containerMargin} px-6`}>
        <SectionHeader title="Proof Of Work" subTitle="制作事例" />
        <div className="flex flex-nowrap overflow-x-auto gap-[2vw] pb-[2vw] snap-x touch-pan-x custom-scrollbar">
          {portfolioData.map((item) => <PortfolioCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}