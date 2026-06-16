"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const navLinks = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.aboutMe" },
  { href: "/framework", key: "nav.theMethod" },
  { href: "/contact", key: "nav.contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useI18n()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en")
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <nav className="mx-auto max-w-5xl px-6 py-3" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 min-h-[44px] min-w-[44px]"
            aria-label="Trust by Design - Home"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#0F1B2D] text-[#F5A623] text-xs font-bold" aria-hidden="true">
              TD
            </span>
            <span className="hidden sm:inline text-sm font-semibold text-foreground">
              Trust by Design
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-sm min-h-[44px] flex items-center transition-colors ${
                  pathname === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] justify-center"
              aria-label={`Switch language to ${language === "en" ? "German" : "English"}`}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span>{language === "en" ? "DE" : "EN"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 border-t border-border pt-4" role="navigation" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`block py-3 text-base min-h-[44px] flex items-center ${
                      pathname === link.href
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Language */}
            <div className="border-t border-border pt-4 mt-4">
              <button
                onClick={() => {
                  toggleLanguage()
                  setMobileMenuOpen(false)
                }}
                className="w-full py-3 px-4 rounded-md text-sm font-medium bg-secondary text-foreground min-h-[44px] text-left"
                aria-label={`Switch language to ${language === "en" ? "German" : "English"}`}
              >
                {language === "en" ? "Auf Deutsch wechseln" : "Switch to English"}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
