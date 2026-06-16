"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"

type Language = "en" | "de"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, fallback?: string) => string
  isLoading: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translationsCache: Record<string, Record<string, string>> = {}

async function loadTranslations(lang: Language, page: string): Promise<Record<string, string>> {
  const cacheKey = `${lang}-${page}`
  if (translationsCache[cacheKey]) {
    return translationsCache[cacheKey]
  }

  try {
    const version = 24
    const timestamp = Date.now()
    const response = await fetch(`/locales/${lang}/${page}.json?v=${version}&t=${timestamp}`, {
      cache: "no-store",
    })

    if (response.ok) {
      const data = await response.json()
      translationsCache[cacheKey] = data
      return data
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[i18n] Failed to load ${lang}/${page}.json:`, error)
    }
  }

  return {}
}

// Add routes here as you create /de pages, e.g. ["/de/", "/de/platform", "/de/concept"]
const localizedRoutes = new Set<string>([])

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isLoading, setIsLoading] = useState(true)
  const [enCommon, setEnCommon] = useState<Record<string, string>>({})
  const [deCommon, setDeCommon] = useState<Record<string, string>>({})
  const [enPage, setEnPage] = useState<Record<string, string>>({})
  const [dePage, setDePage] = useState<Record<string, string>>({})
  const pathname = usePathname()

  const getCurrentPage = (): string => {
    if (pathname === "/" || pathname === "/de") return "home"
    const cleanPath = pathname.replace(/^\/de/, "").replace(/^\//, "")
    const page = cleanPath.split("/")[0] || "home"
    return page
  }

  // Initialize language from URL query param, /de prefix, or localStorage
  useEffect(() => {
    if (typeof window === "undefined") return

    const url = new URL(window.location.href)
    const queryLang = url.searchParams.get("lang") as Language | null
    const prefixLang = pathname.startsWith("/de") ? "de" : null
    const storedLang = localStorage.getItem("lang") as Language | null
    const initialLang = queryLang || prefixLang || storedLang || "en"

    setLanguageState(initialLang)
    document.documentElement.lang = initialLang

    const page = getCurrentPage()
    Promise.all([
      loadTranslations("en", "common"),
      loadTranslations("de", "common"),
      loadTranslations("en", page),
      loadTranslations("de", page),
    ]).then(([enC, deC, enP, deP]) => {
      setEnCommon(enC)
      setDeCommon(deC)
      setEnPage(enP)
      setDePage(deP)
      setIsLoading(false)
    })
  }, [pathname])

  const setLanguage = (lang: Language) => {
    if (typeof window === "undefined") return

    setLanguageState(lang)
    localStorage.setItem("lang", lang)
    document.documentElement.lang = lang

    // Build target URL without causing 404s
    const url = new URL(window.location.href)
    const hasDePrefix = /^\/de(\/|$)/.test(url.pathname)
    const basePath = hasDePrefix ? url.pathname.replace(/^\/de(\/?)/, "/") : url.pathname

    if (lang === "de") {
      // Check if a /de version of this route exists
      const dePath = basePath === "/" ? "/de" : "/de" + basePath

      if (localizedRoutes.has(dePath)) {
        // Use /de path if it exists
        url.pathname = dePath
        url.searchParams.delete("lang")
      } else {
        // Stay on current page, use query parameter
        url.pathname = basePath
        url.searchParams.set("lang", "de")
      }
    } else {
      // English: remove /de prefix and lang param
      url.pathname = basePath
      url.searchParams.delete("lang")
    }

    // Update URL without navigation (no page reload, no 404)
    window.history.replaceState(null, "", url.toString())
  }

  const t = (key: string, fallback?: string): string => {
    const page = getCurrentPage()

    // Merge common + page translations for current language
    const currentDict = language === "de" ? { ...deCommon, ...dePage } : { ...enCommon, ...enPage }

    // Merge EN common + page as fallback
    const enDict = { ...enCommon, ...enPage }

    // Try current language first
    if (key in currentDict && currentDict[key]) {
      return currentDict[key]
    }

    // Fall back to English
    if (key in enDict && enDict[key]) {
      return enDict[key]
    }

    // Use provided fallback
    if (fallback !== undefined) {
      return fallback
    }

    // Log warning in development
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[i18n] Missing key "${key}" on page "${page}" for lang "${language}"`)
    }

    return key
  }

  return <I18nContext.Provider value={{ language, setLanguage, t, isLoading }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}
