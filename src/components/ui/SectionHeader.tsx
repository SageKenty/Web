import { DESIGN } from '../../constants/design';

interface SectionHeaderProps {
  title: string;
  subTitle: string;
}

export const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => (
  <div className="mb-[3vw]">
    <h2 className="text-[3vw] font-black">{title}</h2>
    <p className={`text-[1.5vw] font-bold`} style={{ color: DESIGN.colors.primary }}>
      {subTitle}
    </p>
  </div>
);