"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Problem() {
  const t = useTranslations("Problem");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  const oldItems = t.raw("compareOldItems") as string[];
  const newItems = t.raw("compareNewItems") as string[];

  return (
    <section aria-labelledby="problem-heading" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono tracking-widest uppercase text-accent">
            {t("label")}
          </span>
          <h2 id="problem-heading" className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center sm:text-left"
            >
              <div className="text-5xl sm:text-6xl font-bold tracking-tight text-accent">
                {stat.value}
              </div>
              <div className="mt-2 text-base text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-0 border border-border rounded overflow-hidden"
        >
          <div className="p-8 sm:p-12 bg-foreground/[0.02]">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted mb-6">
              {t("compareOld")}
            </h3>
            <ul className="space-y-4">
              {oldItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted">
                  {/* A-6: aria-hidden on decorative SVG */}
                  <svg aria-hidden="true" className="w-5 h-5 mt-0.5 shrink-0 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 sm:p-12 border-t md:border-t-0 md:border-l border-border">
            <h3 className="text-sm font-mono uppercase tracking-wider text-accent mb-6">
              {t("compareNew")}
            </h3>
            <ul className="space-y-4">
              {newItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg aria-hidden="true" className="w-5 h-5 mt-0.5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
