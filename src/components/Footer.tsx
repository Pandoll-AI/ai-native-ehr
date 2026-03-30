"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold tracking-tight">{t("brand")}</h3>
            <p className="mt-2 text-sm text-muted max-w-xs">{t("tagline")}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
              {t("product")}
            </h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t("features")}</a></li>
              <li><a href="#roadmap" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t("roadmap")}</a></li>
              <li><a href="#early-access" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t("demo")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
              {t("company")}
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t("about")}</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t("careers")}</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t("blog")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
              {t("legal")}
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t("privacy")}</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t("terms")}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
