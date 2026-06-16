"use client"

import { useI18n } from "@/lib/i18n/context"

export default function ContactPage() {
  const { t } = useI18n()

  return (
    <main aria-label="Contact">
      <section aria-labelledby="contact-heading" className="mx-auto max-w-3xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <h1 id="contact-heading" className="font-sans text-3xl md:text-4xl text-foreground leading-tight text-balance">
          {t("hero.heading")}
        </h1>
        <p className="mt-6 text-base text-muted-foreground max-w-2xl leading-relaxed">
          {t("hero.subheading")}
        </p>
      </section>

      <section aria-labelledby="intro-heading" className="mx-auto max-w-3xl px-6 pb-12 md:pb-16">
        <h2 id="intro-heading" className="font-sans text-2xl text-foreground">
          {t("intro.heading")}
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {t("intro.body")}
        </p>
      </section>

      <section aria-labelledby="email-heading" className="bg-secondary py-14 md:py-18">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="email-heading" className="font-sans text-2xl text-foreground">{t("email.heading")}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t("email.body")}</p>
          <a
            href="mailto:info@jennifersimonds.com?subject=Trust+by+Design+Enquiry"
            className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors min-h-[44px]"
          >
            {t("email.cta")}
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            {t("email.direct")}{" "}
            <a href="mailto:info@jennifersimonds.com" className="text-foreground underline hover:text-primary transition-colors">
              info@jennifersimonds.com
            </a>
          </p>
        </div>
      </section>

      <section aria-labelledby="linkedin-heading" className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 id="linkedin-heading" className="font-sans text-2xl text-foreground">{t("linkedin.heading")}</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">{t("linkedin.body")}</p>
        <a
          href="https://www.linkedin.com/in/simondsjennifer/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm text-primary font-medium underline hover:text-primary/80 transition-colors min-h-[44px]"
        >
          {t("linkedin.link")}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </section>
    </main>
  )
}
