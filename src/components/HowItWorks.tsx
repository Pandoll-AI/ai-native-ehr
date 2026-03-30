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
      {/* Grid lineart overlay */}
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

          {/* Right — 3D mock-up window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="flex items-center justify-center"
          >
            <div className="relative" style={{ transform: "perspective(1000px) rotateY(-3deg) rotateX(2deg)" }}>
              <div className="glass rounded-2xl overflow-hidden w-[320px] sm:w-[380px]">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <span className="ml-3 text-[10px] text-white/30 font-mono">ai-native-emr</span>
                </div>

                {/* Code snippets */}
                <div className="p-5 space-y-3 font-mono text-[11px]">
                  <div className="text-white/30">// ontology-engine.ts</div>
                  <div><span className="text-emerald">const</span> <span className="text-white/80">graph</span> = <span className="text-emerald">buildKnowledgeGraph</span>(</div>
                  <div className="pl-4 text-white/50">patient.vitals,</div>
                  <div className="pl-4 text-white/50">patient.labs,</div>
                  <div className="pl-4 text-white/50">patient.medications</div>
                  <div className="text-white/80">);</div>
                  <div className="mt-3 text-white/30">// ai-agent.ts</div>
                  <div><span className="text-emerald">const</span> <span className="text-white/80">actions</span> = <span className="text-emerald">await</span> agent.<span className="text-emerald">analyze</span>(graph);</div>
                  <div><span className="text-emerald">for</span> (<span className="text-emerald">const</span> action <span className="text-emerald">of</span> actions) {'{'}</div>
                  <div className="pl-4"><span className="text-emerald">await</span> action.<span className="text-white/80">execute</span>();</div>
                  <div>{'}'}</div>
                </div>
              </div>

              {/* Floating status tag */}
              <div className="absolute -bottom-4 -right-4 bg-emerald text-zinc-900 text-[9px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full animate-[float_3s_ease-in-out_infinite]">
                Active
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
