"use client"

import Link from "next/link"
import { Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function Footer() {
  const { language, setLanguage, t } = useI18n()

  return (
    <footer className="bg-[#0F1B2D] text-slate-400" role="contentinfo">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#F5A623] text-[#0F1B2D] text-xs font-bold" aria-hidden="true">
                TD
              </span>
              <span className="text-sm font-semibold text-white">Trust by Design</span>
            </div>
            <p className="mt-3 text-sm text-slate-500 max-w-xs">{t("footer.tagline")}</p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  {t("nav.aboutMe")}
                </Link>
              </li>
              <li>
                <Link href="/framework" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  {t("nav.theMethod")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Language toggle */}
          <div>
            <button
              onClick={() => setLanguage(language === "en" ? "de" : "en")}
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors min-h-[44px]"
              aria-label={`Switch language to ${language === "en" ? "German" : "English"}`}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span>{language === "en" ? "DE" : "EN"}</span>
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-slate-500">
          <p>{t("footer.copyright")}</p>
          <Link href="/legal/imprint" className="hover:text-slate-300 transition-colors min-h-[44px] inline-flex items-center">
            {t("footer.imprint")}
          </Link>
        </div>
      </div>
    </footer>
  )
}
