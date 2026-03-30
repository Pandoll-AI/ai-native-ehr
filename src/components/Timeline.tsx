"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Timeline() {
  const t = useTranslations("Timeline");

  const quarters = [
    { label: t("q1Label"), title: t("q1Title"), desc: t("q1Desc"), status: t("q1Status") },
    { label: t("q2Label"), title: t("q2Title"), desc: t("q2Desc"), status: t("q2Status") },
    { label: t("q3Label"), title: t("q3Title"), desc: t("q3Desc"), status: t("q3Status") },
    { label: t("q4Label"), title: t("q4Title"), desc: t("q4Desc"), status: t("q4Status") },
  ];

  return (
    <section id="roadmap" aria-labelledby="roadmap-heading" className="bg-light py-32">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">{t("label")}</span>
          <h2 id="roadmap-heading" className="mt-4 text-4xl sm:text-5xl font-bold tracking-[-0.05em] leading-[1.05] text-zinc">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-text-muted max-w-xl mx-auto font-light">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quarters.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className={`relative rounded-2xl border p-6 transition-all duration-300 hover:scale-105 ${
                q.status === "current"
                  ? "bg-zinc text-white border-zinc"
                  : "bg-white border-zinc-100 text-zinc"
              }`}
            >
              {q.status === "completed" && (
                <div aria-hidden="true" className="absolute top-0 left-6 right-6 h-[2px] bg-emerald rounded-full" />
              )}

              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${q.status === "current" ? "text-emerald" : "text-text-muted"}`}>
                {q.label}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{q.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed font-light ${q.status === "current" ? "text-white/60" : "text-text-muted"}`}>
                {q.desc}
              </p>

              {q.status === "completed" && (
                <span className="inline-block mt-4 text-[9px] font-bold uppercase tracking-[0.2em] text-emerald">
                  {t("completedLabel")}
                </span>
              )}
              {q.status === "current" && (
                <span className="inline-flex items-center gap-2 mt-4 text-[9px] font-bold uppercase tracking-[0.2em] text-emerald">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
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
