import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { site } from "@/data/site";
import { Badge } from "@/components/ui/Badge";
import { BeanIcon } from "@/components/ui/BeanIcon";
import { Button } from "@/components/ui/Button";
import { HandArrow, PaperNote } from "@/components/ui/PaperNote";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Sticker } from "@/components/ui/Sticker";
import { RavoCupArt } from "@/components/illustrations/Cups";
import { DrinkArt } from "@/components/illustrations/DrinkArt";
import { BeanArt } from "@/components/illustrations/BeanArt";
import { Ticker } from "./Ticker";

const { hero } = site;

const floatingBeans = [
  { left: "48%", top: "1%", width: "5.5%", rotate: -30, delay: "0s" },
  { left: "13%", top: "33%", width: "8.5%", rotate: 60, delay: "-2s" },
  { left: "92%", top: "54%", width: "6%", rotate: 15, delay: "-4s" },
  { left: "84%", top: "89%", width: "7.5%", rotate: -20, delay: "-1s" },
];

function HighlightScript({ children }: { children: string }) {
  return (
    <span className="script relative inline-block -rotate-2 text-[30px] text-forest md:text-[40px]">
      <svg
        aria-hidden
        viewBox="0 0 300 30"
        preserveAspectRatio="none"
        className="absolute -left-2 bottom-[0.02em] -z-10 h-[0.5em] w-[calc(100%+16px)] text-mustard"
      >
        <path
          fill="currentColor"
          d="M4 9C60 4 150 3 296 6L298 20C230 25 120 27 6 26L2 18Z"
          opacity="0.95"
        />
      </svg>
      {children}
    </span>
  );
}

function HeroArt() {
  return (
    <div className="relative mx-auto aspect-[440/430] w-full max-w-[540px]">
      <div className="absolute left-[20.5%] top-[8%] h-[84%] w-[63.5%] rounded-t-full bg-forest" />

      {floatingBeans.map((bean, index) => (
        <div
          key={index}
          className="absolute z-20 animate-float"
          style={{ left: bean.left, top: bean.top, width: bean.width, animationDelay: bean.delay, ["--r" as string]: `${bean.rotate}deg` } as CSSProperties}
        >
          <SmartImage
            src={hero.images.beans[index] ?? "bean-1.png"}
            alt=""
            width={80}
            height={104}
            sizes="48px"
            className="h-auto w-full"
            fallback={<BeanArt className="h-auto w-full drop-shadow-[0_6px_8px_rgb(0_0_0/0.3)]" />}
          />
        </div>
      ))}

      <div className="absolute left-[27%] top-[26%] z-10 w-[50%]">
        <SmartImage
          src={hero.images.cup.src}
          alt={hero.images.cup.alt}
          width={480}
          height={660}
          sizes="(min-width: 1024px) 270px, 50vw"
          priority
          className="h-auto w-full"
          fallback={<RavoCupArt className="w-full" />}
        />
      </div>

      <div className="absolute left-[4%] top-[75%] z-20 w-[21%]">
        <SmartImage src={hero.images.nata.src} alt={hero.images.nata.alt} width={240} height={180} sizes="120px" className="h-auto w-full" fallback={<DrinkArt variant="nata" />} />
      </div>
      <div className="absolute left-[17%] top-[80%] z-20 w-[22%]">
        <SmartImage src={hero.images.nata.src} alt="" width={240} height={180} sizes="120px" className="h-auto w-full" fallback={<DrinkArt variant="nata" />} />
      </div>

      <div className="absolute left-[3%] top-[46%] z-30">
        <PaperNote rotate={-6} className="text-[17px] md:text-[21px]">
          {hero.note.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </PaperNote>
      </div>
      <HandArrow className="absolute left-[8%] top-[61%] z-30 h-[12%] text-forest" />

      <Sticker text={hero.sticker} className="absolute left-[75%] top-[4%] z-20 w-[23%]" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="theme-sage bean-pattern overflow-hidden pt-14 md:pt-20 lg:pt-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-6">
        <div className="relative z-10">
          <Reveal>
            <Badge className="h-10 px-4 text-[13px]" icon={<BeanIcon className="h-4 w-4 text-forest" />}>
              {hero.badge}
            </Badge>
          </Reveal>

          <Reveal index={1}>
            <h1 className="h-display-xl mt-7 text-forest">
              {hero.titleLines[0]}
              <br />
              {hero.titleLines[1]}
              <BeanIcon className="ml-[0.04em] inline-block h-[0.24em] w-[0.24em] align-baseline text-mustard" rotate={35} />
            </h1>
          </Reveal>

          <Reveal index={2} className="mt-4 md:mt-5">
            <HighlightScript>{hero.script}</HighlightScript>
          </Reveal>

          <Reveal index={3}>
            <p className="mt-6 max-w-[470px] text-[17px] leading-[1.6] text-ink-muted">{hero.body}</p>
          </Reveal>

          <Reveal index={4} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden />
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </Reveal>

          <Reveal index={5}>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {hero.features.map((feature) => (
                <li key={feature} className="flex items-center gap-1.5 text-[13.5px] font-medium text-forest">
                  <BeanIcon className="h-4 w-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal index={2} className="relative">
          <HeroArt />
        </Reveal>
      </div>

      <Ticker />
    </section>
  );
}
