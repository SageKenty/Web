import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import PortfolioSection from './components/sections/Works';
import BlogSection from './components/sections/Blog';

import yourImage from './assets/Hanz-on.webp';
import { SectionHeader } from './components/ui/SectionHeader';
import { DESIGN } from './constants/design';
import './App.css';
import { motion } from "framer-motion";
import SkillGraph from './components/ui/skillgraph';
import {SKILL_ICONS} from './constants/icons'

const colors = DESIGN.colors;

const skills = [
  { name: "Network", level: 2.5, color: "#0067C0", logoId: "network"},
  { name: "Security", level: 2.8, color: "#1e40af", logoId: "security"},
  { name: "Blockchain", level: 3, color: "#F7931A", logoId: "blockchain" },
  { name: "Python", level: 2.5 ,color: "#3776AB", logoId: "python" },
  { name: "JavaScript", level: 2.3 , color: "#F7DF1E", logoId: "js" },
  { name: "React", level: 2.1, color: "#61DAFB", logoId: "react" },
  
];

const SkillList = () => {
  return (
    <div className="w-[28vw] mx-auto space-y-[1vw]">
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

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PortfolioSection />
        <BlogSection />
        
  <section id="about" className = {`${DESIGN.layout.containerMargin} px-6`}>
    {/* セクションタイトル */}
    <SectionHeader title="About Me" subTitle="自己紹介" />

    <div className="flex flex-col md:flex-row gap-16">
      {/* --- 左側：自己紹介欄 --- */}
      <div className="flex-1 space-y-6">
        <div className="w-[24vw] radius-square rounded-2xl overflow-hidden">
          {/* 画像を入れる場所 */}
          <img src = {yourImage} alt="Me" className="w-full h-full object-cover" />
        </div>

        <div className="space-y-2">
          <div>
          <h3 className="text-[3vw] font-bold">関川 謙人 <br></br> Sekgiawa Kento</h3>
            <p className = {`font-bold text-[${DESIGN.colors.primary}] text-[1.2vw]`}>
              AGE/GENDER
            </p>
            <p>22歳 / 男性</p>
          </div>

          <div>
            <p className = {`font-bold text-[${DESIGN.colors.primary}] text-[1.2vw]`}>
            SPEC
          </p>
          <p>北九州市立大学 国際環境工学研究科<br></br> 情報工学専攻 修士1年</p>
          </div>

          <div>
            <p className = {`font-bold text-[${DESIGN.colors.primary}] text-[1.2vw]`}>
            COMMENT
          </p>
          <p>
            COMMENT
          </p>

          </div>
          
        </div>
      </div>

      {/* --- 右側：研究欄 --- */}


      <div className="flex-1 border-l-2 border-slate-100 pl-16 space-y-6">

        <div className="relative">
          <div className="absolute -left-[73px] top-2 w-4 h-4 bg-[#FF8C00] rounded-full" />
          <h4 className="text-xl font-black text-slate-400">Coursework</h4>
          <h5 className="text-2xl font-bold mt-1">学部1-3年</h5>
          <p className="mt-2 text-slate-600">Bachelor説明：卒業研究の内容や、そこで得た知見を簡潔に。</p>
        </div>

        <div className="relative">
          <div className="absolute -left-[73px] top-2 w-4 h-4 bg-[#FF8C00] rounded-full" />
          <h4 className="text-xl font-black text-slate-400">Bachelor</h4>
          <h5 className="text-2xl font-bold mt-1">学士研究</h5>
          <p className="mt-2 text-slate-600">Bachelor説明：卒業研究の内容や、そこで得た知見を簡潔に。</p>
        </div>

        <div className="relative">
          <div className="absolute -left-[73px] top-2 w-4 h-4 bg-[#FF8C00] rounded-full" />
          <h4 className="text-xl font-black text-slate-400">Master</h4>
          <h5 className="text-2xl font-bold mt-1">修士研究</h5>
          <p className="mt-2 text-slate-600">Master説明：現在取り組んでいる Society 5.0 やブロックチェーンの研究について。</p>
        </div>
      </div>
    </div>

    {/* --- 下部：SKILL Graph (五角形グラフ) --- */}
    <div className="flex items-start mt-[4vw] gap-[4vw]">
      <SkillGraph/>
      <SkillList />
    </div>
    </section>

      </main>
    </div>
  );
}

export default App;