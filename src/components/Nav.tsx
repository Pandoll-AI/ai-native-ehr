"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 100 || y < lastScrollY.current);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleLocale() {
    const next = locale === "en" ? "ko" : "en";
    router.push(pathname.replace(new RegExp(`^/${locale}`), `/${next}`));
  }

  const links = [
    { href: "#features", label: t("features") },
    { href: "#how-it-works", label: t("howItWorks") },
    { href: "#roadmap", label: t("roadmap") },
  ];

  return (
    <div
      className={`fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20 pointer-events-none"
      }`}
    >
      <div className="max-w-[700px] mx-auto flex items-center gap-2">
        {/* Main navbar */}
        <nav className="glass rounded-full px-2 py-1.5 flex-1 flex items-center justify-between">
          <a href={`/${locale}`} className="text-sm font-semibold tracking-tight text-white px-4">
            AI Native EHR
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#early-access"
              className="ml-1 bg-white text-zinc-900 text-[11px] font-bold uppercase tracking-[0.1em] rounded-full pl-5 pr-2 py-2 flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              {t("earlyAccess")}
              <span className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center">
                <svg aria-hidden="true" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-white"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </nav>

        {/* Globe language toggle — sits NEXT to nav, never overlaps */}
        <button
          onClick={toggleLocale}
          aria-label={locale === "en" ? "Switch to Korean" : "Switch to English"}
          className="shrink-0 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
        >
          <svg aria-hidden="true" className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.6 9h16.8M3.6 15h16.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="max-w-[700px] mx-auto mt-2">
          <div id="mobile-nav" className="glass rounded-3xl px-6 py-5 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white py-2">
                {l.label}
              </a>
            ))}
            <a href="#early-access" onClick={() => setOpen(false)} className="mt-2 bg-white text-zinc-900 text-[11px] font-bold uppercase tracking-[0.1em] rounded-full py-3 text-center">
              {t("earlyAccess")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
