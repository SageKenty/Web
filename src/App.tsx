import React from 'react';
import citelogo_50 from './assets/Hanz-on_50.webp';

function App() {
  return(
    //<header className = "bg-red-500 flex items-center p-4 bg-gray-800 text-white w-full h-16 drop-shadow-lg">
    // {/* Header content */}
    //  <div className = "absolute left-4">
    //    {/*This is the logo*/}
    //    <img src = {citelogo_50} alt = "Cite Logo" />
    //    <p className = "bg-red-500 text-white p-10 text-4xl font-bold">Hanz ON</p>
    //  </div>
    //</header>

      <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-8">
  <h1 className="text-3xl font-bold text-blue-600">
    Tailwind CSS 動作チェック
  </h1>

  {/* 1. 基本のシャドウ (box-shadow) */}
  <div className="bg-white p-6 rounded-lg shadow-xl w-64 text-center">
    <p className="text-gray-700 font-medium">通常のシャドウ (shadow-xl)</p>
  </div>

  {/* 2. ドロップシャドウ (filter: drop-shadow) */}
  <div className="bg-white p-6 rounded-lg drop-shadow-2xl w-64 text-center">
    <p className="text-gray-700 font-medium">ドロップシャドウ (drop-shadow-2xl)</p>
  </div>

  {/* 3. ホバー & レスポンシブ & 任意値のテスト */}
  <button className="px-8 py-3 bg-[#312e81] text-white rounded-full 
                     hover:bg-red-500 transition-colors
                     md:scale-125 lg:rotate-3">
    ホバーで赤 & PCサイズで拡大
  </button>

  <p className="text-sm text-gray-500">
    ※ これが綺麗に並んで色が付いていれば成功です！
  </p>
</div>
  );

  
}

export default App