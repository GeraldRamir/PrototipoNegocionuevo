"use client";

import { ArrowRight, Clock, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/data/site";
import { useOpeningStatus } from "@/lib/useOpeningStatus";
import { StatusDot } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SmartImage } from "@/components/ui/SmartImage";
import { Sticker } from "@/components/ui/Sticker";
import { WaveDivider } from "@/components/ui/WaveDivider";

const copy = site.visit;

function CardLabel({ icon, children }: { icon: ReactNode; children: string }) {
  return (
    <p className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-cream-text">{icon}</span>
      <span className="eyebrow text-forest">{children}</span>
    </p>
  );
}

function HoursCard() {
  const status = useOpeningStatus();
  const firstRow = site.hours[0];
  const statusText = !status
    ? `${copy.openUntil} ${firstRow?.close ?? ""}`
    : status.isOpen
      ? `${copy.openUntil} ${status.closesAt}`
      : status.opensAt
        ? `${copy.opensAt} ${status.opensAt}`
        : site.nav.closedNow;

  return (
    <div className="rounded-[18px] bg-paper p-5 shadow-[0_12px_30px_-20px_rgb(0_0_0/0.4)]">
      <CardLabel icon={<Clock className="h-4 w-4" aria-hidden />}>{copy.hoursLabel}</CardLabel>
      <p className="mt-4 inline-flex items-center gap-2 rounded-pill bg-sage-light px-3 py-1.5 text-[12.5px] font-semibold text-forest" aria-live="polite">
        <StatusDot open={status?.isOpen ?? true} />
        {statusText}
      </p>
      <table className="mt-3 w-full text-[14px]">
        <tbody>
          {site.hours.map((row, index) => {
            const today = status?.todayRow === index;
            return (
              <tr key={row.label} className={today ? "bg-forest text-cream-text" : "text-forest"} aria-current={today ? "date" : undefined}>
                <th scope="row" className={`py-2 pl-3 text-left font-medium ${today ? "rounded-l-[8px] font-semibold" : ""}`}>
                  {row.label}
                </th>
                <td className={`py-2 pr-3 text-right tabular-nums ${today ? "rounded-r-[8px] font-semibold" : ""}`}>
                  {row.open}–{row.close}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function VisitSection() {
  return (
    <section id="visit" className="theme-sage bean-pattern section-pad relative">
      <WaveDivider color="sage" />
      <div className="container-site grid items-center gap-16 lg:grid-cols-[45fr_55fr] lg:gap-14">
        <Reveal className="relative mx-auto w-full max-w-[480px] pr-4 pt-6">
          <div className="relative">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-[18px] bg-mustard" />
            <div className="relative aspect-[287/365] overflow-hidden rounded-t-full rounded-b-[18px] border-[8px] border-forest bg-sage-light">
              <SmartImage src={copy.image.src} alt={copy.image.alt} width={960} height={1220} sizes="(min-width: 1024px) 480px, 90vw" fill />
            </div>
            <Sticker text={copy.sticker} ring className="absolute -right-3 top-[3%] w-[30%]" />
          </div>
        </Reveal>

        <Reveal index={1}>
          <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>
          <h2 className="h-display-lg mt-4 max-w-[520px] text-forest">{copy.title}</h2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-ink-muted">{copy.body}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col rounded-[18px] bg-paper p-5 shadow-[0_12px_30px_-20px_rgb(0_0_0/0.4)]">
              <CardLabel icon={<MapPin className="h-4 w-4" aria-hidden />}>{copy.addressLabel}</CardLabel>
              <address className="mt-4 text-[15px] not-italic leading-[1.6] text-forest">
                {site.contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a href={site.contact.mapsHref} target="_blank" rel="noreferrer" className="link-underline mt-auto self-start pt-6 text-[14.5px] text-forest">
                {copy.directions}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <HoursCard />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Button href={copy.cta.href}>
              {copy.cta.label}
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden />
            </Button>
            <p className="text-[14px] font-medium text-forest">
              <a href={site.contact.phoneHref} className="hover:underline">
                {site.contact.phone}
              </a>
              {" · "}
              <a href={`mailto:${site.contact.email}`} className="hover:underline">
                {site.contact.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
