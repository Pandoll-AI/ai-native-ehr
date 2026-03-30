"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Timeline() {
  const t = useTranslations("Timeline");

  const quarters = [
    { label: t("q1Label"), title: t("q1Title"), desc: t("q1Desc"), status: t("q1Status") },
    { label: t("q2Label"), title: t("q2Title"), desc: t("q2Desc"), status: t("q2Status") },
    { label: t("q3Label"), title: t("q3Title"), desc: t("q3Desc"), status: t("q3Status") },
    { label: t("q4Label"), title: t("q4Title"), desc: t("q4Desc"), status: t("q4Status") },
  ];

  return (
    <section id="roadmap" className="py-32 border-t border-border">
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
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl">{t("subtitle")}</p>
        </motion.div>

        <div className="mt-20 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {quarters.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full border-2 bg-surface absolute -top-[1.625rem] left-0 z-10"
                  style={{
                    borderColor: q.status === "completed" ? "var(--accent)" : q.status === "current" ? "var(--accent)" : "var(--border)",
                    backgroundColor: q.status === "completed" ? "var(--accent)" : "var(--surface)",
                  }}
                >
                  {q.status === "current" && (
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  )}
                </div>

                <div className="md:pt-8">
                  <span className="text-xs font-mono text-muted">{q.label}</span>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{q.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{q.desc}</p>

                  {q.status === "completed" && (
                    <span className="inline-block mt-3 text-[10px] font-mono uppercase tracking-wider text-accent px-2 py-0.5 border border-accent/20 rounded">
                      Completed
                    </span>
                  )}
                  {q.status === "current" && (
                    <span className="inline-block mt-3 text-[10px] font-mono uppercase tracking-wider text-accent px-2 py-0.5 bg-accent/10 border border-accent/20 rounded">
                      In Progress
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
