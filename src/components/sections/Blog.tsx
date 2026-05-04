import { DESIGN } from '../../constants/design';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { ArrowRight } from 'lucide-react'; // 矢印アイコン

interface BlogItem {
  id: number;
  date: string;
  tag: string;
  title: string;
}   

const blogData = [
  { id: 1, date: "2026.04.27", tag: "Tech", title: "C2PAを用いたコンテンツ証明の検討" },
  { id: 2, date: "2026.04.20", tag: "Lab", title: "修士1年、研究テーマが決まるまで" },
  { id: 3, date: "2026.04.15", tag: "Game", title: "最近ハマっているイナイレラフビルド構築" },
  { id: 4, date: "2026.04.10", tag: "Tech", title: "React + Tailwind v4 で作るポートフォリオ" },
  { id: 5, date: "2026.04.05", tag: "Daily", title: "北九州での生活と開発環境" },
];

const BlogItem = ({ blog }: { blog: BlogItem }) => (
  <a 
    href={`/blog/${blog.id}`} 
    className={`
      flex flex-col md:flex-row md:items-center 
      py-5 md:py-[1.5vw] 
      border-b ${DESIGN.colors.borderLight} 
      ${DESIGN.colors.bgHover} transition-all group
    `}
  >
    {/* --- メタ情報エリア (日付・タグ) --- */}
    <div className="flex items-center gap-3 mb-2 md:mb-0 md:w-[22vw] shrink-0">
      {/* 日付：スマホではさらに小さく(xs)、PCではvw */}
      <span className="text-xs md:text-[1.2vw] text-slate-400 font-mono w-20 md:w-[10vw]">
        {blog.date}
      </span>
      {/* タグ：Badgeのサイズ感はUI側にお任せ */}
      <Badge text={blog.tag} />
    </div>

    {/* --- タイトルエリア --- */}
    {/* md:ml-4 でPC時に少し間隔を空ける。truncateを外し、改行を許可 */}
    <h3 className={`
      flex-1 text-base md:text-[1.5vw] font-bold 
      ${DESIGN.colors.textMain} group-hover:text-orange-600 
      transition-colors leading-snug break-words md:pr-4
    `}>
      {blog.title}
    </h3>

    {/* --- アイコン --- */}
    {/* スマホでは省略(hidden)、PCのみ表示 */}
    <span 
      style={{ color: DESIGN.colors.primary }} 
      className="hidden md:block group-hover:translate-x-1 transition-transform"
    >
      →
    </span>
  </a>
);

export default function BlogSection() {
  return (
    <section id="blog" className={`w-full ${DESIGN.layout.sectionPadding}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-[10vw]">
        <SectionHeader title="Training Log" subTitle="ブログ" />
        
        <div className={`flex flex-col border-t ${DESIGN.colors.borderBase} mt-8`}>
          {blogData.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>

        {/* --- View ALL ボタン (PC・スマホ両方) --- */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <a 
            href="/blog"
            className="
              flex items-center gap-2 
              px-10 py-4 
              bg-slate-900 text-white 
              rounded-full font-black text-sm md:text-base
              shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5
              active:scale-95 transition-all
            "
          >
            View ALL LOGS
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}