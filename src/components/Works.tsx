import React from 'react';
import firebit from '../assets/firebit.jpg';

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

// 2. 内部で使うサブコンポーネント（メイン関数の「外」に置く）
// メインコンポーネントから独立させることで、再レンダリングを最適化できます。
const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  const statusColor = item.status === "Completed" ? "bg-green-500" : "bg-yellow-400";
  return (
    <a 
      href={item.link}
      className="w-[calc((100%-4vw)/3)] shrink-0 bg-slate-50 rounded-2xl snap-start shadow-[4px_4px_0px_rgba(0,0,0,0.2)] -translate-y-1 -translate-x-1 hover:shadow-none hover:translate-y-0 hover:translate-x-0 transition-all duration-150 active:scale-95"
    >   
      <div className="w-full h-[18vw] overflow-hidden rounded-t-2xl">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-[2vw]">
        <span className="inline-block px-[1vw] py-[0.5vw] rounded-full bg-orange-100 text-[#FF8C00] text-[1.2vw] font-bold">
          {item.tag}
        </span>
        <h3 className="text-[2vw] font-bold mt-[1vw]">{item.title}</h3>
        <p className="text-slate-500 mt-[1vw] text-[1vw]">{item.desc}</p>
        <div className="mt-[1vw] flex items-center gap-[1vw]">
          <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
          <span className="text-[1.2vw] font-medium text-slate-700">Status: {item.status}</span>
        </div>
      </div>
    </a>
  );
};

// 3. メインコンポーネント（これをexportする）
export default function PortfolioSection() {

  return (
    <section id="Works" className="w-full">
      <div className="mx-[5vw] px-6">
        <h2 className="text-[3vw] font-black">Proof Of Work</h2>
        <p className="text-[1.5vw] text-[#FF8C00] mb-[3vw]">制作事例</p>
        
        <div className="flex flex-nowrap overflow-x-auto gap-[2vw] pb-[2vw] snap-x touch-pan-x custom-scrollbar">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
          <div className="shrink-0 w-[10vw]" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}