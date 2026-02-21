"use client";

import { useState } from "react";

const mainMenuItems = [
  {
    label: "About us",
    href: "https://www.idinsight.org/about/",
    children: [
      { label: "Our people", href: "https://www.idinsight.org/about/our-people/" },
      { label: "Careers", href: "https://www.idinsight.org/about/careers/" },
      { label: "News", href: "https://www.idinsight.org/about/news/" },
      { label: "Impact", href: "https://www.idinsight.org/about/impact/" },
      { label: "Partners and Clients", href: "https://www.idinsight.org/our-work/partners/" },
      { label: "Our new strategy", href: "https://site.idinsight.org/strategy-refresh-2025" },
    ],
  },
  {
    label: "Capabilities",
    href: "https://www.idinsight.org/services/",
    children: [
      { label: "Impact evaluations", href: "https://www.idinsight.org/methodology/decision-focused-impact-evaluations/" },
      { label: "Data science and engineering", href: "https://www.idinsight.org/methodology/data-science/" },
      { label: "Quick turnaround surveys", href: "https://www.idinsight.org/methodology/quick-turnaround-surveys/" },
      { label: "Process evaluation", href: "https://www.idinsight.org/methodology/process-evaluation/" },
      { label: "Monitoring systems", href: "https://www.idinsight.org/methodology/monitoring-systems/" },
      { label: "Our Customized Services", href: "https://www.idinsight.org/services/" },
      { label: "DataDelta", href: "https://www.idinsight.org/services/datadelta/" },
      { label: "Upholding Dignity", href: "https://www.idinsight.org/services/upholding-dignity/" },
    ],
  },
  {
    label: "Our work",
    href: "https://www.idinsight.org/our-work/",
    children: [
      { label: "Agriculture", href: "https://www.idinsight.org/our-work/sectors/agriculture/" },
      { label: "Education and training", href: "https://www.idinsight.org/our-work/sectors/education-and-training/" },
      { label: "Environment and energy", href: "https://www.idinsight.org/our-work/sectors/environment-and-energy/" },
      { label: "Health and nutrition", href: "https://www.idinsight.org/our-work/sectors/health-and-nutrition/" },
      { label: "Featured Projects", href: "https://www.idinsight.org/our-work/projects/" },
    ],
  },
  {
    label: "Tools",
    href: "https://www.idinsight.org/ideas-and-insights/tools/",
    children: [
      { label: "Impact Measurement Guide", href: "https://guide.idinsight.org/" },
      { label: "M&E Health Check", href: "https://healthcheck.idinsight.org/" },
      { label: "Dignity Self-Assessment Tool", href: "https://dignitycheck.idinsight.org/" },
    ],
  },
  {
    label: "Where we work",
    href: "https://www.idinsight.org/where-we-work/",
    children: [
      { label: "West and North Africa", href: "https://www.idinsight.org/where-we-work/regions/northern-africa/" },
      { label: "East Africa", href: "https://www.idinsight.org/where-we-work/regions/eastern-africa/" },
      { label: "Southern Africa", href: "https://www.idinsight.org/where-we-work/regions/southern-africa/" },
      { label: "Southeast Asia", href: "https://www.idinsight.org/where-we-work/regions/southeast-asia/" },
      { label: "South Asia", href: "https://www.idinsight.org/where-we-work/regions/south-asia/" },
    ],
  },
  {
    label: "Insights",
    href: "https://www.idinsight.org/ideas-and-insights/",
    children: [
      { label: "IDeas Blog", href: "https://www.idinsight.org/ideas-and-insights/blog/" },
      { label: "Publications", href: "https://www.idinsight.org/ideas-and-insights/publications-2/" },
    ],
  },
  {
    label: "Year in Review",
    href: "/website-mockup-test/year-in-review",
    children: [],
  },
];

const topLinks = [
  { label: "2025 Year in Review", href: "/website-mockup-test/year-in-review" },
  { label: "IDeas Blog", href: "https://www.idinsight.org/ideas-and-insights/blog/" },
  { label: "Careers", href: "https://www.idinsight.org/about/careers/" },
];

function IDinsightLogo({ className = "", fill = "#1c2f62" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 280 50" className={className} aria-label="IDinsight" role="img">
      <text
        x="0"
        y="38"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="38"
        letterSpacing="-0.5"
        fill={fill}
      >
        IDinsight
      </text>
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with secondary links */}
      <div className="hidden lg:block border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-5 h-9">
            {topLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-gray-500 hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.idinsight.org/give/"
              className="text-xs font-semibold text-gold hover:text-gold-light transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="https://www.idinsight.org/" className="flex-shrink-0" title="Go to homepage">
            <IDinsightLogo className="h-12 w-auto lg:h-16" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {mainMenuItems.map((item, idx) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
                {item.children && openDropdown === idx && (
                  <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl border border-gray-100 py-3 min-w-[240px] z-50">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop donate button */}
          <div className="hidden lg:block">
            <a
              href="https://www.idinsight.org/give/"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
            >
              Donate
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-4 space-y-1">
            {mainMenuItems.map((item, idx) => (
              <div key={item.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-navy"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${openDropdown === idx ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === idx && item.children && (
                  <div className="pl-6 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-gray-600 hover:text-navy"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-gray-100 pt-4 mt-4 space-y-2">
              {topLinks.map((link) => (
                <a key={link.label} href={link.href} className="block px-3 py-2 text-sm text-gray-600">
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.idinsight.org/give/"
                className="block w-full text-center px-5 py-3 rounded-full bg-navy text-white font-semibold mt-3"
              >
                Donate
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
