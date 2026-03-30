"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="sm:col-span-2 md:col-span-1">
            {/* A-11: h2 for footer heading, h3 for sub-sections */}
            <h2 className="text-lg font-semibold tracking-tight">{t("brand")}</h2>
            <p className="mt-2 text-sm text-muted max-w-xs">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
              {t("product")}
            </h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-muted hover:text-foreground transition-colors py-1 inline-block">{t("features")}</a></li>
              <li><a href="#roadmap" className="text-sm text-muted hover:text-foreground transition-colors py-1 inline-block">{t("roadmap")}</a></li>
              <li><a href="#early-access" className="text-sm text-muted hover:text-foreground transition-colors py-1 inline-block">{t("demo")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
              {t("company")}
            </h3>
            {/* A-9: Disabled placeholder links with no navigation */}
            <ul className="space-y-2">
              <li><span className="text-sm text-muted/50 py-1 inline-block">{t("about")}</span></li>
              <li><span className="text-sm text-muted/50 py-1 inline-block">{t("careers")}</span></li>
              <li><span className="text-sm text-muted/50 py-1 inline-block">{t("blog")}</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
              {t("legal")}
            </h3>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted/50 py-1 inline-block">{t("privacy")}</span></li>
              <li><span className="text-sm text-muted/50 py-1 inline-block">{t("terms")}</span></li>
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
