"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const t = useTranslations("Nav");
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleLocale() {
    const newLocale = currentLocale === "en" ? "ko" : "en";
    const pathWithoutLocale = pathname.replace(new RegExp(`^/${currentLocale}`), "");
    router.push(`/${newLocale}${pathWithoutLocale || ""}`);
  }

  const links = [
    { href: "#features", label: t("features") },
    { href: "#how-it-works", label: t("howItWorks") },
    { href: "#roadmap", label: t("roadmap") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href={`/${currentLocale}`} className="text-lg font-semibold tracking-tight">
          AI Native EMR
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* A-3: descriptive aria-label, M-5: min 44px touch target */}
          <button
            onClick={toggleLocale}
            aria-label={currentLocale === "en" ? "Switch to Korean" : "Switch to English"}
            className="text-xs font-mono px-3 py-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center border border-border rounded hover:bg-foreground/5 transition-colors"
          >
            {currentLocale === "en" ? "한국어" : "EN"}
          </button>

          <a
            href="#early-access"
            className="hidden md:inline-flex text-sm font-medium px-4 py-2 bg-foreground text-background rounded hover:bg-foreground/90 active:bg-foreground/80 transition-colors"
          >
            {t("earlyAccess")}
          </a>

          {/* A-4: aria-expanded + aria-controls, M-6: 44px touch target */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-border bg-surface px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted hover:text-foreground py-2"
            >
              {link.label}
            </a>
          ))}
          {/* UX-6: active state on mobile CTA */}
          <a
            href="#early-access"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium px-4 py-2 bg-foreground text-background rounded text-center mt-2 hover:bg-foreground/90 active:bg-foreground/80 transition-colors"
          >
            {t("earlyAccess")}
          </a>
        </div>
      )}
    </nav>
  );
}
