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
    // TODO: Send email to API endpoint (e.g., /api/early-access)
    console.log("Early access signup:", email);
    setSubmitted(true);
  }

  return (
    <section id="early-access" aria-labelledby="cta-heading" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 id="cta-heading" className="text-3xl sm:text-5xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted">{t("subtitle")}</p>

          {/* A-10: aria-live for dynamic state changes */}
          <div aria-live="polite" aria-atomic="true">
            {submitted ? (
              <div className="mt-10 p-6 border border-accent/20 rounded bg-accent/5">
                <p className="text-accent font-medium">{t("success")}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                noValidate
              >
                <div className="flex-1 flex flex-col gap-1">
                  <label htmlFor="email-input" className="sr-only">
                    {t("placeholder")}
                  </label>
                  <input
                    id="email-input"
                    name="email"
                    type="email"
                    required
                    placeholder={t("placeholder")}
                    aria-describedby={error ? "email-error" : undefined}
                    aria-invalid={error ? "true" : undefined}
                    className={`w-full px-4 py-3 text-sm border rounded bg-surface focus:outline-none focus:border-accent transition-colors ${
                      error ? "border-red-400" : "border-border"
                    }`}
                  />
                  {error && (
                    <p id="email-error" role="alert" className="text-xs text-red-500 text-left">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-medium bg-foreground text-background rounded hover:bg-foreground/90 active:bg-foreground/80 transition-colors whitespace-nowrap"
                >
                  {t("button")}
                </button>
              </form>
            )}
          </div>

          <p className="mt-4 text-xs text-muted">{t("note")}</p>

          <div className="mt-8">
            <a
              href="mailto:hello@ainativeemr.com"
              className="text-sm text-accent hover:underline"
            >
              {t("demo")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
