import { motion } from "framer-motion";
import { DESIGN } from '../../constants/design';
import { SKILL_ICONS } from '../../constants/icons';

const colors = DESIGN.colors;

const skills = [
  { name: "Network", level: 2.5, color: "#0067C0", logoId: "network"},
  { name: "Security", level: 2.8, color: "#1e40af", logoId: "security"},
  { name: "Blockchain", level: 3, color: "#F7931A", logoId: "blockchain" },
  { name: "Python", level: 2.5 ,color: "#3776AB", logoId: "python" },
  { name: "JavaScript", level: 2.3 , color: "#F7DF1E", logoId: "js" },
  { name: "React", level: 2.4, color: "#61DAFB", logoId: "react" },
];

export const SkillList = () => {
  return (
    <div className="w-full md:w-[35vw] mx-auto space-y-6 md:space-y-[1vw]">
      {/* --- タイトル・基準説明 --- */}
      <div className="text-center mb-8 md:mb-[2vw]">
        <h3 className="text-sm md:text-[1.5vw] font-black tracking-widest text-slate-400">
          Skill Levels
        </h3>
        <h3 className="text-xl md:text-[2vw] font-black tracking-widest mb-4 md:mb-0" style={{ color: colors.primary }}>
          スキルレベル
        </h3>
        
        {/* 基準説明: スマホでは左寄せにして読みやすくする */}
        <div className="text-xs md:text-[1.0vw] font-medium text-slate-400 leading-relaxed text-left md:text-center bg-slate-50 md:bg-transparent p-4 md:p-0 rounded-lg">
          <p className="mb-2">
            ※
            <a href="https://example.com" className="text-blue-900 hover:underline">
              マイナビ
            </a>
            を参考に以下の基準で判定。
          </p>
          <ul className="list-none space-y-1">
            <li><span className="font-bold text-slate-500">L.1：</span> 文法や基礎動作を知っている（Hello Worldができる）。</li>
            <li><span className="font-bold text-slate-500">L.2：</span> ライブラリや仕様を調べて、組み合わせて実装，説明できる。</li>
            <li><span className="font-bold text-slate-500">L.3：</span> フレームワークや仕様を理解し、最適な設計ができる。</li>
            <li><span className="font-bold text-slate-500">L.4：</span> パフォーマンス改善や、多人数開発での共通基盤を作れる。</li>
            <li><span className="font-bold text-slate-500">L.5：</span> 言語そのものの仕様に精通し、新しいライブラリを自作できる。</li>
          </ul>
        </div>
      </div>

      {/* --- スキルバーのリスト --- */}
      {skills.map((skill, index) => (
        <div key={index} className="relative">
          {/* ロゴと名前 */}
          <div className="flex items-center gap-3 md:gap-[1vw] mb-2 md:mb-[0.5vw]">
            <div 
              className="flex items-center justify-center w-6 h-6 md:w-[2vw] md:h-[2vw]"
              style={{ 
                filter: `drop-shadow(0 0 4px ${skill.color})`,
                color: skill.color 
              }}
            >
              <div className="w-full h-full fill-current">
                {SKILL_ICONS[skill.logoId] || "❓"}
              </div>
            </div>
            <span 
              className="text-base md:text-[1.2vw] font-bold tracking-tight"
              style={{ color: skill.color }}
            >
              {skill.name}
            </span>
          </div>

          {/* バーの背景 */}
          {/* スマホ: h-3 (12px), PC: h-[1vw] */}
          <div className="h-3 md:h-[1vw] bg-slate-100 rounded-full overflow-hidden relative">
            {/* 動くアニメーションバー */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(skill.level / 5) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
              style={{ 
                backgroundColor: skill.color,
                boxShadow: `0 0 10px ${skill.color}80` 
              }}
              className="h-full rounded-full"
            />
          </div>

          {/* レベル表示 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + index * 0.1 }}
            className="absolute right-0 top-0 md:-top-[0.5vw] font-black text-sm md:text-[1.2vw]"
            style={{ color: skill.color }}
          >
            L.{skill.level}
          </motion.div>
        </div>
      ))}
    </div>
  );
};