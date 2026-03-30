"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

export default function EarlyAccess() {
  const t = useTranslations("CTA");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const email = new FormData(form).get("email") as string;
    if (!email || !email.includes("@")) {
      setError(t("errorInvalid"));
      return;
    }
    console.log("Early access signup:", email);
    setSubmitted(true);
  }

  return (
    <section id="early-access" aria-labelledby="cta-heading" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Left — large serif heading */}
          <div>
            <h2 id="cta-heading" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              {t("title")}
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">{t("subtitle")}</p>
          </div>

          {/* Right — form */}
          <div>
            <div aria-live="polite" aria-atomic="true">
              {submitted ? (
                <div className="p-10 border border-accent/20 bg-accent/5">
                  <p className="text-accent font-medium text-lg">{t("success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="email-input" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                      Email
                    </label>
                    <input
                      id="email-input"
                      name="email"
                      type="email"
                      required
                      placeholder={t("placeholder")}
                      aria-describedby={error ? "email-error" : undefined}
                      aria-invalid={error ? "true" : undefined}
                      className={`mt-2 w-full px-0 py-4 text-lg bg-transparent border-b-2 focus:outline-none transition-colors font-mono placeholder:text-muted/40 ${
                        error ? "border-red-400" : "border-border focus:border-accent"
                      }`}
                    />
                    {error && (
                      <p id="email-error" role="alert" className="mt-2 font-mono text-[10px] text-red-500">
                        {error}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full font-mono text-[10px] uppercase tracking-[0.25em] px-8 py-4 bg-accent text-white transition-all hover:tracking-[0.4em] mt-6"
                  >
                    {t("button")}
                  </button>
                </form>
              )}
            </div>

            <p className="mt-6 font-mono text-[10px] text-muted tracking-wide">{t("note")}</p>

            <div className="mt-6 pt-4 border-t border-border">
              <a
                href="mailto:hello@ainativeemr.com"
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent hover:underline"
              >
                {t("demo")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
