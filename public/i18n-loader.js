;(() => {
  const LS = "lang"
  const PAGE = document.body.getAttribute("data-page") || "home"
  const VERSION = "13" // Increment this when translations change
  const hasDePrefix = (p) => /^\/de(\/|$)/.test(p)
  const localizedRoutes = new Set([]) // add "/de/..." paths only if they really exist

  // --- fetch helpers
  async function j(path) {
    try {
      const cacheBuster = `v=${VERSION}&t=${Date.now()}`
      const url = path.includes("?") ? `${path}&${cacheBuster}` : `${path}?${cacheBuster}`
      const r = await fetch(url, { cache: "no-store" })
      return r.ok ? r.json() : {}
    } catch {
      return {}
    }
  }
  async function load(lang) {
    const common = await j(`/locales/${lang}/common.json`)
    const page = await j(`/locales/${lang}/${PAGE}.json`)
    return { ...common, ...page }
  }
  async function getDict(lang) {
    const d = await load(lang)
    if (lang === "de") {
      const en = await load("en")
      for (const k in en) if (!(k in d)) d[k] = en[k] // EN fallback
    }
    return d
  }

  // --- apply to a subtree
  function applyDictTo(node, dict) {
    node.querySelectorAll("[data-i18n-key]").forEach((el) => {
      const key = el.getAttribute("data-i18n-key")
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key]
      }
    })
  }

  // --- URL handling (no navigation)
  function replaceUrl(lang) {
    const url = new URL(location.href)
    const base = hasDePrefix(url.pathname) ? url.pathname.replace(/^\/de(\/?)/, "/") : url.pathname
    if (lang === "de") {
      const dePath = base === "/" ? "/de" : "/de" + base
      if (localizedRoutes.has(dePath)) {
        url.pathname = dePath
        url.searchParams.delete("lang")
      } else {
        url.pathname = base
        url.searchParams.set("lang", "de")
      }
    } else {
      url.pathname = base
      url.searchParams.delete("lang")
    }
    history.replaceState(null, "", url.toString())
  }

  // --- main setter (exposed for reuse)
  async function setLang(lang) {
    localStorage.setItem(LS, lang)
    document.documentElement.lang = lang
    replaceUrl(lang)
    const dict = await getDict(lang)
    applyDictTo(document, dict)
    // badge
    const badge = document.querySelector("[data-lang-badge]")
    if (badge) badge.textContent = lang.toUpperCase()
    // DEV audit: append ?i18nDebug=1 to see missing keys
    if (new URL(location.href).searchParams.get("i18nDebug") === "1") {
      const needed = Array.from(document.querySelectorAll("[data-i18n-key]")).map((el) =>
        el.getAttribute("data-i18n-key"),
      )
      const missing = needed.filter((k) => !(k in dict))
      if (missing.length) console.warn(`[i18n] Missing keys (${lang}, ${PAGE}):`, missing)
    }
  }
  window.__setLang = setLang // optional global for debugging

  // --- react to late-loaded DOM (modals, footers)
  const mo = new MutationObserver(async (muts) => {
    const lang = localStorage.getItem(LS) || "en"
    const dict = await getDict(lang)
    muts.forEach((m) =>
      m.addedNodes.forEach((n) => {
        if (n.nodeType === 1) applyDictTo(n, dict)
      }),
    )
  })
  mo.observe(document.body, { childList: true, subtree: true })

  // --- hook toggle + back/forward
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]")
    if (!b) return
    e.preventDefault()
    setLang(b.getAttribute("data-lang"))
  })
  window.addEventListener("popstate", () => {
    const urlLang = new URL(location.href).searchParams.get("lang")
    setLang(urlLang || "en")
  })

  // --- initial language
  const urlLang = new URL(location.href).searchParams.get("lang")
  const initial =
    urlLang ||
    (hasDePrefix(location.pathname) ? "de" : localStorage.getItem(LS)) ||
    (navigator.language && navigator.language.startsWith("de") ? "de" : "en")
  setLang(initial)
})()
