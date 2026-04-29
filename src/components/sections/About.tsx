import { SectionHeader } from "../ui/SectionHeader"
import {DESIGN} from "../../constants/design"
import yourImage from "../../assets/Hanz-on.webp"

// プロフィールの型定義
export interface ProfileItem {
  label: string;
  content: string;
}

// タイムラインの型定義
export interface TimelineItemData {
  period: string;
  title: string;
  description: string;
}

export const PROFILE_DATA: ProfileItem[] = [
  { label: "AGE / GENDER", content: "22歳 / 男性" },
  { label: "SPEC", content: "北九州市立大学 国際環境工学研究科 情報工学専攻 修士1年" },
  { label: "COMMENT", content: "Society 5.0の実現に向けたブロックチェーン技術とネットワークインフラの研究に従事。技術を『触って理解する』ことを信条にしています。" },
];

export const TIMELINE_DATA: TimelineItemData[] = [
  {
    period: "Coursework",
    title: "学部1-3年",
    description: "情報工学の基礎を習得。プログラミング、ネットワーク、セキュリティの概論を学び、理論と実装の基礎を固めた時期。"
  },
  {
    period: "Bachelor",
    title: "学士研究",
    description: "C2PAとブロックチェーンを組み合わせたコンテンツの真正性担保に関する研究。国内学会での発表・受賞を経験。"
  },
  {
    period: "Master",
    title: "修士研究",
    description: " Society 5.0 における自律分散型インフラの研究。ハイパーレジャーファブリックを用いた実証実験を計画中。"
  },
];

const TimelineItem = ({ period, title, description }: TimelineItemData) => (
  <div className="relative pl-[2.5vw] pb-[3vw] last:pb-0 group">
    {/* 垂直線 (border-l) を親に持たせるのではなく、アイテムごとに描画すると制御が楽 */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 group-last:bottom-auto group-last:h-4" />
    
    {/* ドット: 親の w-px の真上に配置するために transform-x-[-50%] を使用 */}
    <div className="absolute left-0 top-2 w-[2vw] h-[2vw] bg-[#FF8C00] rounded-full -translate-x-1/2 shadow-sm group-hover:scale-125 transition-transform" />
    
    <div className="flex flex-col gap-1">
      <h3 className="text-[2vw] font-black text-slate-400">
        {period}
      </h3>
      <h5 className={`text-[2vw] font-bold text-[${DESIGN.colors.primary}]`}>
        {title}
      </h5>
      <p className="mt-[1vw] text-[2vw] text-slate-600 leading-relaxed max-w-prose">
        {description}
      </p>
    </div>
  </div>
);

export default function AboutSection() {
    return (
        <section id="about" className = {`${DESIGN.layout.containerMargin} px-6`}>
            {/* セクションタイトル */}
            <SectionHeader title="About Me" subTitle="自己紹介" />

            <div className="flex flex-row gap-16">
                {/* --- 左側：自己紹介欄 --- */}
                <div className="flex-1 space-y-6 w-1/2">
                    <div className="w-[24vw] radius-square rounded-2xl overflow-hidden">
                        {/* 画像を入れる場所 */}
                        <img src = {yourImage} alt="Me" className="w-full h-full object-cover" />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-[3vw] font-bold">関川 謙人 <br></br> Sekgiawa Kento</h3>
                        {PROFILE_DATA.map((item) => (
                            <div key = {item.label}>
                                <p className = {`font-bold text-[${DESIGN.colors.primary}] text-[2vw]`}>
                                    {item.label}
                                </p>
                                <p className = "text-[2vw] text-slate-600">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- 右側：研究欄 --- */}
                <div className = 'mx-auto w-1/2'>
                    {TIMELINE_DATA.map((item, index) => (
                      <TimelineItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
