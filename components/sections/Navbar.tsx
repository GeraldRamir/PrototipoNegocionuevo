"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { useCartCount } from "@/lib/cart";
import { useOpeningStatus } from "@/lib/useOpeningStatus";
import { Badge, StatusDot } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

function OrderButton({ className = "" }: { className?: string }) {
  const count = useCartCount();
  return (
    <a href={site.nav.orderHref} className={buttonClasses("primary", "sm", `relative ${className}`)}>
      {site.nav.orderCta}
      <AnimatePresence>
        {count > 0 ? (
          <motion.span
            key={count}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            className="absolute -right-2 -top-2 grid h-6 min-w-6 place-items-center rounded-full bg-mustard px-1.5 text-[12px] font-bold text-forest"
          >
            {count}
            <span className="sr-only"> {site.nav.cartCountLabel}</span>
          </motion.span>
        ) : null}
      </AnimatePresence>
    </a>
  );
}

function OpenBadge() {
  const status = useOpeningStatus();
  const open = status?.isOpen ?? true;
  return (
    <Badge variant="outline" className="h-11 px-4 text-[14px]" icon={<StatusDot open={open} />}>
      <span aria-live="polite">{status && !status.isOpen ? site.nav.closedNow : site.nav.openNow}</span>
    </Badge>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-sage/95 backdrop-blur-sm">
      <nav aria-label="Main" className="container-site flex h-[var(--nav-height)] items-center justify-between gap-6">
        <a href="#top" aria-label={site.logoLabel} className="shrink-0">
          <Logo className="h-[50px] w-auto" />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {site.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[15px] font-semibold text-forest transition-opacity hover:opacity-70">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <OpenBadge />
          <OrderButton />
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-forest text-forest lg:hidden"
          aria-label={open ? site.nav.menuCloseLabel : site.nav.menuOpenLabel}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="theme-sage bean-pattern absolute inset-x-0 top-full h-[calc(100dvh-var(--nav-height))] border-t border-forest/10 lg:hidden"
          >
            <ul className="container-site flex flex-col gap-1 pt-8">
              {site.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="h-display-md block py-3 text-forest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="container-site mt-8 flex flex-wrap items-center gap-3" onClick={() => setOpen(false)}>
              <OpenBadge />
              <OrderButton />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
