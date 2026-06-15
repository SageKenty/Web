import { SectionHeader } from "../ui/SectionHeader"
import { DESIGN } from "../../constants/design"
import yourImage from "/assets/Hanz-on.webp"

// プロフィールの型定義
export interface ProfileItem {
  label: string;
  content: string;
}

// リンク個別の型定義
export interface TimelineLink {
  text: string;
  url: string;
}

// タイムラインの型定義（linksを配列形式に拡張）
export interface TimelineItemData {
  period: string;
  title: string;
  description: string;
  links?: TimelineLink[]; // 複数のリンクを保持できる配列
}

export const PROFILE_DATA: ProfileItem[] = [
  { label: "SPEC", content: "北九州市立大学 国際環境工学研究科 情報工学専攻 修士1年" },
  { label: "COMMENT", content: "Blockchainをセキュリティ、ネットワークなど幅広い視点を持ちながら研究しています。あらゆることをやってみたいと考える関心の広さとあらゆる人と関わりたいと考える人当たりの良さが売りです。Webはもちろん、さまざまな技術やシステムに興味を持って取り組んでいます。現状大規模なシステム開発などに携わった経験はありませんが、実務に携わるときは一日でも早く戦力になれるように努力したいです。" },
];

export const TIMELINE_DATA: TimelineItemData[] = [
  {
    period: "Coursework",
    title: "学部1-3年",
    description: "基礎力や実装力を上げるために必死で実習や課題、プログラミングサークルでの活動に尽力しました。具体的にはシューティングゲームや将棋風ゲーム、ハッカソンなどに挑戦しました。",
    links: [
      { text: "プログラミングサークル PEACH", url: "https://peach-ktq.dev/" }
    ]
  },
  {
    period: "Bachelor",
    title: "学士研究",
    description: "「ICNにおけるBlockchainを用いた分散型鍵管理手法に関する研究」古閑・伊藤研究室にて情報指向ネットワーク(ICN)の信頼性をBlockchainを使ったPKIシステム、DPKIで担保しようと試みる研究を行いました。概念実証のための実装実験を行い、成果を2026年3月、IEICE総合大会学生ポスターセッションにて発表。ポスター優秀賞を受賞しました。",
    links: [
      { text: "古閑・伊藤研究室 Webサイト", url: "https://kogalab.net/" },
      { text: "IEICE 学生ポスターセッション受賞者一覧", url: "https://www.ieice.org/jpn_r/junior/poster_session_awards_2026.html" }
    ]
  },
  {
    period: "Master",
    title: "修士研究",
    description: "上原研究室に所属しています。Blockchainで何らかの社会貢献ができたらなと考えています。また、ICCE TWでの採択及び発表を目標にしています。"
  },
];

const TimelineItem = ({ period, title, description, links }: TimelineItemData) => (
  <div className="relative pl-8 md:pl-[2.5vw] pb-10 md:pb-[3vw] last:pb-0 group">
    {/* 垂直線 */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 group-last:bottom-auto group-last:h-4" />
    
    {/* ドット */}
    <div className="absolute left-0 top-2 w-4 h-4 md:w-[1.5vw] md:h-[1.5vw] bg-[#FF8C00] rounded-full -translate-x-1/2 shadow-sm group-hover:scale-125 transition-transform" />
    
    <div className="flex flex-col gap-1">
      <h3 className="text-sm md:text-[1.2vw] font-black text-slate-400 font-mono">
        {period}
      </h3>
      <h5 className="text-lg md:text-[1.8vw] font-bold" style={{ color: DESIGN.colors.primary }}>
        {title}
      </h5>
      <p className="mt-2 md:mt-[1vw] text-sm md:text-[1.1vw] text-slate-600 leading-relaxed max-w-prose">
        {description}
      </p>

      {/* 🌟 リンク配列が存在し、中身がある場合のみループ処理で描画 */}
      {links && links.length > 0 && (
        <div className="mt-3 md:mt-[0.8vw] flex flex-col gap-1.5">
          {links.map((link, idx) => (
            <div key={idx}>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs md:text-[1vw] font-bold text-slate-500 hover:text-slate-800 transition-colors underline underline-offset-4 decoration-slate-300 hover:decoration-slate-600"
              >
                {link.text} ↗
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default function AboutSection() {
    return (
        <section id="about" className={`w-full md:mx-[5vw]`}>
            <div className={`pl-6 md:mx-[5vw]`}>
                <SectionHeader title="About Me" subTitle="自己紹介" />

                <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                    
                    {/* --- 上(スマホ)/左(PC)：自己紹介欄 --- */}
                    <div className="w-full md:w-1/2 space-y-8 pr-5">
                        <div className="w-48 h-48 md:w-[24vw] md:h-[24vw] rounded-3xl overflow-hidden shadow-xl ring-8 ring-slate-50">
                            <img src={yourImage} alt="Me" className="w-full h-full object-cover" />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl md:text-[3.5vw] font-black text-slate-800 leading-tight">
                                    関川 謙人 <br />
                                    <span className="text-xl md:text-[2vw] text-slate-400 font-medium">Kento Sekigawa</span>
                                </h3>
                            </div>

                            <div className="grid">
                                {PROFILE_DATA.map((item) => (
                                    <div key={item.label} className="pb-3">
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