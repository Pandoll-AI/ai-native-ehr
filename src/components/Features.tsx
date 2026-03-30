"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const primaryFeatures = [
  { key: "f1", src: "/mockups/ai-charting.png" },
  { key: "f2", src: "/mockups/smart-orders.png" },
  { key: "f3", src: "/mockups/diagnosis-coding.png" },
  { key: "f5", src: "/mockups/patient-summary.png" },
];

const secondaryFeatures = ["f4", "f6", "f7", "f8"];

function ScrollFeature({ idx, featureKey, src, total, t }: {
  idx: number; featureKey: string; src: string; total: number;
  t: (key: string) => string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 1, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.96]);

  return (
    <div ref={ref} className="min-h-[80vh] lg:min-h-screen flex items-center py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div style={{ opacity, y }} className={idx % 2 === 1 ? "lg:order-2" : ""}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">
                {t(`${featureKey}Tag`)}
              </span>
              <span aria-hidden="true" className="flex-1 h-px bg-white/10" />
              <span className="text-sm text-white/20 font-light">{idx + 1}/{total}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.05em] leading-[1.05] text-white">
              {t(`${featureKey}Title`)}
            </h3>
            <p className="mt-6 text-base sm:text-lg text-white/50 leading-relaxed font-light max-w-md">
              {t(`${featureKey}Desc`)}
            </p>
          </motion.div>

          {/* Device mockup */}
          <motion.div
            style={{ opacity, scale }}
            className={`flex justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}
          >
            <div className="w-[220px] sm:w-[260px]">
              <div className="relative rounded-[36px] bg-zinc p-[6px] shadow-[0_30px_80px_-15px_rgba(52,211,153,0.2)]">
                <div aria-hidden="true" className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-zinc rounded-b-[11px] z-10" />
                <div className="rounded-[30px] overflow-hidden bg-white">
                  <Image
                    src={src}
                    alt={t(`${featureKey}Title`)}
                    width={375}
                    height={812}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const t = useTranslations("Features");

  return (
    <section id="features" aria-labelledby="features-heading">
      {/* Section header — dark */}
      <div className="bg-dark">
        <div className="max-w-[1600px] mx-auto px-8 pt-40 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">
              {t("label")}
            </span>
            <h2 id="features-heading" className="mt-4 text-4xl sm:text-5xl font-bold tracking-[-0.05em] leading-[1.05] text-white">
              {t("title")}
            </h2>
            <p className="mt-4 text-base text-white/50 max-w-xl mx-auto font-light">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Primary features — Apple scroll-through, dark bg */}
      <div className="bg-dark">
        {primaryFeatures.map((pf, i) => (
          <ScrollFeature
            key={pf.key}
            idx={i}
            featureKey={pf.key}
            src={pf.src}
            total={primaryFeatures.length}
            t={t}
          />
        ))}
      </div>

      {/* Secondary features — light horizontal cards */}
      <div className="bg-light py-20">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-12"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">
              And more
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-zinc">
              Everything else, built-in.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {secondaryFeatures.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="group bg-white rounded-2xl border border-zinc-100 p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-emerald/10 flex items-center justify-center">
                    <span className="text-emerald font-bold text-sm">{String(i + 5).padStart(2, "0")}</span>
                  </span>
                  <svg aria-hidden="true" className="w-4 h-4 text-zinc-300 group-hover:text-emerald transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold tracking-tight text-zinc">{t(`${key}Title`)}</h4>
                <p className="mt-2 text-sm text-text-muted leading-relaxed font-light">{t(`${key}Desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
