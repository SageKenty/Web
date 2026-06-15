import firebit from '/assets/firebit.jpg';
import IcnDpki from '/assets/portfolio/ICN-DPKI.png';
import ShogiGame from '/assets/portfolio/ShogiGame.png';
import MySite from '/assets/portfolio/MySite.png';
import shooting from '/assets/portfolio/shooting.png';

export interface PortfolioItem {
  id: number;
  tag: string;
  title: string;
  desc: string;
  status: 'Completed' | 'In Progress';
  img: string;
  demoLink?: string;  
  githubLink?: string; 
}

// ➔ すべて「工事中」に書き換え
export const portfolioData: PortfolioItem[] = [
  { id: 1, tag: "Research", title: "ICNにおけるBlockchainを用いた分散型鍵管理に関する研究", desc: "Demoを押すと学会発表時の講演情報サイトに飛びます。", status: "Completed", img: IcnDpki , demoLink: "https://pub.confit.atlas.jp/ja/event/general2026/presentation/TPO-1-298"},
  { id: 2, tag: "Portfolio", title: "将棋", desc: "学部3年生の頃に作成した将棋アプリです。将棋モデルは友人が製作しています。", status: "Completed", img: ShogiGame, githubLink: "https://github.com/PeaCH-ktq/PeaCH_Game" , demoLink: "/demos/shogi"},
  { id: 3, tag: "Portfolio", title: "本Webサイト", desc: "本WebサイトはFigmaでデザインし、Reactで作成しています。また、Geminiの力を借りています。", status: "In Progress", img: MySite },
  { id: 4, tag: "Portfolio", title: "シューティングゲーム", desc: "学部2年生の頃に授業で作成したシューティングゲームです。", status: "Completed", img: shooting }
];