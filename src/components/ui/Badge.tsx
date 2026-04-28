import { DESIGN } from '../../constants/design';

interface BadgeProps {
  text: string;
  variant?: 'outline' | 'pill';
}

export const Badge = ({ text, variant = 'outline' }: BadgeProps) => {
  if (variant === 'pill') {
    return (
      <span className={`inline-block px-[1vw] py-[0.5vw] rounded-full bg-orange-100 text-[1.2vw] font-bold`} style={{ color: DESIGN.colors.primary }}>
        {text}
      </span>
    );
  }

  return (
    <div className={`flex items-center w-[10vw] p-1.5 border ${DESIGN.radius.subtle} mx-[2vw]`} style={{ borderColor: DESIGN.colors.primary }}>
      <span className="w-[1.2vw] h-[1.2vw] bg-orange-500 rounded-full mr-[1.5vw]"></span>
      <span className="mx-auto text-[1.2vw] font-bold text-slate-700">{text}</span>
    </div>
  );
};