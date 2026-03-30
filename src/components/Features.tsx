"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const mockups = [
  { key: "f1", src: "/mockups/ai-charting.png" },
  { key: "f2", src: "/mockups/smart-orders.png" },
  { key: "f3", src: "/mockups/diagnosis-coding.png" },
  { key: "f5", src: "/mockups/patient-summary.png" },
];

export default function Features() {
  const t = useTranslations("Features");
  const [active, setActive] = useState(0);

  const features = Array.from({ length: 8 }, (_, i) => {
    const key = `f${i + 1}`;
    return { key, num: String(i + 1).padStart(2, "0"), title: t(`${key}Title`), desc: t(`${key}Desc`), tag: t(`${key}Tag`) };
  });

  return (
    <section id="features" aria-labelledby="features-heading" className="bg-light py-32">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — sticky header + feature grid */}
          <div>
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">
                  {t("label")}
                </span>
                <h2 id="features-heading" className="mt-4 text-4xl sm:text-5xl font-bold tracking-[-0.05em] leading-[1.05] text-zinc">
                  {t("title")}
                </h2>
                <p className="mt-4 text-base text-text-muted leading-relaxed max-w-md font-light">
                  {t("subtitle")}
                </p>
              </motion.div>

              {/* Feature icon grid — 2×4 */}
              <div className="mt-12 grid grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <motion.button
                    key={f.key}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease }}
                    onClick={() => { if (i < 4) setActive(i); }}
                    className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                      i < 4 && active === i
                        ? "bg-zinc text-white border-zinc"
                        : "bg-white border-zinc-100 hover:border-zinc-300 text-zinc"
                    }`}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-muted">{f.num}</span>
                    <div className="mt-1 text-sm font-semibold tracking-tight">{f.title}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Right — display card with mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative"
          >
            <div className="bg-white rounded-[2.5rem] border border-zinc-100 overflow-hidden p-8 lg:p-12">
              {/* Active feature description */}
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">
                  {features[active < 4 ? active : 0].tag}
                </span>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-zinc">
                  {features[active < 4 ? active : 0].title}
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed font-light">
                  {features[active < 4 ? active : 0].desc}
                </p>
              </div>

              {/* Mockup display */}
              <div className="relative flex justify-center">
                <div className="w-[220px] sm:w-[260px] hover:scale-105 transition-transform duration-300">
                  <div className="rounded-[28px] bg-zinc p-[6px] shadow-2xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-zinc rounded-b-[12px] z-10" />
                    <div className="rounded-[22px] overflow-hidden bg-white">
                      <Image
                        src={mockups[active < 4 ? active : 0].src}
                        alt={features[active < 4 ? active : 0].title}
                        width={375}
                        height={812}
                        className="w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Floating glass analysis card */}
                <div className="absolute -right-4 bottom-16 glass rounded-2xl p-4 text-white hidden lg:block" style={{ background: "rgba(24,24,27,0.85)", backdropFilter: "blur(16px)" }}>
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald mb-3">System Analysis</div>
                  <div className="space-y-2 w-40">
                    {[["NLP Accuracy", 96], ["Code Match", 94], ["Latency", 12]].map(([label, val]) => (
                      <div key={String(label)}>
                        <div className="flex justify-between text-[10px] text-white/60 mb-1">
                          <span>{label}</span>
                          <span className="text-emerald">{typeof val === "number" && val < 50 ? `${val}ms` : `${val}%`}</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald rounded-full" style={{ width: `${typeof val === "number" && val < 50 ? 88 : val}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
