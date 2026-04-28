// デザインの源泉（Single Source of Truth）
export const DESIGN = {
  colors: {
    primary: "#FF8C00",      // Hanz ON メインオレンジ
    accent: "#F7931A",       // ナビ・装飾用オレンジ
    textMain: "text-slate-800",
    textSub: "text-slate-500",
    borderBase: "border-slate-200",
    borderLight: "border-slate-100",
    bgHover: "hover:bg-slate-50",
    status: {
      completed: "bg-green-500",
      inProgress: "bg-yellow-400",
    },
  },
  radius: {
    subtle: "rounded-sm",    // 「ほんのちょっと」丸める（Blog, Button用）
    card: "rounded-2xl",    // 大きく丸める（Works用）
  },
  layout: {
    sectionPadding: "py-[5vw]",
    containerMargin: "mx-[5vw]",
  }
} as const;