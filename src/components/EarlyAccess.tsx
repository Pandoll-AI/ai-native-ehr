"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function EarlyAccess() {
  const t = useTranslations("CTA");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const email = new FormData(e.currentTarget).get("email") as string;
    if (!email || !email.includes("@")) { setError(t("errorInvalid")); return; }
    console.log("Early access signup:", email);
    setSubmitted(true);
  }

  return (
    <section id="early-access" aria-labelledby="cta-heading" className="relative bg-dark grain overflow-hidden py-32">
      <div className="absolute inset-0 glow-emerald opacity-50" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 id="cta-heading" className="text-4xl sm:text-5xl font-bold tracking-[-0.05em] leading-[1.05] text-white">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-white/50 font-light">{t("subtitle")}</p>

          <div aria-live="polite" aria-atomic="true" className="mt-10">
            {submitted ? (
              <div className="glass rounded-2xl p-8">
                <p className="text-emerald font-semibold text-lg">{t("success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" noValidate>
                <div className="flex-1">
                  <label htmlFor="email-input" className="sr-only">{t("placeholder")}</label>
                  <input
                    id="email-input"
                    name="email"
                    type="email"
                    required
                    placeholder={t("placeholder")}
                    aria-describedby={error ? "email-error" : undefined}
                    aria-invalid={error ? "true" : undefined}
                    className={`w-full glass rounded-full px-6 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                      error ? "border-red-400" : "focus:border-emerald/50"
                    }`}
                  />
                  {error && <p id="email-error" role="alert" className="mt-2 text-[10px] text-red-400 text-left pl-6">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-emerald text-zinc-900 rounded-full px-8 py-3.5 text-sm font-semibold hover:scale-105 transition-transform duration-300 whitespace-nowrap"
                >
                  {t("button")}
                </button>
              </form>
            )}
          </div>

          <p className="mt-6 text-[10px] text-white/30 tracking-wide">{t("note")}</p>

          <div className="mt-6">
            <a href="mailto:hello@ainativeemr.com" className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald hover:underline">
              {t("demo")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
