"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

export default function EvidencePage() {
  const { t } = useI18n()

  const caseStudies = [
    {
      titleKey: "cases.card1.title",
      descKey: "cases.card1.desc",
      linkKey: "cases.card1.link",
      href: "https://trustbridge.design/case-studies/banking",
      image: "/images/case-seniors.jpg",
      alt: "Mixed-age pair looking at a digital screen together",
    },
    {
      titleKey: "cases.card2.title",
      descKey: "cases.card2.desc",
      linkKey: "cases.card2.link",
      href: "https://trustbridge.design/case-studies/education",
      image: "/images/case-education.jpg",
      alt: "Diverse students working together in a classroom",
    },
    {
      titleKey: "cases.card3.title",
      descKey: "cases.card3.desc",
      linkKey: "cases.card3.link",
      href: "https://trustbridge.design/case-studies/health-dialogue",
      image: "/images/case-health.jpg",
      alt: "Diverse group in a healthcare consultation setting",
    },
  ]

  return (
    <main aria-label="Evidence">
      <section aria-labelledby="evidence-heading" className="mx-auto max-w-3xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <h1 id="evidence-heading" className="font-sans text-3xl md:text-4xl text-foreground leading-tight text-balance">
          {t("hero.heading")}
        </h1>
        <p className="mt-6 text-base text-muted-foreground max-w-2xl leading-relaxed">
          {t("hero.subheading")}
        </p>
      </section>

      <section aria-labelledby="cases-heading" className="bg-secondary py-14 md:py-18">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="cases-heading" className="font-sans text-2xl md:text-3xl text-foreground">{t("cases.heading")}</h2>
          <div className="mt-10 space-y-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="relative w-full sm:w-40 aspect-[3/2] sm:aspect-square rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={study.image}
                    alt={study.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{t(study.titleKey)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(study.descKey)}</p>
                  <a
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-sm text-primary font-medium underline hover:text-primary/80 transition-colors min-h-[44px]"
                  >
                    {t(study.linkKey)}
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="reframe-section-heading" className="mx-auto max-w-3xl px-6 py-14 md:py-18">
        <h2 id="reframe-section-heading" className="sr-only">Why this matters</h2>
        <blockquote>
          <p className="font-sans text-xl md:text-2xl italic text-foreground leading-snug text-balance">
            {t("reframe.quote")}
          </p>
        </blockquote>
        <p className="mt-6 text-muted-foreground leading-relaxed">{t("reframe.body")}</p>
      </section>

      <section aria-labelledby="method-heading" className="bg-secondary py-14 md:py-18">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="method-heading" className="font-sans text-2xl md:text-3xl text-foreground">{t("method.heading")}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t("method.body")}</p>
        </div>
      </section>

      <section aria-labelledby="evidence-cta-heading" className="py-14 md:py-18">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 id="evidence-cta-heading" className="font-sans text-2xl md:text-3xl text-primary">{t("cta.heading")}</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">{t("cta.body")}</p>
          <a
            href="mailto:info@jennifersimonds.com?subject=Evidence+Discussion"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors min-h-[44px]"
          >
            {t("cta.button")}
          </a>
        </div>
      </section>
    </main>
  )
}
