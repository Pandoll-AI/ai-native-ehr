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
    <section id="roadmap" aria-labelledby="roadmap-heading" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-32">
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
            <h2 id="roadmap-heading" className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.1]">
              {t("title")}
            </h2>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">{t("subtitle")}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-border">
          {quarters.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 sm:p-10 relative ${
                i < quarters.length - 1 ? "border-b md:border-b-0 md:border-r border-border" : ""
              } ${q.status === "current" ? "bg-surface" : ""}`}
            >
              {/* Top accent bar for current */}
              {q.status === "current" && (
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[2px] bg-accent overflow-hidden">
                  <div className="h-full w-1/3 bg-technical-blue" style={{ animation: "scanline 2s linear infinite" }} />
                </div>
              )}
              {q.status === "completed" && (
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[2px] bg-accent" />
              )}

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{q.label}</span>
              <h3 className="mt-4 font-serif text-xl font-light tracking-tight">{q.title}</h3>
              <p className="mt-3 text-base text-muted leading-relaxed">{q.desc}</p>

              {q.status === "completed" && (
                <span className="inline-block mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-accent px-2 py-1 border border-accent/20">
                  {t("completedLabel")}
                </span>
              )}
              {q.status === "current" && (
                <span className="inline-flex items-center gap-2 mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-accent px-2 py-1 bg-accent/10 border border-accent/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {t("currentLabel")}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
