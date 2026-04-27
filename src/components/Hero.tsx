import React from 'react';
import citelogo from '../assets/Hanz-on.webp';

// 1. 装飾用パーツ（Appの外に置くことで、Appがスッキリする）
const DecorativeArc = ({ position }: { position: 'left' | 'right' }) => {
  const isLeft = position === 'left';
  return (
    <div className={`
      absolute top-1/2 -translate-y-1/2
      h-[70%] aspect-[1/2] 
      bg-[#F7931A]/10 -z-0
      ${isLeft ? 'left-0 rounded-r-full' : 'right-0 rounded-l-full'}
    `} />
  );
};

const Hero = () => {
    // 共通のスタイルを定義（修正が一箇所で済む）
  const heroTitleStyle = "text-[8vw] font-black leading-tight drop-shadow-[0_0_15px_rgba(255,140,0,0.3)]";
  const subTitleStyle = "text-[2vw] font-bold text-[#444444] mt-2";

  return (
    <section className="relative flex items-center justify-center w-screen aspect-[16/9] overflow-hidden px-[10vw]">
    {/* ヒーローセクション */}
      {/* 背景装飾 */}
      <DecorativeArc position="left" />
      <DecorativeArc position="right" />

      {/* コンテンツエリア */}
      <div className="flex items-center justify-between w-full z-10">
        {/* 左側：テキスト情報 */}
        <div className="flex-1 ">
          <h1 className={heroTitleStyle}>
            Hanz <span className='text-[#FF8C00]'>ON</span>
          </h1>
          <p className={subTitleStyle}>
            SAGEポートフォリオサイト
          </p>
        </div>

        {/* 右側：メインロゴ画像 */}
        <div className="flex-1 flex justify-end h-[35vw]">
          <div className="w-full aspect-square">
            <img src={citelogo} alt="Cite Logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;