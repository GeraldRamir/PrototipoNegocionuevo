"use client";

import { Logo } from "@/components/ui/Logo";
import { useShading } from "./Shading";

/** Forest takeaway cup with cream lid and the logo (fallback for hero-cup.png / cup-ravo.png). */
export function RavoCupArt({ className = "" }: { className?: string }) {
  const shade = useShading();
  return (
    <div className={`relative aspect-[240/330] ${className}`}>
      <svg viewBox="0 0 240 330" className="absolute inset-0 h-full w-full drop-shadow-[0_24px_30px_rgb(0_0_0/0.28)]">
        {shade.defs}
        <path d="M22 66H218L194 318Q193 326 184 326H56Q47 326 46 318Z" className="fill-forest" />
        <path d="M22 66H218L194 318Q193 326 184 326H56Q47 326 46 318Z" fill={shade.fill} />
        <rect x="26" y="62" width="188" height="9" fill="#000" opacity="0.18" />
        <path d="M40 34L52 8Q54 4 60 4H180Q186 4 188 8L200 34Z" className="fill-art-cup" />
        <path d="M40 34L52 8Q54 4 60 4H180Q186 4 188 8L200 34Z" fill={shade.fill} opacity="0.6" />
        <rect x="12" y="30" width="216" height="36" rx="13" className="fill-art-cup" />
        <rect x="12" y="30" width="216" height="36" rx="13" fill={shade.fill} opacity="0.7" />
        <rect x="16" y="33" width="208" height="5" rx="2.5" fill="#fff" opacity="0.6" />
        <ellipse cx="150" cy="14" rx="14" ry="3.5" fill="#000" opacity="0.12" />
      </svg>
      <div className="absolute left-[22%] top-[36%] w-[56%]">
        <Logo color="var(--color-cream-text)" className="h-auto w-full" title="" />
      </div>
    </div>
  );
}

/** Plain white cup with kraft sleeve and a misspelled name (fallback for cup-generic.png). */
export function GenericCupArt({ className = "", name }: { className?: string; name: string }) {
  const shade = useShading();
  return (
    <div className={`relative aspect-[200/300] ${className}`}>
      <svg viewBox="0 0 200 300" className="absolute inset-0 h-full w-full drop-shadow-[0_20px_24px_rgb(0_0_0/0.3)]">
        {shade.defs}
        <path d="M22 56H178L158 290Q157 296 150 296H50Q43 296 42 290Z" className="fill-art-cup" />
        <path d="M22 56H178L158 290Q157 296 150 296H50Q43 296 42 290Z" fill={shade.fill} />
        <path d="M30 128H170L163 206H37Z" className="fill-art-kraft" />
        <path d="M30 128H170L163 206H37Z" fill={shade.fill} />
        <path d="M34 26L44 8Q46 4 52 4H148Q154 4 156 8L166 26Z" className="fill-art-lid-dark" />
        <rect x="12" y="24" width="176" height="32" rx="10" className="fill-art-lid-dark" />
        <rect x="12" y="24" width="176" height="32" rx="10" fill={shade.fill} />
        <text
          x="64"
          y="104"
          fontSize="26"
          transform="rotate(-8 90 100)"
          style={{ fontFamily: "var(--font-script)" }}
          className="fill-art-lid-dark"
        >
          {name}
        </text>
      </svg>
    </div>
  );
}
