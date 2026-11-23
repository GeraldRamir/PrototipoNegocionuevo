import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

const copy = site.footer;

function ColumnTitle({ children }: { children: string }) {
  return <h3 className="eyebrow text-mustard">{children}</h3>;
}

export function Footer() {
  const socialLinks = copy.social.map((item) => ({ label: item.label, href: site.contact[item.key] }));

  return (
    <footer className="pb-8">
      <div className="container-site">
        <hr className="dashed-divider text-cream-text" />

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:py-16">
          <div className="col-span-2 lg:col-span-1">
            <a href="#top" aria-label={site.logoLabel} className="inline-block">
              <Logo color="var(--color-cream-text)" className="h-auto w-[200px] lg:w-[250px]" />
            </a>
          </div>

          <nav aria-label="Footer">
            <ColumnTitle>{copy.explore}</ColumnTitle>
            <ul className="mt-5 space-y-3 text-[15px] font-medium text-cream-text">
              {site.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-opacity hover:opacity-70">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <ColumnTitle>{copy.sayHello}</ColumnTitle>
            <ul className="mt-5 space-y-3 text-[15px] font-medium text-cream-text">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-70">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.contact.email}`} className="break-all transition-opacity hover:opacity-70">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={site.contact.phoneHref} className="transition-opacity hover:opacity-70">
                  {site.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <ColumnTitle>{copy.open}</ColumnTitle>
            <dl className="mt-5 space-y-3 text-[14px] text-cream-text/80">
              {site.hours.map((row) => (
                <div key={row.label} className="flex justify-between gap-6">
                  <dt>{row.label}</dt>
                  <dd className="tabular-nums">
                    {row.open}–{row.close}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <hr className="dashed-divider text-cream-text" />

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-[13px] text-cream-text/70 sm:flex-row">
          <p>{copy.copyright}</p>
          <p>{copy.tagline}</p>
          <a href="#top" className="inline-flex items-center gap-1.5 font-medium text-cream-text hover:opacity-70">
            {copy.backToTop}
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
