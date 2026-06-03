// src/components/ui/Badge.tsx

import { DESIGN } from '../../constants/design';

interface BadgeProps {
  text: string;
  variant?: 'outline' | 'pill';
}

export const Badge = ({ text, variant = 'outline' }: BadgeProps) => {
  // --- Pill Variant (丸カプセル型) ---
  if (variant === 'pill') {
    return (
      <span 
        className={`
          inline-block 
          /* 🛠 スマホ・PC共に関数を固定幅にする (例: w-16 や md:w-[6vw]) */
          w-16 md:w-[6vw] text-center
          py-1 md:py-[0.5vw] 
          rounded-full bg-orange-100 
          text-[10px] md:text-[1.2vw] font-bold
          whitespace-nowrap
        `} 
        style={{ color: DESIGN.colors.primary }}
      >
        {text}
      </span>
    );
  }

  // --- Outline Variant (枠線あり・ドット付き) ---
  return (
    <div 
      className={`
        flex items-center 
        /* 🛠 修正ポイント1: スマホ時も w-fit ではなく固定値(w-16等)にする */
        w-16 md:w-[15vw] 
        p-1 md:p-1.5 
        border ${DESIGN.radius.subtle} 
        /* 🛠 修正ポイント2: 予期せぬズレを防ぐため、自分自身の左右マージン(mx)を削除 */
        whitespace-nowrap
      `} 
      style={{ borderColor: DESIGN.colors.primary }}
    >
      {/* ドット */}
      <span className="w-1.5 h-1.5 md:w-[0.8vw] md:h-[0.8vw] bg-orange-500 rounded-full ml-1 md:ml-[0.5vw] shrink-0"></span>
      
      {/* テキスト： flexの仕組みのなかで mx-auto で完全にセンターへ */}
      <span className="mx-auto text-[10px] md:text-[1.1vw] font-bold text-slate-700">
        {text}
      </span>
    </div>
  );
};