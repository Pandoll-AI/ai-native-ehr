"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Problem() {
  const t = useTranslations("Problem");

  const oldItems = t.raw("compareOldItems") as string[];
  const newItems = t.raw("compareNewItems") as string[];

  return (
    <section aria-labelledby="problem-heading" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-32">
        {/* Header — asymmetric */}
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
            <h2 id="problem-heading" className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.1]">
              {t("title")}
            </h2>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </motion.div>

        {/* Comparison — asymmetric 2-col */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="grid grid-cols-1 md:grid-cols-2 border border-border"
        >
          <div className="p-10 sm:p-16 bg-foreground/[0.02] border-b md:border-b-0 md:border-r border-border">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-8">
              {t("compareOld")}
            </h3>
            <ul className="space-y-5">
              {oldItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-muted">
                  <svg aria-hidden="true" className="w-4 h-4 mt-1 shrink-0 text-red-400/60" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" />
                  </svg>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 sm:p-16">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-8">
              {t("compareNew")}
            </h3>
            <ul className="space-y-5">
              {newItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <svg aria-hidden="true" className="w-4 h-4 mt-1 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
