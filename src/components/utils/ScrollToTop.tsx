import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // ページ遷移（パス名が変わった瞬間）にスクロール位置を一番上に戻す
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 画面には何も描画しない
}