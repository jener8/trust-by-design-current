"use client"

import { useI18n } from "@/lib/i18n/context"

export default function ResearchPage() {
  const { t } = useI18n()

  return (
    <main aria-label="Research">
      <section aria-labelledby="research-heading" className="mx-auto max-w-3xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <h1 id="research-heading" className="font-sans text-3xl md:text-4xl text-foreground leading-tight text-balance">
          {t("hero.heading")}
        </h1>
        <p className="mt-6 text-base text-muted-foreground max-w-2xl leading-relaxed">
          {t("hero.subheading")}
        </p>
      </section>

      <section aria-labelledby="areas-heading" className="bg-secondary py-14 md:py-18">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="areas-heading" className="font-sans text-2xl md:text-3xl text-foreground">{t("areas.heading")}</h2>
          <div className="mt-10 space-y-4">
            {["bias", "explainability", "inclusion", "governance"].map((key) => (
              <div key={key} className="border border-border bg-background rounded-md p-5">
                <h3 className="font-semibold text-foreground">{t(`areas.${key}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(`areas.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="open-heading" className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 id="open-heading" className="font-sans text-2xl md:text-3xl text-foreground">{t("open.heading")}</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">{t("open.body")}</p>
        <a
          href="https://trustbridge.design"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm text-primary font-medium underline hover:text-primary/80 transition-colors min-h-[44px]"
        >
          {t("open.link")}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </section>

      <section aria-labelledby="research-cta-heading" className="bg-secondary py-14 md:py-18">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 id="research-cta-heading" className="font-sans text-2xl md:text-3xl text-primary">{t("cta.heading")}</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">{t("cta.body")}</p>
          <a
            href="mailto:info@jennifersimonds.com?subject=Research+Collaboration"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors min-h-[44px]"
          >
            {t("cta.button")}
          </a>
        </div>
      </section>
    </main>
  )
}
