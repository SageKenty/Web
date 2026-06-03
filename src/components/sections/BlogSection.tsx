import { Link } from 'react-router-dom'; // <a>タグの代わりにこれを使う
import { ArrowRight } from 'lucide-react'; 

import { DESIGN } from '../../constants/design';
import { SectionHeader } from '../ui/SectionHeader';
import { ALL_BLOG_DATA } from '../../constants/blogs'; // 外部化した全データをインポート
import { BlogRow } from '../ui/BlogRow'; // 共通化したリスト1行分の部品

export default function BlogSection() {
  // トップページには最新の5件（または3件）だけを厳選して表示させる（スライス処理）
  const recentBlogs = ALL_BLOG_DATA.slice(0, 5);

  return (
    <section id="blogsec" className={`w-full ${DESIGN.layout.sectionPadding}`}>
      <div className="mx-auto px-6 md:px-[10vw]">
        <SectionHeader title="Recent Log" subTitle="最近のブログ" />
        
        {/* --- ブログリストエリア --- */}
        <div className={`flex flex-col border-t ${DESIGN.colors.borderBase} mt-8`}>
          {recentBlogs.map((blog) => (
            // 共通部品を呼び出す。型定義もBlogRow側で解決済み
            <BlogRow key={blog.id} blog={blog} />
          ))}
        </div>

        {/* --- View ALL ボタン (React RouterのLinkに変換) --- */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <Link 
            to="/blogs" // hrefではなく to になる
            className="
              flex items-center gap-2 px-8 py-4 
              bg-slate-900 text-white rounded-full font-bold shadow-lg 
              hover:bg-slate-800 active:scale-95 transition-all duration-150 text-sm md:text-base
            "
          >
            View ALL LOGS
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}