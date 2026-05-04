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
          px-3 py-1 md:px-[1vw] md:py-[0.5vw] 
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
        /* スマホ：幅は自動(w-fit)・余白少なめ。PC：固定幅(10vw)・外余白(mx-2vw) */
        w-fit md:w-[10vw] 
        p-1.5 md:p-1.5 
        border ${DESIGN.radius.subtle} 
        mx-1 md:mx-[2vw]
        whitespace-nowrap
      `} 
      style={{ borderColor: DESIGN.colors.primary }}
    >
      {/* ドット：スマホで小さくなりすぎないよう固定値をベースにする */}
      <span className="w-2 h-2 md:w-[1.2vw] md:h-[1.2vw] bg-orange-500 rounded-full mr-2 md:mr-[1.5vw] shrink-0"></span>
      
      {/* テキスト：スマホでは10px〜12px程度を確保 */}
      <span className="mx-auto text-[10px] md:text-[1.2vw] font-bold text-slate-700">
        {text}
      </span>
    </div>
  );
};