import React,{useState,useRef,useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import firebit from './assets/firebit.jpg';

// 1. データを配列として外に追い出す（後でここを書き換えるだけ！）
const portfolioData = [
  { id: 1, tag: "Web Design", title: "Firebit Project", desc: "説明文が入ります。", status: "Completed", img: firebit },
  { id: 2, tag: "App Dev", title: "Second Work", desc: "Figmaから逆算中。", status: "In Progress", img: firebit },
  { id: 3, tag: "UI/UX", title: "Third Work", desc: "ポートフォリオ欄。", status: "Completed", img: firebit },
  { id: 4, tag: "Blockchain", title: "Fourth Work", desc: "Proof of Work.", status: "Completed", img: firebit },
];

function App() {
    
  return (
    <>
      <Header />
      <main className="pt-10 w-screen">
        <Hero />

        <section id="portfolio" className="w-full">
          <div className="mx-[5vw] px-6">
            <h2 className="text-[3vw] font-black mb-[1vw]">Proof Of Work</h2>
            
            {/* スクロールコンテナ */}
<div className="flex flex-nowrap overflow-x-auto gap-[2vw] pb-[2vw] snap-x scrollbar-hide">
  
  {portfolioData.map((item) => (
    <div 
      key={item.id} 
      className="
        w-[calc((100%-4vw)/3)]
        shrink-0           /* 絶対に縮ませない（スクロールの必須条件） */
        bg-slate-50 
        rounded-2xl 
        snap-start         /* スクロールがピタッと止まる */
      "
    >
      {/* カードの中身（画像やテキスト）はそのまま */}
      <div className="w-full h-[18vw] overflow-hidden rounded-t-2xl">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-[2vw]">
        <span className="inline-block px-[1vw] py-[0.5vw] rounded-full bg-orange-100 text-orange-600 text-[1.2vw] font-bold">
          {item.tag}
        </span>
        <h3 className="text-[2vw] font-bold mt-[1vw]">{item.title}</h3>
        <p className="text-slate-500 mt-[1vw] text-[1vw]">{item.desc}</p>
         
        <div className="mt-[1vw] flex items-center gap-[1vw]">
          <span className={`w-2 h-2 rounded-full ${item.status === "Completed" ? "bg-green-500" : "bg-yellow-400"}`}></span>
          <span className="text-[1. 2vw] font-medium text-slate-700">Status: {item.status}</span>
        </div>
      </div>
    </div>
  ))}

  {/* 右端でスクロールが止まった時の余白を確保するダミー要素 */}
  <div className="shrink-0 w-[10vw]"></div>
</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;