"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()
  const previousPathname = useRef<string | null>(null)

  useEffect(() => {
    // Enable browser's native scroll restoration
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
  }, [])

  useEffect(() => {
    // Check if this is the first render or a forward navigation
    if (previousPathname.current === null) {
      // First render - scroll to top
      window.scrollTo(0, 0)
    } else if (previousPathname.current !== pathname) {
      // Navigation occurred - use a small delay to allow browser scroll restoration
      const timeoutId = setTimeout(() => {
        // Only scroll to top if we're not at the top already (browser didn't restore)
        // This allows back/forward to work naturally while scrolling to top on new pages
        if (window.scrollY === 0) {
          // Already at top, likely a new page navigation
          return
        }
        // Check if browser is handling scroll restoration
        const isBackForward = window.performance?.navigation?.type === 2
        if (!isBackForward) {
          window.scrollTo(0, 0)
        }
      }, 0)

      previousPathname.current = pathname

      return () => clearTimeout(timeoutId)
    }

    previousPathname.current = pathname
  }, [pathname])

  return null
}
