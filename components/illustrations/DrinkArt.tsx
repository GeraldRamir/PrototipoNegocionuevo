"use client";

import type { DrinkArt as DrinkArtVariant } from "@/data/menu";
import { useShading } from "./Shading";

const HEART = "M100 92c-10-10-26-14-26-26 0-8 7-13 14-11 5 1 9 5 12 10 3-5 7-9 12-10 7-2 14 3 14 11 0 12-16 16-26 26z";

function IceCubes({ x, y }: { x: number; y: number }) {
  return (
    <g fill="#fff" opacity="0.5">
      <rect x={x} y={y} width="26" height="24" rx="5" transform={`rotate(-14 ${x + 13} ${y + 12})`} />
      <rect x={x + 30} y={y - 6} width="24" height="24" rx="5" transform={`rotate(12 ${x + 42} ${y + 6})`} />
      <rect x={x + 12} y={y + 26} width="24" height="22" rx="5" transform={`rotate(8 ${x + 24} ${y + 37})`} />
    </g>
  );
}

/** Stylised drink / bake illustrations used while product PNGs are missing. */
export function DrinkArt({ variant, className = "" }: { variant: DrinkArtVariant; className?: string }) {
  const shade = useShading();
  const svgClass = `h-full w-full drop-shadow-[0_18px_22px_rgb(0_0_0/0.3)] ${className}`;

  switch (variant) {
    case "latte-saucer":
      return (
        <svg viewBox="0 0 200 170" className={svgClass}>
          {shade.defs}
          <ellipse cx="100" cy="118" rx="94" ry="44" className="fill-art-cup" />
          <ellipse cx="100" cy="118" rx="94" ry="44" fill={shade.radial} />
          <ellipse cx="100" cy="114" rx="62" ry="26" fill="#000" opacity="0.08" />
          <path d="M38 70H162Q160 124 100 132Q40 124 38 70Z" className="fill-art-cup" />
          <path d="M38 70H162Q160 124 100 132Q40 124 38 70Z" fill={shade.fill} />
          <path d="M160 80q24 2 20 20t-28 14" fill="none" className="stroke-art-cup" strokeWidth="8" strokeLinecap="round" />
          <ellipse cx="100" cy="70" rx="62" ry="30" className="fill-art-cup" />
          <ellipse cx="100" cy="71" rx="54" ry="25" className="fill-art-crema" />
          <ellipse cx="100" cy="71" rx="54" ry="25" fill={shade.radial} />
          <path d={HEART} transform="translate(0 -6) scale(1 0.62) translate(0 52)" className="fill-art-milk" />
        </svg>
      );
    case "cup-green":
      return (
        <svg viewBox="0 0 200 170" className={svgClass}>
          {shade.defs}
          <path d="M28 58H172Q170 150 100 162Q30 150 28 58Z" className="fill-forest" />
          <path d="M28 58H172Q170 150 100 162Q30 150 28 58Z" fill={shade.fill} />
          <ellipse cx="100" cy="58" rx="72" ry="40" className="fill-forest" />
          <ellipse cx="100" cy="60" rx="62" ry="33" className="fill-art-crema" />
          <ellipse cx="100" cy="60" rx="62" ry="33" fill={shade.radial} />
          <path d={HEART} transform="scale(1 0.78) translate(0 -14)" className="fill-art-milk" />
        </svg>
      );
    case "glass-mocha":
      return (
        <svg viewBox="0 0 200 190" className={svgClass}>
          {shade.defs}
          <path d="M44 24H156L150 176Q150 184 142 184H58Q50 184 50 176Z" fill="#fff" opacity="0.35" />
          <path d="M54 120H146L144 170Q144 176 138 176H62Q56 176 56 170Z" className="fill-art-coffee-dark" />
          <path d="M53 78H147L146 120H54Z" className="fill-art-coffee" />
          <path d="M52 34H148L147 78H53Z" className="fill-art-milk" />
          <ellipse cx="100" cy="34" rx="48" ry="12" className="fill-art-milk" />
          <g className="fill-art-coffee">
            <circle cx="84" cy="32" r="2" /><circle cx="100" cy="36" r="2.4" /><circle cx="116" cy="31" r="1.8" />
            <circle cx="92" cy="28" r="1.4" /><circle cx="108" cy="27" r="1.6" /><circle cx="122" cy="36" r="1.3" />
            <circle cx="76" cy="37" r="1.4" />
          </g>
          <path d="M44 24H156L150 176Q150 184 142 184H58Q50 184 50 176Z" fill={shade.fill} />
          <ellipse cx="100" cy="24" rx="56" ry="12" fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="2" />
        </svg>
      );
    case "glass-iced":
    case "glass-latte":
      return (
        <svg viewBox="0 0 200 190" className={svgClass}>
          {shade.defs}
          <path d="M50 14H150L142 178Q141 186 133 186H67Q59 186 58 178Z" fill="#fff" opacity="0.3" />
          <path d="M53 40H147L141 174Q140 180 134 180H66Q60 180 59 174Z" className={variant === "glass-iced" ? "fill-art-coffee-dark" : "fill-art-coffee"} />
          {variant === "glass-latte" ? <path d="M53 40H147L145 96Q100 110 55 96Z" className="fill-art-milk" opacity="0.9" /> : null}
          <IceCubes x={66} y={36} />
          <path d="M50 14H150L142 178Q141 186 133 186H67Q59 186 58 178Z" fill={shade.fill} />
          <ellipse cx="100" cy="14" rx="50" ry="9" fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="2" />
        </svg>
      );
    case "cup-pistachio":
      return (
        <svg viewBox="0 0 200 190" className={svgClass}>
          {shade.defs}
          <path d="M50 14H150L142 178Q141 186 133 186H67Q59 186 58 178Z" fill="#fff" opacity="0.3" />
          <path d="M57 120H143L141 174Q140 180 134 180H66Q60 180 59 174Z" className="fill-art-pistachio" />
          <path d="M55 72H145L143 120H57Z" className="fill-art-coffee" />
          <path d="M53 30H147L145 72H55Z" className="fill-art-milk" />
          <g className="fill-art-pistachio">
            <circle cx="86" cy="30" r="3" /><circle cx="104" cy="27" r="2.4" /><circle cx="118" cy="32" r="2.6" /><circle cx="96" cy="34" r="2" />
          </g>
          <path d="M50 14H150L142 178Q141 186 133 186H67Q59 186 58 178Z" fill={shade.fill} />
        </svg>
      );
    case "nata":
      return (
        <svg viewBox="0 0 200 150" className={svgClass}>
          {shade.defs}
          <path d="M14 70Q14 132 100 140Q186 132 186 70Z" className="fill-art-crust" />
          <path d="M14 70Q14 132 100 140Q186 132 186 70Z" fill={shade.fill} />
          <ellipse cx="100" cy="70" rx="86" ry="48" className="fill-art-crust" />
          <ellipse cx="100" cy="72" rx="70" ry="38" className="fill-art-custard" />
          <g className="fill-art-burnt">
            <ellipse cx="80" cy="64" rx="14" ry="8" opacity="0.85" />
            <ellipse cx="120" cy="78" rx="12" ry="7" opacity="0.8" />
            <ellipse cx="104" cy="58" rx="8" ry="5" opacity="0.7" />
            <ellipse cx="70" cy="84" rx="7" ry="4" opacity="0.6" />
            <ellipse cx="136" cy="62" rx="6" ry="4" opacity="0.6" />
          </g>
          <ellipse cx="100" cy="72" rx="70" ry="38" fill={shade.radial} />
        </svg>
      );
    case "pao":
      return (
        <svg viewBox="0 0 200 150" className={svgClass}>
          {shade.defs}
          {[
            [62, 92, 44],
            [138, 92, 44],
            [100, 60, 46],
          ].map(([cx, cy, r]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r={r} className="fill-art-custard" />
              <circle cx={cx} cy={cy} r={r} fill={shade.radial} />
            </g>
          ))}
        </svg>
      );
    case "croissant":
      return (
        <svg viewBox="0 0 200 150" className={svgClass}>
          {shade.defs}
          <path d="M14 104Q30 30 100 26Q170 30 186 104Q170 92 150 96Q130 60 100 58Q70 60 50 96Q30 92 14 104Z" className="fill-art-crust" />
          <path d="M14 104Q30 30 100 26Q170 30 186 104Q170 92 150 96Q130 60 100 58Q70 60 50 96Q30 92 14 104Z" fill={shade.radial} />
          <g fill="none" className="stroke-art-burnt" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round">
            <path d="M64 40Q72 64 60 92" /><path d="M100 28V58" /><path d="M136 40Q128 64 140 92" />
          </g>
          <g className="fill-paper" opacity="0.85">
            <circle cx="90" cy="40" r="2" /><circle cx="110" cy="44" r="2" /><circle cx="78" cy="52" r="1.6" /><circle cx="122" cy="36" r="1.8" />
          </g>
        </svg>
      );
  }
}
