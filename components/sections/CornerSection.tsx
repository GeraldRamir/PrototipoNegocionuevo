"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shuffle } from "lucide-react";
import { useState } from "react";
import { cornerPhotos, events, type CornerPhoto } from "@/data/events";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SmartImage } from "@/components/ui/SmartImage";
import { WaveDivider } from "@/components/ui/WaveDivider";

const copy = site.corner;
const initialRotations = [-4, 2, 3, -3, 4];

type Placed = CornerPhoto & { rotate: number };

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function Polaroid({ photo }: { photo: Placed }) {
  return (
    <motion.figure
      layout
      initial={false}
      animate={{ rotate: photo.rotate }}
      whileHover={{ rotate: 0, y: -10, scale: 1.03, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="relative w-full bg-paper p-2.5 pb-0 shadow-[0_18px_30px_-14px_rgb(0_0_0/0.6)] sm:p-3 sm:pb-0"
    >
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 h-6 w-[42%] -translate-x-1/2 -rotate-2 bg-mustard/75 shadow-[0_1px_2px_rgb(0_0_0/0.15)]"
      />
      <div className="relative aspect-[112/124] overflow-hidden bg-sage">
        <SmartImage src={photo.src} alt={photo.alt} width={448} height={496} sizes="(min-width: 1024px) 220px, 45vw" fill />
      </div>
      <figcaption className="script px-1 py-2.5 text-center text-[16px] leading-[1.05] text-forest sm:text-[18px]">
        {photo.caption}
      </figcaption>
    </motion.figure>
  );
}

export function CornerSection() {
  const [photos, setPhotos] = useState<Placed[]>(() =>
    cornerPhotos.map((photo, index) => ({ ...photo, rotate: initialRotations[index] ?? 0 })),
  );

  const reshuffle = () => {
    setPhotos((current) => shuffle(current).map((photo) => ({ ...photo, rotate: Math.round(Math.random() * 8 - 4) })));
  };

  return (
    <section id="corner" className="theme-forest bean-pattern section-pad relative">
      <WaveDivider color="forest" />
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionEyebrow tone="mustard" underline={false}>
              {copy.eyebrow}
            </SectionEyebrow>
            <h2 className="h-display-lg mt-3 text-cream-text">{copy.title}</h2>
            <p className="mt-4 text-[16px] text-cream-text/75">{copy.body}</p>
          </Reveal>
          <Reveal index={1} className="md:pb-2">
            <Button variant="outline-light" size="sm" className="h-[50px] px-6" onClick={reshuffle}>
              <Shuffle className="h-4 w-4" aria-hidden />
              {copy.shuffle}
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-14 lg:mt-16 lg:grid-cols-[58fr_42fr] lg:items-center lg:gap-12">
          <Reveal>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-6 sm:gap-x-2 sm:gap-y-6">
              {photos.map((photo, index) => (
                <li key={photo.id} className={`sm:col-span-2 ${index === 3 ? "sm:col-start-2" : ""}`}>
                  <Polaroid photo={photo} />
                </li>
              ))}
            </ul>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="h-display-md text-cream-text">{copy.eventsTitle}</h3>
            </Reveal>
            <ul className="mt-6 flex flex-col gap-3.5">
              {events.map((event, index) => (
                <Reveal
                  as="li"
                  key={event.day}
                  index={index + 1}
                  className="flex items-center gap-4 rounded-[16px] border border-sage/15 bg-forest-700 px-4 py-4 md:px-5"
                >
                  <span className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full bg-mustard font-display text-[17px] font-extrabold text-forest [font-variation-settings:'SOFT'_100]">
                    {event.day}
                  </span>
                  <span>
                    <span className="block text-[16px] font-semibold text-cream-text">{event.title}</span>
                    <span className="mt-0.5 block text-[14px] text-cream-text/70">{event.description}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal index={4} className="mt-7">
              <a href={site.contact.instagram} target="_blank" rel="noreferrer" className="link-underline text-[15px] text-cream-text">
                {copy.instagramCta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
