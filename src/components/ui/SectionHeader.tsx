import { DESIGN } from '../../constants/design';

interface SectionHeaderProps {
  title: string;
  subTitle: string;
}

export const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => (
  <div className="mb-8 md:mb-[3vw]">
    {/* タイトル: スマホでは 32px (3xl)、PCでは 3vw */}
    <h2 className="text-3xl md:text-[3vw] font-black leading-tight text-slate-800">
      {title}
    </h2>
    {/* サブタイトル: スマホでは 14px (sm)、PCでは 1.5vw */}
    <p 
      className="text-sm md:text-[1.5vw] font-bold tracking-widest mt-1 md:mt-0" 
      style={{ color: DESIGN.colors.primary }}
    >
      {subTitle}
    </p>
  </div>
);