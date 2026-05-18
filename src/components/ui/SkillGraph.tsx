import { motion, vw } from "framer-motion";
import { DESIGN } from "../../constants/design";

const colors = DESIGN.colors;
interface SkillGraphProps {
  // ここに必要なpropsを定義できます（例: skillsのデータなど）
}

const skills: { label: string; rank: string }[] = [
    { label: "熱意・探究", rank: "S" },
    { label: "研究", rank: "B" },
    { label: "技術", rank: "C" },
    { label: "協調・誠実", rank: "A" },
    { label: "社会実装", rank: "E" },
  ];


export const SkillGraph = ({}: SkillGraphProps) => {
  // --- データ定義 ---

  const rankValues: { [key: string]: number } = {
    SS: 1.0,
    S: 0.9,
    A: 0.8,
    B: 0.7,
    C: 0.6,
    D: 0.5,
    E: 0.4,
    F: 0.3,
    G: 0.2,
  };

  // --- 座標計算関数 (前回と同じ) ---
  const getCoordinates = (value: number, index: number) => {
    const angle = (Math.PI * 2) / 5 * index - Math.PI / 2;
    const radius = 40 * value;
    return { x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle) };
  };

  // --- アニメーション設定 (Variants) ---

  // 1. 親要素：子供たち(レーザー、ランク)のアニメーションを順番に発火させる
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // 0.3秒間隔で子供のアニメーションをスタート
        delayChildren: 0.5,   // 全体の開始を0.5秒遅らせる（ページロード後）
      },
    },
  };

  // 2. レーザー (polygon) の描画アニメーション
  // Framer Motionは polygonの points属性の数値を直接アニメーションさせることができます
  const laserVariants = {
    hidden: {
      // 初期状態は全ての頂点を真ん中(50,50)にする
      points: skills.map(() => "50,50").join(" "),
      opacity: 0,
    },
    visible: {
      // 最終状態は実際のスキル座標
      points: skills.map((s, i) => {
        const { x, y } = getCoordinates(rankValues[s.rank], i);
        return `${x},${y}`;
      }).join(" "),
      opacity: 1,
      transition: {
        duration: 1.5, // 1.5秒かけて描画
        ease: "easeInOut",
      },
    },
  };

  // 3. ランク文字のフェードインアニメーション
  const rankVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    },
  };

  return (
    <div className="flex flex-col items-center text-white w-full">
      {/* タイトル部分：スマホでは固定サイズ、PCではvw */}
      <div className="text-center mb-6 md:mb-[2vw]">
        <h3 className="text-sm md:text-[1.2vw] font-black tracking-widest text-slate-400">
          Self-Analysis Chart
        </h3>
        <h3 className="text-xl md:text-[2.2vw] font-black tracking-widest" style={{ color: colors.primary }}>
          自己分析チャート
        </h3>
      </div>

      {/* グラフ外枠：スマホでは幅90%（最大350px）、PCでは40vw */}
      <motion.div 
        className="relative w-[80vw] max-w-[320px] md:max-w-none md:w-[35vw] aspect-square"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <svg 
          viewBox="-15 -15 130 130" 
          className="w-full h-full overflow-visible"
        >
          {/*色グラデーションの定義*/}
          <defs>
            {/* SS: プラチナ・シルバー (高貴な輝き) */}
            <linearGradient id="grad-SS" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#C0C0C0" />
              <stop offset="100%" stopColor="#787878" />
            </linearGradient>

            {/* S: ゴールド (黄金の光沢) - これで『うんこ』とは言わせない */}
            <linearGradient id="grad-S" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE082" />
              <stop offset="50%" stopColor="#f4c733" />
              <stop offset="100%" stopColor="#8B6B00" />
            </linearGradient>

            {/* A: ホットピンク (鮮やかな熟練度) */}
            <linearGradient id="grad-A" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFB6C1" />
              <stop offset="100%" stopColor="#FF69B4" />
            </linearGradient>

            {/* B: ディープ・レッド (警告色ではない、深みのある赤) */}
            <linearGradient id="grad-B" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#faa0a0" />
              <stop offset="100%" stopColor="#cf0000" />
            </linearGradient>

            {/* C: ダーク・オレンジ (夕焼けのような重厚感) */}
            <linearGradient id="grad-C" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#FF8C00" />
            </linearGradient>

            {/* D: イエロー (クリアな光) */}
            <linearGradient id="grad-D" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffb3" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>

            {/* E: ライム・グリーン (成長と生命力) */}
            <linearGradient id="grad-E" x1="0%" y1="0%" x2="0%" y2="100%">
              {/* 上部：光が当たっている鮮やかな黄緑 */}
              <stop offset="0%" stopColor="#ADFF2F" /> 
              {/* 中間：標準的な黄緑 */}
              <stop offset="50%" stopColor="#7FFF00" />
              {/* 下部：少し深みのある緑で立体感を出す */}
              <stop offset="100%" stopColor="#32CD32" />
            </linearGradient>

            {/* F: ディープ・ブルー (知的な深海) */}
            <linearGradient id="grad-F" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5C5CFF" />
              <stop offset="100%" stopColor="#1717c9" />
            </linearGradient>

            {/* G: アース・ブラウン (大地の基礎) */}
            <linearGradient id="grad-G" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A0522D" />
              <stop offset="100%" stopColor="#5D2E0C" />
            </linearGradient>
          </defs>
          {/*色グラデーションの定義ここまで*/}

          {/* --- A. 背景の電脳ガイド線 --- */}
          {[0.2, 0.4, 0.6, 0.8, 1].map((step) => (
            <polygon
              key={step}
              points={skills.map((_, i) => {
                const { x, y } = getCoordinates(step, i);
                return `${x},${y}`;
              }).join(" ")}
              fill="none"
              stroke="rgba(0, 0, 0, 0.1)"
              strokeWidth="0.2"
            />
          ))}

          {/* --- B. 電脳レーザー描画 --- */}
          <motion.polygon
            variants={laserVariants} 
            fill="rgba(255, 140, 0, 0.15)"
            stroke="#FF8C00"
            strokeWidth="0.8"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 3px rgba(255,140,0,0.5))" }}
          />

          {/* --- C. 各点のランクとラベル --- */}
          {skills.map((skill, i) => {
            const labelPos = getCoordinates(1.35, i); // ラベルを少し外側(1.3)へ
            const { x, y } = getCoordinates(rankValues[skill.rank], i);
            const currentColor = `url(#grad-${skill.rank})`;

            return (
              <g key={i}>
                {/* 項目ラベル：fontSize="4"はviewBox内での相対値なのでそのままでOK */}
                <text
                  x={labelPos.x} y={labelPos.y}
                  fontSize="4.5" fontWeight="900" textAnchor="middle" fill="#64748b"
                >
                  {skill.label}
                </text>

                {/* 頂点のドット */}
                <circle cx={x} cy={y} r="1.5" fill={currentColor} />

                {/* ランク文字：y座標を少し調整してラベルと被らないように */}
                <motion.text 
                  variants={rankVariants}
                  x={labelPos.x} y={labelPos.y + 7.5} 
                  fontSize="8" fontWeight="900" textAnchor="middle" 
                  fill={currentColor}
                  style={{ 
                    filter: `drop-shadow(0 0 2px rgba(0,0,0,0.1))`,
                    fontFamily: "Inter, sans-serif" 
                  }}
                >
                  {skill.rank}
                </motion.text>
              </g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
};