"use client";

import { Logo } from "@/components/ui/Logo";
import { useShading } from "./Shading";

const BAG = "M12 20Q12 8 24 8H156Q168 8 168 20L174 288Q174 298 164 298H16Q6 298 6 288Z";

/** Cream stand-up pouch with forest band (fallback for coffee-bag.png). */
export function CoffeeBagArt({ seal, line, className = "" }: { seal: string; line: string; className?: string }) {
  const shade = useShading();
  return (
    <div className={`relative aspect-[180/300] [container-type:inline-size] ${className}`}>
      <svg viewBox="0 0 180 300" className="absolute inset-0 h-full w-full drop-shadow-[0_26px_30px_rgb(0_0_0/0.35)]">
        {shade.defs}
        <path d={BAG} className="fill-paper" />
        <path d="M8.6 200H171.4L174 288Q174 298 164 298H16Q6 298 6 288Z" className="fill-forest" />
        <path d={BAG} fill={shade.fill} />
        <path d="M14 26H166" stroke="#000" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="90" cy="52" r="2.6" fill="#000" opacity="0.4" />
      </svg>
      <div className="absolute left-[16%] top-[28%] w-[68%]">
        <Logo className="h-auto w-full" title="" />
      </div>
      <div className="absolute inset-x-0 top-[73%] text-center text-cream-text">
        <p className="text-[8.4cqw] font-semibold uppercase tracking-[0.16em]">{seal}</p>
        <p className="mt-[3cqw] text-[4.2cqw] font-semibold uppercase tracking-[0.16em] opacity-80">{line}</p>
      </div>
    </div>
  );
}
