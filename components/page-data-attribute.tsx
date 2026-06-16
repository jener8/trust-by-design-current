"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

const PAGE_MAP: Record<string, string> = {
  "/": "home",
  "/framework": "framework",
  "/evidence": "evidence",
  "/research": "research",
  "/about": "about",
  "/contact": "contact",
  "/legal/imprint": "legal",
}

export function PageDataAttribute() {
  const pathname = usePathname()

  useEffect(() => {
    const pageId = PAGE_MAP[pathname] || "home"
    document.body.setAttribute("data-page", pageId)
  }, [pathname])

  return null
}
