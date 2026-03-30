"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    { number: t("step1Number"), title: t("step1Title"), desc: t("step1Desc") },
    { number: t("step2Number"), title: t("step2Title"), desc: t("step2Desc") },
    { number: t("step3Number"), title: t("step3Title"), desc: t("step3Desc") },
  ];

  return (
    <section id="how-it-works" aria-labelledby="hiw-heading" className="relative bg-zinc grain overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — steps */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">
                {t("label")}
              </span>
              <h2 id="hiw-heading" className="mt-4 text-4xl sm:text-5xl font-bold tracking-[-0.05em] leading-[1.05] text-white">
                {t("title")}
              </h2>
              <p className="mt-4 text-base text-white/50 leading-relaxed max-w-md font-light">
                {t("subtitle")}
              </p>
            </motion.div>

            <div className="mt-12 space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease }}
                  className="glass rounded-2xl p-6 flex gap-5 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                    <span className="text-emerald font-bold text-lg">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">{step.title}</h3>
                    <p className="mt-1 text-sm text-white/50 leading-relaxed font-light">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — clinical data flow visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[340px] lg:max-w-[400px] lg:[transform:perspective(1000px)_rotateY(-2deg)_rotateX(1deg)]">
              {/* Patient data flow card */}
              <div className="glass rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald/20 flex items-center justify-center text-emerald text-xs font-bold">KM</div>
                    <div>
                      <div className="text-sm font-semibold text-white">Kim, Minjun</div>
                      <div className="text-[10px] text-white/30">M, 45y · Visit #47</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald">Live</span>
                  </div>
                </div>

                {/* Data flow steps */}
                <div className="p-6 space-y-4">
                  {/* Voice input → SOAP */}
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg aria-hidden="true" className="w-3 h-3 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">Voice Input</div>
                      <div className="mt-1 text-xs text-white/70 font-light italic">"Patient reports persistent headache for 3 days..."</div>
                    </div>
                  </div>

                  <div aria-hidden="true" className="ml-3 w-px h-4 bg-emerald/20" />

                  {/* Ontology mapping */}
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg aria-hidden="true" className="w-3 h-3 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">Ontology Mapping</div>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {["G44.2 Tension HA", "R51 Headache", "BP 128/82"].map(tag => (
                          <span key={tag} className="text-[9px] text-emerald bg-emerald/10 px-2 py-0.5 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div aria-hidden="true" className="ml-3 w-px h-4 bg-emerald/20" />

                  {/* AI Agent actions */}
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg aria-hidden="true" className="w-3 h-3 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">Agent Actions</div>
                      <div className="mt-1.5 space-y-1.5">
                        {[
                          { label: "SOAP Note", status: "Generated" },
                          { label: "ICD-10: G44.2", status: "Coded" },
                          { label: "Rx: Acetaminophen 500mg", status: "Ordered" },
                        ].map(a => (
                          <div key={a.label} className="flex items-center justify-between text-xs">
                            <span className="text-white/60 font-light">{a.label}</span>
                            <span className="text-emerald text-[9px] font-bold">{a.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div aria-hidden="true" className="ml-3 w-px h-4 bg-emerald/20" />

                  {/* Approval */}
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-emerald flex items-center justify-center shrink-0 mt-0.5">
                      <svg aria-hidden="true" className="w-3 h-3 text-zinc-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald">Ready for Approval</div>
                      <div className="mt-1 text-xs text-white/50 font-light">One tap to confirm. You stay in control.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating status tag */}
              <div className="absolute -bottom-3 -right-3 bg-emerald text-zinc-900 text-[9px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full animate-[float_3s_ease-in-out_infinite]">
                3.2s total
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
