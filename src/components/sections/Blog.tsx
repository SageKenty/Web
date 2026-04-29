import { DESIGN } from '../../constants/design';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';

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
  <a href={`/blog/${blog.id}`} className={`flex items-center py-[1.5vw] border-b ${DESIGN.colors.borderLight} ${DESIGN.colors.bgHover} transition-colors group`}>
    <span className="w-[10vw] text-[1.2vw] text-slate-400 font-mono">{blog.date}</span>
    <Badge text={blog.tag} />
    <h3 className={`flex-1 text-[1.5vw] font-medium ${DESIGN.colors.textMain} group-hover:text-orange-600 transition-colors truncate`}>
      {blog.title}
    </h3>
    <span style={{ color: DESIGN.colors.primary }} className="group-hover:translate-x-1 transition-transform">→</span>
  </a>
);

export default function BlogSection() {
  return (
    <section id="blog" className={`w-full ${DESIGN.layout.sectionPadding}`}>
      <div className={`${DESIGN.layout.containerMargin} px-6`}>
        <SectionHeader title="Training Log" subTitle="ブログ" />
        <div className={`flex flex-col border-t ${DESIGN.colors.borderBase}`}>
          {blogData.map((blog) => <BlogItem key={blog.id} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}