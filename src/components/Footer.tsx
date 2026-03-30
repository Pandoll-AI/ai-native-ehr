"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-dark border-t border-white/5 py-16">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold text-white tracking-tight">{t("brand")}</h2>
            <p className="mt-2 text-sm text-white/40 max-w-xs font-light">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">{t("product")}</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm text-white/50 hover:text-white transition-colors py-1 inline-block">{t("features")}</a></li>
              <li><a href="#roadmap" className="text-sm text-white/50 hover:text-white transition-colors py-1 inline-block">{t("roadmap")}</a></li>
              <li><a href="#early-access" className="text-sm text-white/50 hover:text-white transition-colors py-1 inline-block">{t("demo")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">{t("company")}</h3>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/20 py-1 inline-block">{t("about")}</span></li>
              <li><span className="text-sm text-white/20 py-1 inline-block">{t("careers")}</span></li>
              <li><span className="text-sm text-white/20 py-1 inline-block">{t("blog")}</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">{t("legal")}</h3>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/20 py-1 inline-block">{t("privacy")}</span></li>
              <li><span className="text-sm text-white/20 py-1 inline-block">{t("terms")}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
          <p className="text-[10px] text-white/20">{t("copyright")}</p>
          <div aria-hidden="true" className="hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
