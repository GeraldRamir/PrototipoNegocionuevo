"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const copy = site.beanClub;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function BeanClub() {
  const inputId = useId();
  const errorId = useId();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "success">("idle");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setState(EMAIL_PATTERN.test(email.trim()) ? "success" : "error");
  };

  return (
    <section aria-labelledby="bean-club-title" className="pb-16 pt-[88px] lg:pt-[120px]">
      <div className="container-site">
        <Reveal>
          <SectionEyebrow tone="mustard" underline={false}>
            {copy.eyebrow}
          </SectionEyebrow>
          <h2 id="bean-club-title" className="h-display-lg mt-3 text-cream-text">
            {copy.title}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-12">
          <Reveal index={1}>
            <p className="max-w-[420px] text-[16px] leading-[1.6] text-cream-text/80">{copy.body}</p>
          </Reveal>

          <Reveal index={2}>
            <AnimatePresence mode="wait">
              {state === "success" ? (
                <motion.p
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-display text-[32px] font-extrabold text-mustard [font-variation-settings:'SOFT'_100]"
                  role="status"
                >
                  {copy.success}
                </motion.p>
              ) : (
                <motion.form key="form" exit={{ opacity: 0, y: -10 }} onSubmit={onSubmit} noValidate>
                  <label htmlFor={inputId} className="eyebrow text-mustard">
                    {copy.emailLabel}
                  </label>
                  <div className="mt-2.5 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <input
                      id={inputId}
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (state === "error") setState("idle");
                      }}
                      placeholder={copy.placeholder}
                      aria-invalid={state === "error"}
                      aria-describedby={state === "error" ? errorId : undefined}
                      className={`h-[52px] w-full flex-1 rounded-pill border-[1.5px] bg-sage/10 px-6 text-[15px] text-cream-text outline-none transition-colors placeholder:text-cream-text/40 focus:border-sage focus-visible:outline-mustard ${
                        state === "error" ? "border-rust" : "border-sage/40"
                      }`}
                    />
                    <button type="submit" className={buttonClasses("light", "md", "shrink-0")}>
                      {copy.cta}
                    </button>
                  </div>
                  {state === "error" ? (
                    <p id={errorId} role="alert" className="mt-2 pl-5 text-[13px] text-mustard">
                      {copy.error}
                    </p>
                  ) : null}
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
