// src/components/ui/BlogRow.tsx
import { Link } from 'react-router-dom'; // <a>ではなくLinkを使う
import { Badge } from './Badge';
import { DESIGN } from '../../constants/design';
import type {BlogItem} from '../../constants/blogs';

export const BlogRow = ({ blog }: { blog : BlogItem }) => (
  <Link 
    to={`/blogs/${blog.id}`} // ブログのslugをURLに組み込む
    className="flex flex-col md:flex-row md:items-center py-6 border-b border-slate-100 group transition-all"
  >

<div className="flex items-center gap-4 mb-3 md:mb-0 md:w-48 shrink-0">
  {/* 日付 */}
  <span className="text-xs md:text-sm text-slate-400 font-mono shrink-0">{blog.date}</span>
  
  {/* バッジ（内部で幅が固定されているので、ただ置くだけで縦ラインが完璧に揃います） */}
  <Badge text={blog.tag} />
</div>
     <h3 className={`flex-1 text-base md:text-[1.5vw] font-bold ${DESIGN.colors.textMain} group-hover:text-orange-600 transition-colors leading-snug break-words md:ml-4`}> 
      {blog.title}
      </h3>
    <span className="hidden md:block ml-8 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-2 transition-all">
      →
    </span>
  </Link>
);