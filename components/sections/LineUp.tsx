"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, type KeyboardEvent } from "react";
import { menu, type CardTheme, type MenuCategory, type MenuItem } from "@/data/menu";
import { site } from "@/data/site";
import { AddToOrderButton } from "@/components/ui/AddToOrderButton";
import { BeanIcon } from "@/components/ui/BeanIcon";
import type { ButtonVariant } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SmartImage } from "@/components/ui/SmartImage";
import { DrinkArt } from "@/components/illustrations/DrinkArt";

const { lineup } = site;

const cardThemes: Record<CardTheme, { card: string; body: string; button: ButtonVariant }> = {
  forest: { card: "bg-forest text-cream-text", body: "text-cream-text/85", button: "light" },
  mustard: { card: "bg-mustard text-forest", body: "text-forest/85", button: "white" },
  sage: { card: "bg-sage text-forest", body: "text-ink-muted", button: "primary" },
};

function Tabs({ value, onChange }: { value: MenuCategory["id"]; onChange: (id: MenuCategory["id"]) => void }) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent, index: number) => {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + menu.length) % menu.length;
    const category = menu[next];
    if (!category) return;
    onChange(category.id);
    refs.current[next]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={lineup.tabsLabel}
      className="grid h-[58px] w-full max-w-[400px] grid-cols-3 rounded-pill border-[1.5px] border-forest bg-sage-light/60 p-1.5"
    >
      {menu.map((category, index) => {
        const active = category.id === value;
        return (
          <button
            key={category.id}
            ref={(el) => {
              refs.current[index] = el;
            }}
            id={`tab-${category.id}`}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls={`panel-${category.id}`}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(category.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={`relative rounded-pill text-[15px] font-semibold transition-colors ${active ? "text-cream-text" : "text-forest hover:opacity-70"}`}
          >
            {active ? (
              <motion.span
                layoutId="lineup-tab"
                className="absolute inset-0 rounded-pill bg-forest"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            <span className="relative">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function ProductCard({ item, index }: { item: MenuItem; index: number }) {
  const theme = cardThemes[item.theme];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex min-h-[420px] w-[82vw] max-w-[390px] shrink-0 snap-center flex-col rounded-card px-8 pb-8 pt-[150px] md:w-auto md:max-w-none ${theme.card}`}
    >
      <div className="absolute left-1/2 top-[-92px] w-[228px] -translate-x-1/2">
        <SmartImage
          src={item.image}
          alt={item.imageAlt}
          width={456}
          height={400}
          sizes="228px"
          className="aspect-[200/180] h-auto w-full"
          fallback={<DrinkArt variant={item.art} />}
        />
      </div>

      <h3 className="h-display-md">{item.name}</h3>
      <p className={`mt-3 max-w-[300px] text-[15px] leading-[1.55] ${theme.body}`}>{item.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {item.notes.map((note) => (
          <li key={note}>
            <Chip>{note}</Chip>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <AddToOrderButton item={item} label={lineup.addToOrder} addedLabel={lineup.addedToOrder} variant={theme.button} />
      </div>

      {item.sticker ? (
        <span className="script absolute -bottom-4 right-[-10px] -rotate-[9deg] rounded-[10px] bg-mustard px-4 py-1.5 text-[20px] text-forest shadow-[0_8px_16px_-8px_rgb(0_0_0/0.4)]">
          {item.sticker}
        </span>
      ) : null}
    </motion.article>
  );
}

export function LineUp() {
  const [active, setActive] = useState<MenuCategory["id"]>("hot");
  const category = menu.find((c) => c.id === active) ?? menu[0]!;

  return (
    <section id="menu" className="theme-cream bean-pattern relative z-0 section-pad pt-[72px] md:pt-[88px] lg:pt-[104px]">
      <div className="container-site">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionEyebrow>{lineup.eyebrow}</SectionEyebrow>
            <h2 className="h-display-lg mt-4 text-forest">{lineup.title}</h2>
          </Reveal>
          <Reveal index={1} className="md:pb-3">
            <Tabs value={active} onChange={setActive} />
          </Reveal>
        </div>

        <div
          id={`panel-${category.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${category.id}`}
          className="no-scrollbar -mx-[var(--container-pad)] mt-10 overflow-x-auto px-[var(--container-pad)] pt-[110px] md:mx-0 md:overflow-visible md:px-0 md:pt-[120px]"
        >
          <div className="flex snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-3 md:gap-8 md:pb-0">
            <AnimatePresence mode="wait">
              <motion.div key={category.id} className="contents">
                {category.items.map((item, index) => (
                  <ProductCard key={item.id} item={item} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal className="mt-14">
          <hr className="dashed-divider text-forest" />
          <p className="mt-6 flex items-center gap-3 text-[15px] text-forest">
            <BeanIcon className="h-6 w-6 shrink-0" />
            {lineup.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
