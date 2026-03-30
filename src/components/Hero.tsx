"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "8", label: "AI Modules" },
  { value: "<1s", label: "Response" },
  { value: "2026", label: "Launch" },
];

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <>
      {/* Dark immersive hero — 92vh */}
      <section className="relative min-h-[92vh] rounded-b-[2.5rem] overflow-hidden grain flex items-center">
        {/* Background layers */}
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 glow-emerald" />

        {/* Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left — typography */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">
                  {t("tagline")}
                </span>
              </motion.div>

              <div className="mt-8 overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease }}
                  className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-[-0.05em] leading-[1.05] text-white"
                >
                  {t("title")}
                </motion.h1>
              </div>
              <div className="mt-2 overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease }}
                  className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-[-0.05em] leading-[1.05] text-emerald"
                >
                  {t("titleAccent")}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease }}
                className="mt-10 text-base sm:text-lg text-white/60 leading-relaxed max-w-lg font-light"
              >
                {t("subtitle")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#early-access"
                  className="bg-white text-zinc-900 rounded-full pl-6 pr-2 py-2.5 flex items-center gap-3 text-sm font-semibold hover:scale-105 transition-transform duration-300"
                >
                  {t("cta")}
                  <span className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center">
                    <svg aria-hidden="true" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#features"
                  className="glass rounded-full px-6 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M6.5 3.5l6 4.5-6 4.5V3.5z" /></svg>
                  {t("ctaSecondary")}
                </a>
              </motion.div>
            </div>

            {/* Right — glass stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="lg:col-span-4 flex flex-row lg:flex-col gap-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5 flex-1 lg:flex-none">
                  <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{s.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Launch date */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            className="mt-16 pt-6 border-t border-white/10"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
              {t("launchDate")}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Sub-hero — dark with emerald tags */}
      <section className="bg-dark py-32">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.05em] leading-[1.05] text-white">
                {t("subhero")}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-base text-white/50 leading-[1.8] font-light">
                {t("subheroDetail")}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Ontology Engine", "AI Agents", "Knowledge Graph", "Real-time CDS", "NLP Pipeline"].map((tag) => (
                  <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald px-3 py-1.5 border border-emerald/30 rounded-full">
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
