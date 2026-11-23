"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Shuffle } from "lucide-react";
import { useState } from "react";
import { moods } from "@/data/moods";
import { site } from "@/data/site";
import { AddToOrderButton } from "@/components/ui/AddToOrderButton";
import { BeanIcon } from "@/components/ui/BeanIcon";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { PillGroup } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SmartImage } from "@/components/ui/SmartImage";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { DrinkArt } from "@/components/illustrations/DrinkArt";

const copy = site.moods;
const options = moods.map((mood) => ({ value: mood.id, label: mood.label }));

export function MoodPicker() {
  const [moodId, setMoodId] = useState(moods[0]!.id);
  const mood = moods.find((m) => m.id === moodId) ?? moods[0]!;

  const surprise = () => {
    const others = moods.filter((m) => m.id !== moodId);
    const pick = others[Math.floor(Math.random() * others.length)];
    if (pick) setMoodId(pick.id);
  };

  return (
    <section id="moods" className="theme-sage bean-pattern section-pad relative">
      <WaveDivider color="sage" flip />
      <div className="container-site grid items-center gap-16 lg:grid-cols-[46fr_54fr] lg:gap-10">
        <Reveal>
          <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>
          <h2 className="h-display-lg mt-4 max-w-[520px] text-forest">{copy.title}</h2>
          <p className="mt-5 text-[16px] text-ink-muted">{copy.body}</p>

          <PillGroup
            className="mt-7 max-w-[480px]"
            options={options}
            value={moodId}
            onChange={setMoodId}
            label={copy.groupLabel}
            icon={<BeanIcon className="h-[18px] w-[18px]" />}
            pillClassName="h-[46px] px-4 text-[14.5px]"
          />

          <Button variant="outline" size="sm" className="mt-7 h-[50px] px-6" onClick={surprise}>
            <Shuffle className="h-4 w-4" aria-hidden />
            {copy.surprise}
          </Button>
        </Reveal>

        <Reveal index={1} className="pt-24 lg:pt-20">
          <div aria-live="polite" className="relative mx-auto w-full max-w-[580px] rounded-card bg-forest px-8 pb-10 pt-[150px] text-cream-text shadow-[0_30px_60px_-30px_rgb(0_0_0/0.55)] md:px-11">
            <span className="script absolute right-6 top-6 grid h-[92px] w-[92px] rotate-[10deg] place-items-center rounded-full bg-mustard text-center text-[22px] leading-[0.9] text-forest md:h-[100px] md:w-[100px]">
              {copy.sticker}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={mood.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute left-1/2 top-[-104px] w-[200px] -translate-x-1/2 md:w-[220px]">
                  <motion.div
                    initial={{ scale: 0.85, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <SmartImage
                      src={mood.image}
                      alt={mood.imageAlt}
                      width={440}
                      height={420}
                      sizes="220px"
                      className="aspect-[200/190] h-auto w-full"
                      fallback={<DrinkArt variant={mood.art} />}
                    />
                  </motion.div>
                </div>

                <p className="eyebrow text-cream-text/70">
                  {copy.moodPrefix} {mood.label}
                </p>
                <h3 className="mt-3 font-display text-[clamp(2.5rem,4.4vw,3.6rem)] font-black leading-[0.95] tracking-[-0.02em] [font-variation-settings:'SOFT'_100,'opsz'_144]">
                  {mood.drink}
                </h3>
                <p className="mt-4 text-[16px] text-cream-text/85">{mood.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {mood.notes.map((note) => (
                    <li key={note}>
                      <Chip>{note}</Chip>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <AddToOrderButton
                    item={{ id: `mood-${mood.id}`, name: mood.drink }}
                    label={copy.cta}
                    addedLabel={site.lineup.addedToOrder}
                    variant="light"
                    className="h-[50px] px-6"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
