import React from 'react';
import { DESIGN } from '../../constants/design';
import citelogo from '../../assets/Hanz-on.webp';

// 装飾用パーツの調整：スマホでは少し控えめにするか、位置を調整
const DecorativeArc = ({ position }: { position: 'left' | 'right' }) => {
  const isLeft = position === 'left';
  return (
    <div className={`
      absolute top-1/2 -translate-y-1/2
      h-[50%] md:h-[70%] aspect-[1/2] 
      bg-[#F7931A]/10 -z-0
      ${isLeft ? 'left-0 rounded-r-full' : 'right-0 rounded-l-full'}
      ${isLeft ? 'translate-x-[-20%] md:translate-x-0' : 'translate-x-[20%] md:translate-x-0'}
    `} />
  );
};

const Hero = () => {
  // レスポンシブなスタイル定義
  // スマホでは固定値（text-6xlなど）、PCではvwを使うとバランスが取れます
  const heroTitleStyle = "text-6xl md:text-[8vw] font-black leading-tight drop-shadow-[0_0_15px_rgba(255,140,0,0.3)]";
  const subTitleStyle = "text-lg md:text-[2vw] font-bold text-[#444444] mt-2";

  return (
    <section id="home" className="relative flex items-center justify-center w-full min-h-[80vh] md:aspect-[16/9] overflow-hidden px-6 md:px-[10vw] pt-20 md:pt-0">
      {/* 背景装飾 */}
      <DecorativeArc position="left" />
      <DecorativeArc position="right" />

      {/* コンテンツエリア：スマホではcol（縦）、PCではrow（横） */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full z-10 gap-8 md:gap-0">
        
        {/* テキスト情報：スマホでは中央寄せ、PCでは左寄せ */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className={heroTitleStyle}>
            Hanz <span style={{ color: DESIGN.colors.primary }}>ON</span>
          </h1>
          <p className={subTitleStyle}>
            関川 謙人 自己紹介サイト
          </p>
        </div>

        {/* メインロゴ画像：スマホではサイズを固定、PCではvwで調整 */}
        <div className="flex-1 flex justify-center md:justify-end h-[50vw] md:h-[35vw] order-1 md:order-2">
          <div className="w-full max-w-[300px] md:max-w-none aspect-square">
            <img 
              src={citelogo} 
              alt="Cite Logo" 
              className="w-full h-full object-contain drop-shadow-2xl animate-fade-in" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;