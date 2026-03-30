"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,255,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-mono tracking-widest uppercase text-accent mb-6 px-3 py-1 border border-accent/20 rounded-full">
              {t("tagline")}
            </span>
          </motion.div>

          {/* T-2: leading-[1.05] instead of 0.95, M-2: add md:text-6xl step */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            {t("title")}
            <br />
            <span className="text-accent">{t("titleAccent")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#early-access"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-foreground text-background rounded hover:bg-foreground/90 active:bg-foreground/80 transition-colors"
            >
              {t("cta")}
            </a>
            {/* UX-3: changed #demo to #features since no demo section exists yet */}
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-border rounded hover:bg-foreground/5 transition-colors gap-2"
            >
              {/* A-5: aria-hidden on decorative SVG */}
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6.5 3.5l6 4.5-6 4.5V3.5z" />
              </svg>
              {t("ctaSecondary")}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-muted font-mono"
          >
            {t("launchDate")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
