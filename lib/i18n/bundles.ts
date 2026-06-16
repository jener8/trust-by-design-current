import enCommon from "@/public/locales/en/common.json"
import deCommon from "@/public/locales/de/common.json"
import enHome from "@/public/locales/en/home.json"
import deHome from "@/public/locales/de/home.json"
import enFramework from "@/public/locales/en/framework.json"
import deFramework from "@/public/locales/de/framework.json"
import enAbout from "@/public/locales/en/about.json"
import deAbout from "@/public/locales/de/about.json"
import enContact from "@/public/locales/en/contact.json"
import deContact from "@/public/locales/de/contact.json"
import enResearch from "@/public/locales/en/research.json"
import deResearch from "@/public/locales/de/research.json"
import enEvidence from "@/public/locales/en/evidence.json"
import deEvidence from "@/public/locales/de/evidence.json"

export type Language = "en" | "de"
export type PageName =
  | "common"
  | "home"
  | "framework"
  | "about"
  | "contact"
  | "research"
  | "evidence"

export const translationBundles: Record<
  Language,
  Record<Exclude<PageName, "common">, Record<string, string>>
> = {
  en: {
    home: enHome,
    framework: enFramework,
    about: enAbout,
    contact: enContact,
    research: enResearch,
    evidence: enEvidence,
  },
  de: {
    home: deHome,
    framework: deFramework,
    about: deAbout,
    contact: deContact,
    research: deResearch,
    evidence: deEvidence,
  },
}

export const commonBundles: Record<Language, Record<string, string>> = {
  en: enCommon,
  de: deCommon,
}

export function getPageFromPath(pathname: string): Exclude<PageName, "common"> {
  if (pathname === "/" || pathname === "/de") return "home"
  const cleanPath = pathname.replace(/^\/de/, "").replace(/^\//, "")
  const page = cleanPath.split("/")[0] || "home"
  const validPages: Exclude<PageName, "common">[] = [
    "home",
    "framework",
    "about",
    "contact",
    "research",
    "evidence",
  ]
  return validPages.includes(page as Exclude<PageName, "common">)
    ? (page as Exclude<PageName, "common">)
    : "home"
}
