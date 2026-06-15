// src/pages/BlogPost.tsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Header from '../components/layout/Header';
import {Footer} from '../components/layout/Footer';
import { Badge } from '../components/ui/Badge';
import { ALL_BLOG_DATA } from '../constants/blogs';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const blog = ALL_BLOG_DATA.find(item => item.id === Number(id));
  
  // マークダウンのテキストを管理するState
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!blog) return;

    const loadMarkdown = async () => {
      try {
        setIsLoading(true);
        // 💡 Viteのコア機能：特定のフォルダ以下のファイルを「生のテキスト(raw)」として一括キャッチ
        const markdownFiles = import.meta.glob('../blogs/*.md', { query: '?raw', import: 'default' });
        
        // 狙ったslugのパスを生成
        const targetPath = `../blogs/${blog.slug}.md`;
        
        if (markdownFiles[targetPath]) {
          // 非同期でファイルをインポート（読み込み）
          const fileContent = await markdownFiles[targetPath]();
          setMarkdownContent(fileContent as string);
        } else {
          setMarkdownContent('### 記事の本文ファイル（.md）が見つかりませんでした。');
        }
      } catch (error) {
        console.error('Error loading markdown:', error);
        setMarkdownContent('### 本文の読み込み中にエラーが発生しました。');
      } finally {
        setIsLoading(false);
      }
    };

    loadMarkdown();
  }, [blog]);

  // 404ガード
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white text-slate-800">
        <p className="font-bold mb-4">404 - 記事データが見つかりません</p>
        <Link to="/blogs" className="text-sm text-orange-500 font-bold underline">一覧に戻る</Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-28 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          {/* 上部ナビ */}
          <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Articles
          </Link>

          {/* 記事ヘッダーメタ */}
          <header className="border-b border-slate-100 pb-8 mb-10">
            <div className="flex items-center gap-5 text-slate-400 text-xs md:text-sm font-mono mb-4">
              <span className="flex items-center gap-1.5"><Calendar size={14} />{blog.date}</span>
              <span className="flex items-center gap-1.5"><Tag size={14} /><Badge text={blog.tag} /></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">{blog.title}</h1>
          </header>
          
          {/* 本文エリア */}
          {isLoading ? (
            <div className="py-10 text-center text-slate-400 font-mono text-sm animate-pulse">Loading content...</div>
          ) : (
            <main className="prose prose-slate max-w-none">
              <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                // 大見出し (#)
                h1: ({ ...props }) => <h1 className="text-3xl font-black text-slate-900 mt-12 mb-6 border-b border-slate-200 pb-3" {...props} />,
                // 中見出し (##)
                h2: ({ ...props }) => <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-5 border-b border-slate-100 pb-2" {...props} />,
                // 小見出し (###)
                h3: ({ ...props }) => <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4 border-slate-300 pb-1" {...props} />,
                
                // 💡 画像 (img) のスタイル定義を追加！
                img: ({ src, alt, ...props }) => (
                  <span className="block my-8 text-center">
                    <img 
                      src={src} 
                      alt={alt}
                      className="mx-auto max-w-full h-auto rounded-xl shadow-md border border-slate-100" 
                      {...props} 
                    />
                    {/* 画像の下にキャプション（代替テキスト）を薄く表示させる小技 */}
                    {alt && <span className="block text-xs text-slate-400 mt-2 font-sans">{alt}</span>}
                  </span>
                ),

                p: ({ ...props }) => <p className="text-slate-600 leading-relaxed my-4 text-sm md:text-base" {...props} />,
                ul: ({ ...props }) => <ul className="list-disc pl-6 my-4 text-slate-600 space-y-2" {...props} />,
                li: ({ ...props }) => <li className="text-sm md:text-base" {...props} />,
                code: ({ children, ...props }) => (
                  <code className="bg-slate-100 text-orange-600 font-mono text-xs px-1.5 py-0.5 rounded" {...props}>
                    {children}
                  </code>
                ),
                pre: ({ ...props }) => (
                  <pre className="bg-slate-950 text-slate-100 p-4 rounded-xl font-mono text-xs md:text-sm my-6 overflow-x-auto shadow-inner" {...props} />
                ),
              }}
            >
              {markdownContent}
            </ReactMarkdown>
            </main>
          )}

        </article>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;