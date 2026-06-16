"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"
import { FormattedText } from "@/lib/i18n/formatted-text"

export default function FrameworkPage() {
  const { t } = useI18n()

  return (
    <main aria-label="The Method">

      {/* HERO -- big image, short intro */}
      <section aria-labelledby="method-heading" className="mx-auto max-w-3xl px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <h1 id="method-heading" className="font-sans text-3xl md:text-4xl text-foreground leading-tight text-balance">
          {t("s1.heading")}
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {t("s1.body")}
        </p>
      </section>

      {/* STEP 1 -- Listen */}
      <section aria-labelledby="step1-heading" className="bg-secondary py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/fw-listen.jpg"
                alt="A researcher listening to an older man explain his experience with a phone app"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <span className="text-4xl font-sans text-primary" aria-hidden="true">1</span>
            <h2 id="step1-heading" className="mt-1 font-sans text-xl md:text-2xl text-foreground">
              {t("step1.heading")}
            </h2>
            <FormattedText text={t("step1.body")} className="mt-3" />
          </div>
        </div>
      </section>

      {/* STEP 2 -- Name the problem */}
      <section aria-labelledby="step2-heading" className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/fw-diagnose.jpg"
                alt="A woman mapping a problem on a whiteboard with sticky notes"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <span className="text-4xl font-sans text-primary" aria-hidden="true">2</span>
            <h2 id="step2-heading" className="mt-1 font-sans text-xl md:text-2xl text-foreground">
              {t("step2.heading")}
            </h2>
            <FormattedText text={t("step2.body")} className="mt-3" />
          </div>
        </div>
      </section>

      {/* STEP 3 -- Build the fix */}
      <section aria-labelledby="step3-heading" className="bg-secondary py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/fw-build.jpg"
                alt="A team reviewing a simple one-page guide together at a table"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <span className="text-4xl font-sans text-primary" aria-hidden="true">3</span>
            <h2 id="step3-heading" className="mt-1 font-sans text-xl md:text-2xl text-foreground">
              {t("step3.heading")}
            </h2>
            <FormattedText text={t("step3.body")} className="mt-3" />
          </div>
        </div>
      </section>

      {/* NOT A CHECKLIST -- image + short comparison */}
      <section aria-labelledby="compare-heading" className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/fw-compare.jpg"
                alt="A hand ticking items off a simple checklist on a desk next to a laptop showing an AI dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 id="compare-heading" className="font-sans text-xl md:text-2xl text-foreground">
              {t("compare.heading")}
            </h2>
            <FormattedText text={t("compare.body")} className="mt-3" />
          </div>
        </div>
      </section>

      {/* EXAMPLE FRAMEWORK -- visual decision tool */}
      <section aria-labelledby="sample-heading" className="bg-secondary py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/fw-example.jpg"
                  alt="A simple flowchart decision tree pinned to an office board with colour-coded yes and no paths"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 id="sample-heading" className="font-sans text-xl md:text-2xl text-foreground">
                {t("sample.heading")}
              </h2>
              {t("sample.body") ? (
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {t("sample.body")}
                </p>
              ) : null}
            </div>
          </div>

          {/* Visual decision cards */}
          <div className="mt-10 space-y-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="flex items-start gap-4 rounded-lg border border-border bg-background p-4"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center" aria-hidden="true">
                  {n}
                </span>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {t(`sample.q${n}`)}
                  </p>
                  <p className="mt-1 text-muted-foreground text-sm">
                    {t(`sample.a${n}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground italic">
            {t("sample.note")}
          </p>
        </div>
      </section>

      {/* TRUSTBRIDGE EXAMPLE -- image + short explanation */}
      <section aria-labelledby="example-heading" className="bg-card py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case-banking-cSiDxbV7rAQWjwEOyZJbihsZ2eywd8.jpg"
                alt="An older woman testing an AI banking app while a researcher takes notes"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 id="example-heading" className="font-sans text-xl md:text-2xl text-foreground">
              {t("example.heading")}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {t("example.body")}
            </p>
            <a
              href="https://trustbridge.design"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-primary font-medium hover:underline"
            >
              {t("example.link")}
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* TRUST AUDIT EXAMPLE -- matching card */}
      <section aria-labelledby="audit-heading" className="bg-card border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/fw-compare.jpg"
                alt="A hand completing a simple AI audit checklist on a desk"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 id="audit-heading" className="font-sans text-xl md:text-2xl text-foreground">
              {t("audit.heading")}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {t("audit.body")}
            </p>
            <a
              href="https://www.trustaudit.tools/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-primary font-medium hover:underline"
            >
              {t("audit.link")}
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="method-cta-heading" className="bg-secondary py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 id="method-cta-heading" className="font-sans text-2xl md:text-3xl text-primary">
            {t("cta.heading")}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            {t("cta.body")}
          </p>
          <div className="mt-8">
            <a
              href="mailto:info@jennifersimonds.com?subject=Trust+by+Design+Method"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium min-h-[44px]"
            >
              {t("cta.button")}
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{t("cta.note")}</p>
        </div>
      </section>

    </main>
  )
}
