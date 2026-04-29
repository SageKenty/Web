import { motion } from "framer-motion";
import { DESIGN } from '../../constants/design';
import { SKILL_ICONS } from '../../constants/icons';

const colors = DESIGN.colors;

// データをコンポーネント内に閉じ込める（または別ファイルからimport）
const skills = [
  { name: "Network", level: 2.5, color: "#0067C0", logoId: "network"},
  { name: "Security", level: 2.8, color: "#1e40af", logoId: "security"},
  { name: "Blockchain", level: 3, color: "#F7931A", logoId: "blockchain" },
  { name: "Python", level: 2.5 ,color: "#3776AB", logoId: "python" },
  { name: "JavaScript", level: 2.3 , color: "#F7DF1E", logoId: "js" },
  { name: "React", level: 2.1, color: "#61DAFB", logoId: "react" },
];

export const SkillList = () => {
  return (
    <div className="w-[28vw] mx-auto space-y-[1vw]">
      {/* タイトル部分 */}
      <div className="text-center mb-[2vw]">
        <h3 className="text-[1.5vw] font-black tracking-widest text-slate-400">Skill Levels</h3>
        <h3 className={`text-[2vw] font-black tracking-widest text-[${colors.primary}]`}>スキルレベル</h3>
        <p className="text-[1.0vw] font-medium tracking-widest text-slate-400">
          ※<a href="#" className="text-blue-900 hover:underline">ITFS</a>を参照。Max L.5。
        </p>
      </div>

      {skills.map((skill, index) => (
        <div key={skill.name} className="relative">
          {/* ロゴ・バー・レベルの描画ロジック（中身はそのまま移動） */}
          <div className="flex items-center gap-[1vw] mb-[0.5vw]">
            <div 
              className="flex items-center justify-center w-[2vw] h-[2vw]"
              style={{ filter: `drop-shadow(0 0 0.5vw ${skill.color})`, color: skill.color }}
            >
              <div className="w-[2vw] aspect-square fill-current">
                {SKILL_ICONS[skill.logoId] || "❓"}
              </div>
            </div>
            <span className="text-[1.2vw] font-bold tracking-tight" style={{ color: skill.color }}>
              {skill.name}
            </span>
          </div>

          <div className="h-[1vw] bg-slate-100 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(skill.level / 5) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
              style={{ backgroundColor: skill.color }}
              className="h-full rounded-full shadow-[0_0_15px_rgba(255,140,0,0.8)]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + index * 0.1 }}
            className="absolute right-0 -top-[0vw] font-black text-[1.2vw]"
            style={{ color: skill.color }}
          >
            L.{skill.level}
          </motion.div>
        </div>
      ))}
    </div>
  );
};