import { site } from "@/data/site";
import { BeanIcon } from "@/components/ui/BeanIcon";

function Ribbon({
  words,
  tone,
  reverse,
  className = "",
}: {
  words: readonly string[];
  tone: "mustard" | "forest";
  reverse?: boolean;
  className?: string;
}) {
  const colors = tone === "mustard" ? "bg-mustard text-forest" : "bg-forest text-cream-text";
  const beanColor = tone === "mustard" ? "text-forest" : "text-mustard";
  const sequence = [...words, ...words, ...words];

  const group = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {sequence.map((word, index) => (
        <li key={`${word}-${index}`} className="flex items-center">
          <span className="px-5 font-condensed text-[26px] font-extrabold uppercase leading-none tracking-[0.01em] [font-stretch:72%] md:text-[32px]">
            {word}
          </span>
          <BeanIcon className={`h-6 w-6 md:h-7 md:w-7 ${beanColor}`} rotate={30} />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee-track w-[110%] -translate-x-[5%] py-3 shadow-[0_8px_18px_-10px_rgb(0_0_0/0.4)] md:py-3.5 ${colors} ${className}`}>
      <div className={`marquee-inner flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}

export function Ticker() {
  return (
    <div
      role="region"
      aria-label={site.ticker.label}
      className="pointer-events-none relative z-30 -mt-6 -mb-[58px] h-[178px] overflow-x-clip overflow-y-visible md:-mt-8 md:-mb-[72px] md:h-[198px]"
    >
      <Ribbon words={site.ticker.back} tone="mustard" reverse className="pointer-events-auto absolute left-0 right-0 top-2 z-20 rotate-[2.2deg] shadow-[0_6px_0_0_var(--color-sage)] md:top-3" />
      <Ribbon words={site.ticker.front} tone="forest" className="pointer-events-auto absolute bottom-[-24px] left-0 right-0 z-30 -rotate-[1.8deg] shadow-[0_6px_0_0_var(--color-cream)] md:bottom-[-28px]" />
    </div>
  );
}
