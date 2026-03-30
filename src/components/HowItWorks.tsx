"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    { number: t("step1Number"), title: t("step1Title"), desc: t("step1Desc") },
    { number: t("step2Number"), title: t("step2Title"), desc: t("step2Desc") },
    { number: t("step3Number"), title: t("step3Title"), desc: t("step3Desc") },
  ];

  return (
    <section id="how-it-works" aria-labelledby="hiw-heading" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-32">
        {/* Header — asymmetric */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
        >
          <div className="md:col-span-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              {t("label")}
            </span>
          </div>
          <div className="md:col-span-3">
            <h2 id="hiw-heading" className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.1]">
              {t("title")}
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </motion.div>

        {/* Steps — vertical numbered list with left labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 sm:p-16 relative ${
                i < steps.length - 1 ? "border-b md:border-b-0 md:border-r border-border" : ""
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Step {step.number}
              </span>

              <div aria-hidden="true" className="font-serif text-[6rem] font-light text-foreground/[0.04] absolute top-4 right-8 leading-none">
                {step.number}
              </div>

              <h3 className="mt-6 font-serif text-3xl font-light tracking-tight">
                {step.title}
              </h3>
              <p className="mt-4 text-base text-muted leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
