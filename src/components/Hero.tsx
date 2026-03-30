"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Decorative vertical guide lines */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              {t("tagline")}
            </span>
          </motion.div>

          <div className="mt-8 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease }}
              className="font-sans text-[clamp(3.5rem,12vw,10rem)] font-bold tracking-[-0.04em] leading-[0.85] uppercase"
            >
              {t("title")}
            </motion.h1>
          </div>
          <div className="mt-4 sm:mt-6 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease }}
              className="font-sans text-[clamp(3.5rem,12vw,10rem)] font-bold tracking-[-0.04em] leading-[0.85] uppercase text-accent"
            >
              {t("titleAccent")}
            </motion.h1>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease }}
              className="text-base sm:text-lg text-muted leading-relaxed max-w-md"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="flex flex-col sm:flex-row gap-4 md:justify-end"
            >
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            className="mt-16 pt-6 border-t border-border"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              {t("launchDate")}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Sub-hero — vision statement */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Large statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-7"
            >
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15]">
                {t("subhero")}
              </h2>
            </motion.div>

            {/* Technical detail */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-base text-muted leading-[1.8]">
                {t("subheroDetail")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Ontology Engine", "AI Agents", "Knowledge Graph", "Real-time CDS", "NLP Pipeline"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent px-3 py-1.5 border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
