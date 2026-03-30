"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="font-serif text-xl tracking-tight">{t("brand")}</h2>
            <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-6">
              {t("product")}
            </h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm text-muted hover:text-foreground transition-colors py-1 inline-block">{t("features")}</a></li>
              <li><a href="#roadmap" className="text-sm text-muted hover:text-foreground transition-colors py-1 inline-block">{t("roadmap")}</a></li>
              <li><a href="#early-access" className="text-sm text-muted hover:text-foreground transition-colors py-1 inline-block">{t("demo")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-6">
              {t("company")}
            </h3>
            <ul className="space-y-3">
              <li><span className="text-sm text-muted/40 py-1 inline-block">{t("about")}</span></li>
              <li><span className="text-sm text-muted/40 py-1 inline-block">{t("careers")}</span></li>
              <li><span className="text-sm text-muted/40 py-1 inline-block">{t("blog")}</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-6">
              {t("legal")}
            </h3>
            <ul className="space-y-3">
              <li><span className="text-sm text-muted/40 py-1 inline-block">{t("privacy")}</span></li>
              <li><span className="text-sm text-muted/40 py-1 inline-block">{t("terms")}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex items-center justify-between">
          <p className="font-mono text-[10px] text-muted tracking-wide">{t("copyright")}</p>
          <div aria-hidden="true" className="hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
