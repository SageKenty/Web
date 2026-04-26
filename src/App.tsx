import React from 'react';
import citelogo_50 from './assets/Hanz-on_50.webp';
import TailwindTest from './components/tailwindtest.tsx';

function App() {
  return(
    //Tailwindが動いてるのか確認するコンポーネント。がちで動いてるなら、これが綺麗に並んで色が付いているはず。
    //<TailwindTest />

    <header className="flex items-center p-4 w-full h-16 drop-shadow-lg bg-white"> {/* 背景色がないと影が見えないので追加 */}
      {/* Header content */}
      <div className="absolute left-4 flex items-center h-full"> {/* flexで画像と文字を横並びに */}
        {/* ロゴのサイズを親(h-16)から溢れないように制御 */}
        <img src={citelogo_50} alt="Cite Logo" className="h-12 w-auto object-contain" />

        {/* p-10だと余白がデカすぎて文字が画面外に飛ばされる可能性があるので調整 */}
        <p className="ml-4 text-4xl font-Inter font-black">Hanz ON</p>
      </div>
    </header>

    
  );

  
}

export default App;