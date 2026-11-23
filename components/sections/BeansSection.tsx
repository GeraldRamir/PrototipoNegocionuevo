"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { defaultGrind, grinds, origins, type Origin } from "@/data/origins";
import { site } from "@/data/site";
import { useCart } from "@/lib/cart";
import { BeanIcon } from "@/components/ui/BeanIcon";
import { Button } from "@/components/ui/Button";
import { PaperNote } from "@/components/ui/PaperNote";
import { PillGroup } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SmartImage } from "@/components/ui/SmartImage";
import { Sticker } from "@/components/ui/Sticker";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { BeanArt } from "@/components/illustrations/BeanArt";
import { CoffeeBagArt } from "@/components/illustrations/CoffeeBagArt";

const copy = site.beans;
const grindOptions = grinds.map((g) => ({ value: g, label: g }));

function Intensity({ value, active }: { value: number; active: boolean }) {
  return (
    <span className="mt-3 flex gap-1" role="img" aria-label={`${copy.intensityLabel} ${value}/5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <BeanIcon
          key={i}
          rotate={20}
          className={`h-[15px] w-[15px] ${i < value ? (active ? "text-mustard" : "text-forest") : active ? "text-cream-text/30" : "text-forest/25"}`}
        />
      ))}
    </span>
  );
}

function OriginCards({ value, onChange }: { value: string; onChange: (id: string) => void }) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKeyDown = (event: KeyboardEvent, index: number) => {
    const delta = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + origins.length) % origins.length;
    const origin = origins[next];
    if (!origin) return;
    onChange(origin.id);
    refs.current[next]?.focus();
  };

  return (
    <div role="radiogroup" aria-label={copy.originsLabel} className="mt-7 grid grid-cols-3 gap-2.5 sm:gap-3">
      {origins.map((origin, index) => {
        const active = origin.id === value;
        return (
          <button
            key={origin.id}
            ref={(el) => {
              refs.current[index] = el;
            }}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(origin.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={`relative overflow-hidden rounded-[14px] px-3 py-3 text-left transition-colors sm:px-4 sm:py-3.5 ${
              active ? "border-[1.5px] border-forest bg-forest text-cream-text" : "border-[1.5px] border-dashed border-forest/35 bg-sage-light/70 text-forest hover:bg-sage-light"
            }`}
          >
            {active ? <span aria-hidden className="absolute -right-3 -top-3 h-12 w-12 rounded-full border-[1.5px] border-mustard/70" /> : null}
            <span className={`eyebrow block text-[9.5px] ${active ? "text-cream-text/70" : "text-forest/60"}`}>{copy.originEyebrow}</span>
            <span className="mt-1 block font-display text-[20px] font-extrabold leading-none [font-variation-settings:'SOFT'_100] sm:text-[24px]">
              {origin.country}
            </span>
            <span className={`mt-1 block text-[12px] ${active ? "text-cream-text/75" : "text-forest/70"}`}>{origin.region}</span>
            <Intensity value={origin.intensity} active={active} />
          </button>
        );
      })}
    </div>
  );
}

function InfoPanel({ origin }: { origin: Origin }) {
  const rows = [
    { label: copy.infoLabels.tastes, value: origin.tastes },
    { label: copy.infoLabels.roast, value: origin.roast },
    { label: copy.infoLabels.bestFor, value: origin.bestFor },
  ];
  return (
    <div className="mt-3 rounded-[14px] bg-sage-light/80 px-4 py-4 sm:px-5">
      <AnimatePresence mode="wait">
        <motion.dl
          key={origin.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-3 gap-3"
        >
          {rows.map((row) => (
            <div key={row.label}>
              <dt className="eyebrow text-[9.5px] text-forest/60">{row.label}</dt>
              <dd className="mt-1.5 text-[13.5px] font-semibold leading-snug text-forest">{row.value}</dd>
            </div>
          ))}
        </motion.dl>
      </AnimatePresence>
    </div>
  );
}

function BagArt({ origin }: { origin: Origin }) {
  return (
    <div className="relative mx-auto aspect-[305/345] w-full max-w-[520px]">
      <div className="absolute left-[9%] top-[21.5%] aspect-square w-[84%] rounded-full bg-forest" />
      <div className="absolute left-[24.5%] top-[1%] z-10 w-[51%]">
        <SmartImage
          src={copy.bag.src}
          alt={copy.bag.alt}
          width={360}
          height={600}
          sizes="(min-width: 1024px) 260px, 50vw"
          className="h-auto w-full"
          fallback={<CoffeeBagArt seal={copy.bagSeal} line={origin.bagLine} className="w-full" />}
        />
      </div>
      <Sticker text={copy.sticker} tone="sage" className="absolute left-[2%] top-[12%] z-20 w-[27%]" />
      {[
        { left: "84%", top: "22%", width: "7.5%", r: 30, delay: "-1s" },
        { left: "9%", top: "88%", width: "8.5%", r: -40, delay: "-3s" },
      ].map((bean, i) => (
        <div
          key={i}
          className="absolute z-20 animate-float"
          style={{ left: bean.left, top: bean.top, width: bean.width, animationDelay: bean.delay, ["--r" as string]: `${bean.r}deg` } as CSSProperties}
        >
          <SmartImage
            src={site.hero.images.beans[i + 1] ?? "bean-1.png"}
            alt=""
            width={80}
            height={104}
            sizes="48px"
            className="h-auto w-full"
            fallback={<BeanArt className="h-auto w-full drop-shadow-[0_6px_8px_rgb(0_0_0/0.3)]" />}
          />
        </div>
      ))}
      <div className="absolute left-[66%] top-[73%] z-20">
        <PaperNote rotate={-5} className="text-[16px] md:text-[19px]">
          {copy.note.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </PaperNote>
      </div>
    </div>
  );
}

export function BeansSection() {
  const [originId, setOriginId] = useState(origins[0]!.id);
  const [grind, setGrind] = useState<(typeof grinds)[number]>(defaultGrind);
  const origin = origins.find((o) => o.id === originId) ?? origins[0]!;
  const add = useCart((state) => state.add);

  return (
    <section id="beans" className="theme-cream bean-pattern section-pad relative">
      <WaveDivider color="cream" />
      <div className="container-site grid items-center gap-14 lg:grid-cols-[46fr_54fr] lg:gap-12">
        <Reveal className="order-2 lg:order-1">
          <BagArt origin={origin} />
        </Reveal>

        <Reveal index={1} className="order-1 lg:order-2">
          <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>
          <h2 className="h-display-lg mt-4 max-w-[560px] text-forest">{copy.title}</h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-ink-muted">{copy.body}</p>

          <OriginCards value={originId} onChange={setOriginId} />
          <InfoPanel origin={origin} />

          <p className="eyebrow mt-6 text-forest/70">{copy.grindLabel}</p>
          <PillGroup
            className="mt-2.5"
            options={grindOptions}
            value={grind}
            onChange={setGrind}
            label={copy.grindLabel}
            pillClassName="h-10 px-4 text-[13.5px]"
          />

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button onClick={() => add({ id: `bag-${origin.id}-${grind}`, name: `${origin.country} · ${grind}` })}>
              <ShoppingBag className="h-[18px] w-[18px]" aria-hidden />
              {copy.cta}
            </Button>
            <a href="#visit" className="link-underline text-[14.5px] text-forest">
              {copy.subscription}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
