import { SectionHeader } from '../ui/SectionHeader';
import { SkillGraph } from '../ui/SkillGraph';
import { SkillList } from '../ui/SkillList';
import { DESIGN } from '../../constants/design'; // デザイン定義を想定

export default function SkillsSection() {
  return (
    <section 
      id="skill" 
      className="
        w-full 
        /* スマホ：上下余白を固定値(mt-12)に。PC：vw単位で調整 */
        mt-12 md:mt-[5vw] 
        px-6 md:px-[10vw]
      "
    >
      <SectionHeader title="Skills" subTitle="特技/できること" />
   
      {/* スマホ：flex-col (縦並び) ＋ items-center (中央寄せ)
        PC：md:flex-row (横並び) ＋ items-start (上揃え)
      */}
      <div className="flex flex-col md:flex-row items-center md:items-start mt-8 md:mt-[4vw] gap-12 md:gap-[5vw]">
        
        {/* グラフエリア：スマホでは幅いっぱいにして中央に配置 */}
        <div className="w-full md:w-1/2 flex justify-center">
          <SkillGraph />
        </div>

        {/* リストエリア：スマホでは下側に配置 */}
        <div className="w-full md:w-1/2">
          <SkillList />
        </div>
      </div>

      {/* 判断基準リンク：スマホでも押しやすいサイズに */}
      <div className="flex justify-center">
        <a 
          href="https://example.com" 
          className="
            inline-block text-center font-bold 
            mt-10 md:mt-[3vw] 
            text-sm md:text-[1.2vw] 
            text-blue-900 hover:underline hover:text-blue-700
            transition-colors
          "
        >
          🏆 スキル判定の基準はこちら
        </a>
      </div>
    </section>
  );
};