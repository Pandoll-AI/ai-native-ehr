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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Brand with flanking bars */}
        <a href={`/${currentLocale}`} className="flex items-center gap-3">
          <span aria-hidden="true" className="w-6 h-px bg-foreground" />
          <span className="font-serif text-xl tracking-tight uppercase">AI Native EMR</span>
          <span aria-hidden="true" className="w-6 h-px bg-foreground" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted hover:text-foreground transition-colors duration-700"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            aria-label={currentLocale === "en" ? "Switch to Korean" : "Switch to English"}
            className="font-mono text-[10px] uppercase tracking-[0.25em] px-4 py-3 min-w-[44px] min-h-[44px] flex items-center justify-center border border-border hover:bg-foreground/5 transition-all duration-700"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {currentLocale === "en" ? "한국어" : "EN"}
          </button>

          <a
            href="#early-access"
            className="cta-overlay hidden md:inline-flex font-mono text-[10px] uppercase tracking-[0.25em] px-6 py-3 bg-accent text-white transition-all duration-700 hover:tracking-[0.4em]"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
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
            className="cta-overlay font-mono text-[10px] uppercase tracking-[0.25em] px-6 py-3 bg-accent text-white text-center mt-2 hover:tracking-[0.4em] transition-all duration-700"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {t("earlyAccess")}
          </a>
        </div>
      )}
    </nav>
  );
}
