import { motion, vw } from "framer-motion";
import { DESIGN } from "../../constants/design";

const colors = DESIGN.colors;

interface SkillGraphProps {
  // ここに必要なpropsを定義できます（例: skillsのデータなど）
}

const skills: { label: string; rank: string }[] = [
    { label: "Passion", rank: "S" },
    { label: "Relation", rank: "B" },
    { label: "Research", rank: "B" },
    { label: "Obstinacy", rank: "F" },
    { label: "Develop", rank: "C" },
  ];


export const SkillGraph = ({}: SkillGraphProps) => {
  // --- データ定義 ---

  const rankColors: {[key: string] : string} = {
      SS: "#C0C0C0", // 銀 (Silver)
      S: "#D4AF37", // 金 (Gold)
      A: "#FF69B4", // ピンク (HotPink)
      B: "#FF0000", // 赤 (Red)
      C: "#FF8C00", // オレンジ (DarkOrange)
      D: "#FFD700", // 黄色 (Gold/Yellow)
      E: "#ADFF2F", // 黄緑 (GreenYellow)
      F: "#1717c9", // 青 (Blue)
      G: "#8B4513", // 茶色 (SaddleBrown)
  };

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
    <div className="flex flex-col items-center text-white">
      <div className="text-center">
        <h3 className="text-[1.5vw] font-black  trackin-widest text-slate-400">Skill Graph</h3>
        <h3 className={`text-[2vw] font-black mb-[2vw] trackin-widest text-[${colors.primary}]`}>直感能力値グラフ</h3>
      </div>
      {/* 親要素：whileInView を使うことで、スクロールして見えた瞬間に起動 */}
        <motion.div 
          className="relative w-[40vw] aspect-square"
          initial="hidden"
          whileInView="visible" // これでスクロール検知が復活
          viewport={{ once: true, amount: 0.5 }} // 要素が50%見えたら起動（一度きり）
          variants={containerVariants}
        >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          {/* --- A. 背景の電脳ガイド線（五角形） --- */}
          {[0.2, 0.4, 0.6, 0.8, 1].map((step) => (
            <polygon
              key={step}
              points={skills.map((_, i) => {
                const { x, y } = getCoordinates(step, i);
                return `${x},${y}`;
              }).join(" ")}
              fill="none"
              stroke="rgba(1, 1, 1, 0.2)" // 少し薄く
              strokeWidth="0.3"
            />
          ))}

          {/* --- B. 電脳レーザー描画 (polygon) --- */}
          <motion.polygon
            variants = {laserVariants} 
            fill="rgba(255, 140, 0, 0.15)" // 領域の内側
            stroke="#FF8C00" // レーザーの色
            strokeWidth="0.7"
            strokeLinejoin="round"
            // レーザーっぽいグロー効果（ドロップシャドウ）を追加
            style={{ filter: "drop-shadow(0 0 2px #FF8C00)" }}
          />

          {/* --- C. 各点のランクとラベル --- */}
          {skills.map((skill, i) => {
            const labelPos = getCoordinates(1.25, i); // getCoodinates(グラフからの距離,i)
            const rankPos = getCoordinates(rankValues[skill.rank] + 0.15, i); // ランク（グラフのすぐ外）
            const currentColor = rankColors[skill.rank] || "#000000"; // ランクに応じた色
            return (
              <g key={i}>
                {/* 項目名（これは最初から薄く見えていてもいいかも） */}
                <text 
                  x={labelPos.x} y={labelPos.y} 
                  fontSize="4" fontWeight="bold" textAnchor="middle" fill="#94a3b8"
                >
                  {skill.label}
                </text>

                {/* おまけ：頂点に小さなドットを置くとより綺麗です */}
                <circle 
                  cx={getCoordinates(rankValues[skill.rank], i).x} 
                  cy={getCoordinates(rankValues[skill.rank], i).y} 
                  r="1.5" 
                  fill={currentColor} 
                />
                
                {/* ランク (S, Bなど) ： レーザー到達後に順番に表示 */}
                <motion.text 
                  variants={rankVariants} // 親のstaggerChildrenで順番に発火
                  x={rankPos.x} y={rankPos.y} 
                  fontSize="7" fontStyle="Black" fontWeight="black" textAnchor="middle" 
                  fill={currentColor}
                  style={{ filter: "drop-shadow(0 0 0.5px " + currentColor + ")" }}
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