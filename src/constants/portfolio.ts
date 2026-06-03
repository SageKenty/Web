import firebit from '../assets/firebit.jpg';

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
  { id: 1, tag: "工事中", title: "全て工事中", desc: "説明文が入ります。", status: "Completed", img: firebit, githubLink: "https://github.com/..." },
  { id: 2, tag: "工事中", title: "工事中", desc: "工事中", status: "In Progress", img: firebit, demoLink: "https://example.com", githubLink: "https://github.com/..." },
  { id: 3, tag: "工事中", title: "工事中", desc: "工事中", status: "Completed", img: firebit, demoLink: "https://example.com", githubLink: "https://github.com/..." },
  { id: 4, tag: "工事中", title: "工事中", desc: "工事中", status: "Completed", img: firebit, demoLink: "https://example.com", githubLink: "https://github.com/..." },
];