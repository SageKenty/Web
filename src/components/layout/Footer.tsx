import { NavLink } from "../ui/NavLink";
import { NAV_ITEMS,SNS_ITEMS } from "../../constants/navigation";
import {DESIGN} from "../../constants/design" 

export const Footer = () => {

  return (
    <footer className="w-full py-[3vw] px-[4vw] my-[5vw] border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* ロゴセクション */}
        <div className="flex items-center">
          <div className="text-2xl font-black tracking-tighter">
            Hanz <span style={{ color: DESIGN.colors.primary }}>ON</span>
          </div>
        </div>

        {/* SNSセクション */}
        <div className="flex gap-5">
          {SNS_ITEMS.map((sns) => (
            <a
              key={sns.name}
              href={sns.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-gray-500 hover:text-orange-500 transition-colors"
            >
              {sns.name}
            </a>
          ))}
        </div>

        {/* コピーライト（おまけ） */}
      <div className="text-center text-[10px] text-gray-400 tracking-widest uppercase">
        © {new Date().getFullYear()} Sekigawa Kento. All rights reserved.
      </div>

        {/* ナビゲーションセクション */}
        <nav>
            <ul className="hidden md:flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-10">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <NavLink item={item} className="text-sm md:text-[1.2vw]" />
                </li>
              ))}
            </ul>
        </nav>
      </div>

    </footer>
  );
};