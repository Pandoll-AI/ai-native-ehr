"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex items-end pb-32 pt-20">
      {/* Decorative vertical lines */}
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
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                {t("tagline")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 font-serif text-[clamp(3rem,9vw,8rem)] font-light tracking-tight leading-[0.95] uppercase"
            >
              {t("title")}
              <br />
              <span className="italic text-accent">{t("titleAccent")}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#early-access"
                className="group inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.25em] px-8 py-4 bg-accent text-white transition-all hover:tracking-[0.4em]"
              >
                {t("cta")}
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.25em] px-8 py-4 border border-border hover:bg-foreground/5 transition-all gap-3"
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
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base text-muted leading-relaxed"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
