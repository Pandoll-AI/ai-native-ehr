"use client";

import type { ReactNode } from "react";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AIChartingMockup from "./mockups/AIChartingMockup";
import SmartOrderMockup from "./mockups/SmartOrderMockup";
import DiagnosisCodingMockup from "./mockups/DiagnosisCodingMockup";
import PatientSummaryMockup from "./mockups/PatientSummaryMockup";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Features() {
  const t = useTranslations("Features");

  const mockupComponents: Record<string, ReactNode> = useMemo(() => ({
    f1: <AIChartingMockup />,
    f2: <SmartOrderMockup />,
    f3: <DiagnosisCodingMockup />,
    f5: <PatientSummaryMockup />,
  }), []);

  const features = Array.from({ length: 8 }, (_, i) => {
    const key = `f${i + 1}`;
    return {
      key,
      num: String(i + 1).padStart(2, "0"),
      title: t(`${key}Title`),
      desc: t(`${key}Desc`),
      tag: t(`${key}Tag`),
      isPrimary: i < 4,
      mockup: mockupComponents[key] || null,
    };
  });

  return (
    <section id="features" aria-labelledby="features-heading" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
        >
          <div className="md:col-span-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              {t("label")}
            </span>
          </div>
          <div className="md:col-span-3">
            <h2 id="features-heading" className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.1]">
              {t("title")}
            </h2>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">{t("subtitle")}</p>
          </div>
        </motion.div>

        {/* Bento grid — max 2px border-radius */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {features.map((f, i) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className={`bg-background p-8 flex flex-col gap-5 group hover:bg-surface transition-colors duration-700 ${
                f.isPrimary ? "lg:col-span-2 lg:row-span-1" : "lg:col-span-1"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {f.tag}
                </span>
                <span className="font-serif text-3xl font-light text-foreground/[0.08]">
                  {f.num}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-light tracking-tight">{f.title}</h3>
              <p className="text-base text-muted leading-relaxed">{f.desc}</p>

              {f.mockup && (
                <div className="mt-4 hidden lg:flex justify-center">
                  {f.mockup}
                </div>
              )}

              {/* Scan-line accent — #3b82f6 per template spec */}
              <div aria-hidden="true" className="mt-auto h-[2px] bg-border overflow-hidden">
                <div className="h-full w-1/3 bg-technical-blue opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animation: "scanline 2s linear infinite", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
