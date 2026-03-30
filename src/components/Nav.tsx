"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const t = useTranslations("Nav");
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <a href={`/${currentLocale}`} className="font-serif text-xl tracking-tight">
          AI NATIVE EMR
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            aria-label={currentLocale === "en" ? "Switch to Korean" : "Switch to English"}
            className="font-mono text-[10px] uppercase tracking-[0.25em] px-4 py-3 min-w-[44px] min-h-[44px] flex items-center justify-center border border-border hover:bg-foreground/5 transition-colors"
          >
            {currentLocale === "en" ? "한국어" : "EN"}
          </button>

          <a
            href="#early-access"
            className="hidden md:inline-flex font-mono text-[10px] uppercase tracking-[0.25em] px-6 py-3 bg-accent text-white hover:bg-accent/90 active:bg-accent/80 transition-all hover:tracking-[0.4em]"
          >
            {t("earlyAccess")}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1">
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M2 6h16M2 10h16M2 14h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-border bg-background px-8 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted hover:text-foreground py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#early-access"
            onClick={() => setMobileOpen(false)}
            className="font-mono text-[10px] uppercase tracking-[0.25em] px-6 py-3 bg-accent text-white text-center mt-2 hover:bg-accent/90 active:bg-accent/80 transition-colors"
          >
            {t("earlyAccess")}
          </a>
        </div>
      )}
    </nav>
  );
}
