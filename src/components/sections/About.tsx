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
  <div className="relative pl-8 md:pl-[2.5vw] pb-10 md:pb-[3vw] last:pb-0 group">
    {/* 垂直線：スマホでは固定幅(w-px)、PCではvwも可だがpxが安定 */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 group-last:bottom-auto group-last:h-4" />
    
    {/* ドット：スマホで小さくなりすぎないよう固定値をベースにする */}
    <div className="absolute left-0 top-2 w-4 h-4 md:w-[1.5vw] md:h-[1.5vw] bg-[#FF8C00] rounded-full -translate-x-1/2 shadow-sm group-hover:scale-125 transition-transform" />
    
    <div className="flex flex-col gap-1">
      {/* 文字サイズ：スマホでは固定(text-sm/lg)、PCでvwに切り替え */}
      <h3 className="text-sm md:text-[1.2vw] font-black text-slate-400 font-mono">
        {period}
      </h3>
      <h5 className="text-lg md:text-[1.8vw] font-bold" style={{ color: DESIGN.colors.primary }}>
        {title}
      </h5>
      <p className="mt-2 md:mt-[1vw] text-sm md:text-[1.1vw] text-slate-600 leading-relaxed max-w-prose">
        {description}
      </p>
    </div>
  </div>
);

export default function AboutSection() {
    return (
        <section id="about" className={`w-full ${DESIGN.layout.containerMargin}`}>
            <div className={`${DESIGN.layout.containerMargin}`}>
                <SectionHeader title="About Me" subTitle="自己紹介" />

                {/* flex-col (スマホ) から flex-row (PC) へ切り替え */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                    
                    {/* --- 上(スマホ)/左(PC)：自己紹介欄 --- */}
                    <div className="w-full md:w-1/2 space-y-8 pr-5">
                        {/* 画像サイズをスマホでは少し大きく、中央寄せ気味にする工夫 */}
                        <div className="w-48 h-48 md:w-[24vw] md:h-[24vw] rounded-3xl overflow-hidden shadow-xl ring-8 ring-slate-50">
                            <img src={yourImage} alt="Me" className="w-full h-full object-cover" />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl md:text-[3.5vw] font-black text-slate-800 leading-tight">
                                    関川 謙人 <br />
                                    <span className="text-xl md:text-[2vw] text-slate-400 font-medium">Sekigawa Kento</span>
                                </h3>
                            </div>

                            <div className="grid">
                                {PROFILE_DATA.map((item) => (
                                    <div key={item.label} className="">
                                        <p className="font-black text-xs md:text-[1vw] uppercase" style={{ color: DESIGN.colors.primary }}>
                                            {item.label}
                                        </p>
                                        <p className="text-base md:text-[1.3vw] text-slate-700" >
                                            {item.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- 下(スマホ)/右(PC)：研究欄 --- */}
                    <div className="w-full md:w-1/2 pt-4 pr-4 md:pt-2 md:pr-15">
                        {/* スマホで見るときに、ここが「研究の履歴」だとわかるように小さな見出しがあってもいいですね */}
                        <p className="md:hidden text-xs font-bold text-slate-400 mb-6 tracking-[0.2em] uppercase">
                            —— Research Timeline ——
                        </p>
                        <div className="max-w-md md:max-w-none">
                            {TIMELINE_DATA.map((item, index) => (
                              <TimelineItem key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}