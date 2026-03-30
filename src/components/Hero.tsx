"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex items-end pb-32 pt-20">
      {/* Decorative vertical guide lines at 0/25/50/75/100% */}
      <div aria-hidden="true" className="absolute inset-0 max-w-7xl mx-auto px-8">
        <div className="h-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-border" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main heading — spans 3 columns */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                {t("tagline")}
              </span>
            </motion.div>

            {/* 9vw massive UPPERCASE serif H1 with italic secondary in #B4B4B4 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="mt-8 font-serif text-[clamp(3rem,9vw,8rem)] font-light tracking-tight leading-[0.95] uppercase"
            >
              {t("title")}
              <br />
              <span className="italic text-secondary">{t("titleAccent")}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              {/* CTA with white overlay slide */}
              <a
                href="#early-access"
                className="cta-overlay inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.25em] px-8 py-4 bg-accent text-white transition-all duration-700 hover:tracking-[0.4em]"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                {t("cta")}
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.25em] px-8 py-4 border border-border hover:bg-foreground/5 transition-all duration-700 gap-3"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.5 3.5l6 4.5-6 4.5V3.5z" />
                </svg>
                {t("ctaSecondary")}
              </a>
            </motion.div>
          </div>

          {/* Right column — subtitle + launch date */}
          <div className="md:col-span-1 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="text-base text-muted leading-relaxed"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="mt-8 pt-4 border-t border-border"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                {t("launchDate")}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
