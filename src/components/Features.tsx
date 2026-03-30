"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const mockupImages: Record<string, string> = {
  f1: "/mockups/ai-charting.png",
  f2: "/mockups/smart-orders.png",
  f3: "/mockups/diagnosis-coding.png",
  f5: "/mockups/patient-summary.png",
};

function FeatureShowcase({
  num,
  tag,
  title,
  desc,
  mockup,
  reverse,
}: {
  num: string;
  tag: string;
  title: string;
  desc: string;
  mockup: string;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-32 ${
        reverse ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
        className={`${reverse ? "lg:order-2 lg:direction-ltr" : "lg:order-1"}`}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            {tag}
          </span>
          <span aria-hidden="true" className="flex-1 h-px bg-border" />
          <span className="font-serif text-2xl font-light text-foreground/10">
            {num}
          </span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight leading-[1.1]">
          {title}
        </h3>
        <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-lg">
          {desc}
        </p>
      </motion.div>

      {/* Image side — Apple-style device frame with parallax */}
      <motion.div
        style={{ y }}
        className={`${reverse ? "lg:order-1 lg:direction-ltr" : "lg:order-2"} flex justify-center`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="relative"
        >
          {/* iPhone frame */}
          <div className="relative w-[240px] sm:w-[280px] mx-auto">
            {/* Device bezel */}
            <div className="rounded-[36px] bg-[#1c1c1c] p-[8px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]">
              {/* Notch */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-[#1c1c1c] rounded-b-[14px] z-10"
              />
              {/* Screen */}
              <div className="rounded-[28px] overflow-hidden bg-white">
                <Image
                  src={mockup}
                  alt={title}
                  width={375}
                  height={812}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Reflection glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[44px] bg-accent/5 -z-10 blur-xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Features() {
  const t = useTranslations("Features");

  const primaryFeatures = [
    { key: "f1", num: "01" },
    { key: "f2", num: "02" },
    { key: "f3", num: "03" },
    { key: "f5", num: "05" },
  ];

  const secondaryFeatures = [
    { key: "f4", num: "04" },
    { key: "f6", num: "06" },
    { key: "f7", num: "07" },
    { key: "f8", num: "08" },
  ];

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-8 pt-32">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          <div className="md:col-span-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              {t("label")}
            </span>
          </div>
          <div className="md:col-span-3">
            <h2
              id="features-heading"
              className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.1]"
            >
              {t("title")}
            </h2>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </motion.div>

        {/* Primary features — alternating image+text with Apple-style presentation */}
        <div className="divide-y divide-border">
          {primaryFeatures.map((pf, i) => (
            <FeatureShowcase
              key={pf.key}
              num={pf.num}
              tag={t(`${pf.key}Tag`)}
              title={t(`${pf.key}Title`)}
              desc={t(`${pf.key}Desc`)}
              mockup={mockupImages[pf.key]}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>

      {/* Secondary features — compact grid */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {secondaryFeatures.map((sf, i) => (
              <motion.div
                key={sf.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="bg-background p-8 flex flex-col gap-4 group hover:bg-surface transition-colors duration-700"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                    {t(`${sf.key}Tag`)}
                  </span>
                  <span className="font-serif text-2xl font-light text-foreground/[0.08]">
                    {sf.num}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-light tracking-tight">
                  {t(`${sf.key}Title`)}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t(`${sf.key}Desc`)}
                </p>
                <div
                  aria-hidden="true"
                  className="mt-auto h-[2px] bg-border overflow-hidden"
                >
                  <div
                    className="h-full w-1/3 bg-technical-blue opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      animation: "scanline 2s linear infinite",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
