"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useMemo } from "react"
import { usePathname } from "next/navigation"
import {
  commonBundles,
  getPageFromPath,
  translationBundles,
  type Language,
} from "@/lib/i18n/bundles"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, fallback?: string) => string
  isLoading: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const localizedRoutes = new Set<string>([])

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const pathname = usePathname()
  const page = getPageFromPath(pathname)

  const dictionaries = useMemo(() => {
    const enDict = { ...commonBundles.en, ...translationBundles.en[page] }
    const deDict = { ...commonBundles.de, ...translationBundles.de[page] }
    return { en: enDict, de: deDict }
  }, [page])

  useEffect(() => {
    if (typeof window === "undefined") return

    const url = new URL(window.location.href)
    const queryLang = url.searchParams.get("lang") as Language | null
    const prefixLang = pathname.startsWith("/de") ? "de" : null
    const storedLang = localStorage.getItem("lang") as Language | null
    const initialLang = queryLang || prefixLang || storedLang || "en"

    setLanguageState(initialLang)
    document.documentElement.lang = initialLang
  }, [pathname])

  const setLanguage = (lang: Language) => {
    if (typeof window === "undefined") return

    setLanguageState(lang)
    localStorage.setItem("lang", lang)
    document.documentElement.lang = lang

    const url = new URL(window.location.href)
    const hasDePrefix = /^\/de(\/|$)/.test(url.pathname)
    const basePath = hasDePrefix ? url.pathname.replace(/^\/de(\/?)/, "/") : url.pathname

    if (lang === "de") {
      const dePath = basePath === "/" ? "/de" : "/de" + basePath

      if (localizedRoutes.has(dePath)) {
        url.pathname = dePath
        url.searchParams.delete("lang")
      } else {
        url.pathname = basePath
        url.searchParams.set("lang", "de")
      }
    } else {
      url.pathname = basePath
      url.searchParams.delete("lang")
    }

    window.history.replaceState(null, "", url.toString())
  }

  const t = (key: string, fallback?: string): string => {
    const currentDict = language === "de" ? dictionaries.de : dictionaries.en
    const enDict = dictionaries.en

    if (key in currentDict && currentDict[key]) {
      return currentDict[key]
    }

    if (key in enDict && enDict[key]) {
      return enDict[key]
    }

    if (fallback !== undefined) {
      return fallback
    }

    if (process.env.NODE_ENV !== "production") {
      console.warn(`[i18n] Missing key "${key}" on page "${page}" for lang "${language}"`)
    }

    return key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, isLoading: false }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}
