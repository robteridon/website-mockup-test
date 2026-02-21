"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "https://www.idinsight.org/about/" },
  { label: "Capabilities", href: "https://www.idinsight.org/services/" },
  { label: "Our Work", href: "https://www.idinsight.org/our-work/" },
  { label: "Insights", href: "https://www.idinsight.org/ideas-and-insights/" },
  { label: "News", href: "https://www.idinsight.org/about/news/" },
];

export default function AnthropicHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory-light">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a
            href="https://www.idinsight.org/"
            className="flex-shrink-0"
            title="Go to homepage"
          >
            <img
              src="/website-mockup-test/idinsight-logo.png"
              alt="IDinsight"
              className="h-4 lg:h-[1.65rem] w-auto mix-blend-multiply"
            />
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] text-slate-dark hover:text-slate-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.idinsight.org/give/"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-dark text-ivory-light text-sm font-medium hover:bg-slate-medium transition-colors"
            >
              Donate
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-slate-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-ivory-light border-t border-cloud-light/40">
          <nav className="px-5 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-3 text-[15px] text-slate-dark"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-cloud-light/40">
              <a
                href="https://www.idinsight.org/give/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-dark text-ivory-light text-sm font-medium"
              >
                Donate
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
