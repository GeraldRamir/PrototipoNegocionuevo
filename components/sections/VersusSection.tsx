import { Check, X } from "lucide-react";
import { site } from "@/data/site";
import { BeanIcon } from "@/components/ui/BeanIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SmartImage } from "@/components/ui/SmartImage";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { GenericCupArt, RavoCupArt } from "@/components/illustrations/Cups";

const { versus } = site;

export function VersusSection() {
  return (
    <section aria-labelledby="versus-title" className="theme-forest bean-pattern section-pad relative">
      <WaveDivider color="forest" />
      <div className="container-site">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <SectionEyebrow tone="mustard" underline={false}>
            {versus.eyebrow}
          </SectionEyebrow>
          <h2 id="versus-title" className="h-display-lg mt-3 text-cream-text">
            {versus.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.6] text-cream-text/80">{versus.body}</p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[900px] grid-cols-[1fr_auto_1fr] items-center gap-4 md:mt-16 md:gap-8">
          <Reveal className="flex flex-col items-center">
            <div className="w-[130px] sm:w-[170px] md:w-[210px]">
              <SmartImage
                src={versus.us.image}
                alt={versus.us.alt}
                width={420}
                height={580}
                sizes="210px"
                className="h-auto w-full"
                fallback={<RavoCupArt className="w-full" />}
              />
            </div>
            <p className="h-display-md mt-5 text-cream-text">{versus.us.label}</p>
          </Reveal>

          <Reveal index={1} className="-mt-12">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-mustard font-display text-[26px] font-black text-forest shadow-[0_10px_24px_-10px_rgb(0_0_0/0.5)] [font-variation-settings:'SOFT'_100] md:h-[110px] md:w-[110px] md:text-[42px]">
              {versus.vs}
            </span>
          </Reveal>

          <Reveal index={2} className="flex flex-col items-center">
            <div className="w-[100px] opacity-80 saturate-[0.6] sm:w-[130px] md:w-[160px]">
              <SmartImage
                src={versus.them.image}
                alt={versus.them.alt}
                width={320}
                height={480}
                sizes="160px"
                className="h-auto w-full"
                fallback={<GenericCupArt className="w-full" name={versus.them.cupName} />}
              />
            </div>
            <p className="h-display-md mt-5 text-sage/60">{versus.them.label}</p>
          </Reveal>
        </div>

        <ul className="mx-auto mt-12 flex max-w-[900px] flex-col gap-4 md:gap-3.5">
          {versus.rows.map((row, index) => (
            <Reveal
              as="li"
              key={row.us}
              index={index}
              className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_44px_1fr] md:items-center md:gap-3"
            >
              <span className="flex min-h-[54px] items-center gap-3 rounded-pill bg-sage-light px-3 py-2 pr-6 text-[15px] font-semibold text-forest">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-forest text-cream-text">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
                </span>
                <span>
                  <span className="sr-only">{versus.us.label}: </span>
                  {row.us}
                </span>
              </span>
              <BeanIcon className="mx-auto hidden h-5 w-5 text-sage/45 md:block" />
              <span className="flex min-h-[54px] items-center gap-3 rounded-pill border-[1.5px] border-dashed border-sage/30 bg-sage/[0.04] px-3 py-2 pr-6 text-[15px] text-cream-text/65">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-rust text-cream-text">
                  <X className="h-4 w-4" strokeWidth={3} aria-hidden />
                </span>
                <span>
                  <span className="sr-only">{versus.them.label}: </span>
                  {row.them}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
