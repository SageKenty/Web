// src/pages/demos/ShogiDemo.tsx
import React, { useState, useEffect, useRef} from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Header from '../../../components/layout/Header.js';
import {Footer} from '../../../components/layout/Footer.js';
import * as THREE from "three";
// @ts-ignore
import Syougi from "./syougi.js"; 
 // 3Dモデルのパス

export default function ShogiDemo() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-28 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          {/* 上部ナビ */}
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors mb-10">
            <ArrowLeft size={16} /> Back to HOME
          </Link>
          <br></br>
          <Link to="/works" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Portfolios
          </Link>
          {/* 記事ヘッダーメタ */}
          <header className="border-b border-slate-100 pb-8 mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">将棋ゲーム</h1>
          </header>
          <GameCanvas />
        </article>
      </div>
      <Footer />
    </>
  );
}

function GameCanvas() {
  const width = 960;
  const height = 540;

  // DOMへの参照
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const titleCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // ゲーム状態の管理（Vueの let game = ref(0) に対応）
  // ループ内で常に最新の値を参照するため、状態とは別にRefでも保持する（Reactのクロージャ対策）

  // キー入力を保持するオブジェクト（再レンダリングでリセットされないようRefにする）
  const keyStateRef = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    // 1. 各種DOM、コンテキストの取得
    const canvas = canvasRef.current;
    const titleCanvas = titleCanvasRef.current;
    if (!canvas || !titleCanvas) return;

    const ctx = titleCanvas.getContext("2d");
    if (!ctx) return;

    // 2. Three.js 基本セットアップ
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(0, 0, 1000);

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // 平行光源
    const light = new THREE.AmbientLight(0xffffff, 2.0);
    light.intensity = 2;
    light.position.set(1, 1, 1);
    scene.add(light);

    // 3. 2Dキャンバス（タイトル画像）の読み込み
    const img = new Image();
    const handleImageLoad = () => {
      ctx.drawImage(img, 0, 0, 300, 150);
    };
    img.addEventListener("load", handleImageLoad, false);
    img.src = "/assets/games/titleimg.PNG"; // ※注：Reactのパブリックフォルダ等に合わせてパスは要調整

    // 4. キーボードイベントリスナー
    const handleKeyDown = (e: KeyboardEvent) => {
      keyStateRef.current[e.code] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keyStateRef.current[e.code] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // 5. 各種ゲームオブジェクトの生成
    const syougi = new Syougi(scene, camera, renderer);

    syougi.syougi_setup(scene);

    // アニメーションループフラグ
    let isMounted = true;

    // 7. メインループ (tick)
    const tick = async () => {
      if (!isMounted) return;
      requestAnimationFrame(tick);
      await syougi.syougi_loop(camera);
      renderer.render(scene, camera);
    };

    tick();

    // 8. クリーンアップ関数（コンポーネントが消えるときに発火）
    return () => {
      isMounted = false;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      img.removeEventListener("load", handleImageLoad);
      renderer.dispose(); // メモリリーク防止
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={canvasRef} className="myCanvasJS" style={canvasStyle}></canvas>
      <canvas ref={titleCanvasRef} className="myCanvas2D" style={canvasStyle}></canvas>
    </div>
  );
}

// スタイルの定義
const canvasStyle: React.CSSProperties = {
  position: "absolute",
  top: 50,
  left: 50,
  width: "960px",
  height: "540px",
};