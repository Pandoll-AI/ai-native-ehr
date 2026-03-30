"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function EarlyAccess() {
  const t = useTranslations("CTA");

  return (
    <section id="early-access" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted">{t("subtitle")}</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder={t("placeholder")}
              className="flex-1 px-4 py-3 text-sm border border-border rounded bg-surface focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium bg-foreground text-background rounded hover:bg-foreground/90 transition-colors whitespace-nowrap"
            >
              {t("button")}
            </button>
          </form>

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
