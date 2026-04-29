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
  { name: "React", level: 2.1, color: "#61DAFB", logoId: "react" },
];

export const SkillList = () => {
  return (
    <div className="w-[35vw] mx-auto space-y-[1vw]">
      {/*スキルリスト*/}
      <div className="text-center  mb-[2vw]">
        {/*スキルリストのタイトル */}
       <h3 className="text-[1.5vw] font-black  trackin-widest text-slate-400">Skill Levels</h3>
        <h3 className={`text-[2vw] font-black trackin-widest text-[${colors.primary}]`}>スキルレベル</h3>
        <p className = "text-[1.0vw] font-midium trackin-widest text-slate-400">※<a href = "https://example.com" className = "text-blue-900 hover:underline">ITFS</a>を参照。本ブログではMax値をL.5に設定。</p>
        <a href="https:/example.com" className = "text-[1.0vw] font-midium trackin-widest text-blue-900 hover:underline">判定方法についてはこちらのページから</a>
      </div>
      {skills.map((skill, index) => (
        <div key={index} className="relative">
          {/* ロゴと名前 */}
          <div className="flex items-center gap-[1vw] mb-[0.5vw]">
            <div 
                className="flex items-center justify-center w-[2vw] h-[2vw]"
                style={{ 
                  filter: `drop-shadow(0 0 0.5vw ${skill.color})`,
                  color: skill.color // SVGのfill-currentやテキストに色が乗るように
                }}
              >
                {/* 渡されたのが何であれ、そのまま表示するだけ */}
                <div className = "w-[2vw] aspect-square fill-current">
                  { SKILL_ICONS[skill.logoId] || "❓"}
                </div>
              </div>
            <span 
              className="text-[1.2vw] font-bold tracking-tight"
              /* 名前も少しだけその色を混ぜるとネオン感が増します */
              style={{ color: skill.color }}
            >
              {skill.name}
            </span>
          </div>

          {/* バーの背景 */}
          <div className="h-[1vw] bg-slate-100 rounded-full overflow-hidden relative">
            {/* 動くアニメーションバー */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(skill.level / 5) * 100}%` }}
              viewport={{ once: true }}
              //duration: 1.5秒、easeOut、遅延はスキルごとに0.1秒ずつ増加
              transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
              style={{ 
                backgroundColor: skill.color,
                boxShadow: `0 0 10px ${skill.color}80` 
              }}
              className={`h-full rounded-full /* 外側の光 */
              shadow-[0_0_15px_rgba(0.8),0_0_30px_${skill.color}/80] /* 外側の強い光 */
              /* 内側の光 */
              inset-shadow-[0_0_10px_${skill.color}/50]
              /* テキストの光 */
              drop-shadow-[0_0_10px_${skill.color}]`}
            />
          </div>

          {/* レベル表示 (バーの右端付近に絶対配置) */}
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