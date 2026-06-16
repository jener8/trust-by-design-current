// To add German translation: duplicate content object as contentDE, add language toggle to nav, swap content reference on toggle.
"use client"

import Image from "next/image"
import Link from "next/link"

const content = {
  banner: "EU AI Act enforcement begins August 2026 \u00B7 Is your organisation ready?",
  nav: { home: "Home", about: "About", method: "The Method", contact: "Contact" },
  hero: {
    headline: "Deploy High-Risk AI with Confidence.",
    sub: "We help regulated organisations in government, health, and finance build the human layer that makes AI systems trustworthy, compliant, and actually adopted.",
    cta1: "Book a Discovery Call",
    cta2: "See the Framework"
  },
  gap: {
    heading: "The gap no one is designing for",
    left: { heading: "Your AI system is technically ready.", body: "It\u2019s accurate. It\u2019s secure. It meets your compliance checklist. Your team built it well." },
    right: { heading: "But is it humanly trustworthy?", body: "If users can\u2019t understand its decisions, can\u2019t recover when it\u2019s wrong, and can\u2019t override it when they need to \u2014 it will fail in the field. That\u2019s not a technical problem. It\u2019s a design problem." },
    callout: "67% of users abandon AI systems they don\u2019t understand. 42% more helpdesk costs follow. We fix this before it happens."
  },
  services: {
    heading: "Three ways we work with you",
    s1: { title: "Trust Audit", body: "We assess your AI system against the four Trust Layer principles \u2014 explainability, recoverability, accessibility, and human control \u2014 and show you exactly where the gaps are.", link: "trustaudit.tools \u2192" },
    s2: { title: "Framework Implementation", body: "We design and build the Trust Layer into your existing AI systems and processes, working alongside your product, UX, and compliance teams." },
    s3: { title: "EU AI Act Readiness", body: "We map your high-risk AI obligations and build the human-centred compliance layer you need before August 2026." }
  },
  sectors: {
    heading: "We work with regulated industries deploying high-risk AI",
    gov: { title: "Government", body: "Federal agencies, ministries, and public institutions deploying AI in citizen-facing services." },
    health: { title: "Healthcare", body: "Hospitals, insurers, and health technology companies using AI for diagnosis, triage, or patient decisions." },
    finance: { title: "Finance", body: "Banks, insurers, and financial institutions using AI for credit, fraud, or eligibility decisions." }
  },
  credibility: {
    heading: "Built on research. Validated in practice.",
    body1: "The Trust by Design framework was developed through independent research across 14+ AI implementation teams in the German public sector, and validated through advisory sessions with process management leaders in regulated government institutions.",
    body2: "We don\u2019t consult from the outside. We\u2019ve built government AI systems from the inside.",
    strip: "Framework presented to 6+ German government communities \u00B7 Master\u2019s research, ELISAVA \u00B7 EU AI Act specialist"
  },
  tools: {
    heading: "Self-service tools if you\u2019re not ready to talk yet",
    t1: { title: "TrustAudit Tools", body: "Run your own Trust Layer assessment. Identify explainability, recovery, accessibility, and control gaps in your AI system.", link: "trustaudit.tools \u2192" },
    t2: { title: "TrustBridge", body: "See how the Trust Layer works in practice across government, health, and finance.", link: "trustbridge.design \u2192" }
  },
  contact: {
    heading: "Ready to build trustworthy AI?",
    sub: "Discovery calls are 30 minutes. No obligation.",
    cta: "Book a Call",
    email: "info@jennifersimonds.com"
  },
  footer: {
    tagline: "Building the human layer for trustworthy AI.",
    imprint: "Imprint",
    copyright: "\u00A9 2026 Trust by Design"
  }
}

export default function HomePage() {
  return (
    <main aria-label="Homepage">

      {/* ──────────────────────────────────────────────────────────
          HERO — full-width dark navy, headline left, image right
          ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="hero-heading" className="relative">
        <div className="relative w-full min-h-[480px] md:min-h-[560px]">
          <Image
            src="/images/hero-working-together.jpg"
            alt="A doctor reviewing high-risk AI diagnostic results on a screen while a patient waits nearby"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0F1B2D]/70 md:bg-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0F1B2D]/90 via-[#0F1B2D]/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-5xl px-6">
              <div className="max-w-xl">
                <h1
                  id="hero-heading"
                  className="font-sans text-3xl md:text-5xl font-bold leading-tight"
                >
                  <span className="text-white">{"Deploy High-Risk AI"}</span>
                  <br />
                  <span className="text-[#F5A623]">{"with Confidence."}</span>
                </h1>
                <p className="mt-5 text-white/80 leading-relaxed text-sm md:text-base max-w-lg">
                  {content.hero.sub}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`mailto:${content.contact.email}?subject=Discovery+Call+Request`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#F5A623] text-[#0F1B2D] text-sm font-semibold min-h-[44px] hover:bg-[#f5b340] transition-colors"
                  >
                    {content.hero.cta1}
                  </a>
                  <Link
                    href="/framework"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#0F1B2D] text-sm font-medium min-h-[44px] hover:bg-gray-300 transition-colors"
                  >
                    {content.hero.cta2}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 1 — The Gap (white, two columns, amber callout)
          ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="gap-heading" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="gap-heading" className="sr-only">{content.gap.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground leading-tight">
                {content.gap.left.heading}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {content.gap.left.body}
              </p>
            </div>
            <div>
              <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground leading-tight">
                {content.gap.right.heading}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {content.gap.right.body}
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-lg p-6 bg-[#FEF3DC] border border-[#F5A623]/30">
            <p className="text-sm font-medium text-[#0F1B2D] text-center leading-relaxed">
              {content.gap.callout}
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2 — Services (dark navy, three cards)
          ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="services-heading" className="bg-[#0F1B2D] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="services-heading" className="font-sans text-2xl md:text-3xl font-bold text-white text-center">
            {content.services.heading}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-[#F5A623]">{content.services.s1.title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{content.services.s1.body}</p>
              <a
                href="https://www.trustaudit.tools/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-[#F5A623] font-medium hover:underline"
              >
                {content.services.s1.link} <span className="sr-only">(opens in new tab)</span>
              </a>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-[#F5A623]">{content.services.s2.title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{content.services.s2.body}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-[#F5A623]">{content.services.s3.title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{content.services.s3.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3 — Sectors (white, three tiles with images)
          ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="sectors-heading" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="sectors-heading" className="font-sans text-2xl md:text-3xl font-bold text-foreground text-center text-balance">
            {content.sectors.heading}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image src="/images/sector-government.jpg" alt="A government employee helping a citizen at a service desk" fill className="object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{content.sectors.gov.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{content.sectors.gov.body}</p>
            </div>
            <div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image src="/images/sector-health.jpg" alt="A doctor showing a patient an AI health recommendation on a tablet" fill className="object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{content.sectors.health.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{content.sectors.health.body}</p>
            </div>
            <div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image src="/images/sector-finance.jpg" alt="A banker reviewing AI credit scoring data on a screen" fill className="object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{content.sectors.finance.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{content.sectors.finance.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4 — Credibility (off-white, single column + strip)
          ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="credibility-heading" className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="credibility-heading" className="font-sans text-2xl md:text-3xl font-bold text-foreground text-center text-balance">
            {content.credibility.heading}
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-center">
            {content.credibility.body1}
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-center">
            {content.credibility.body2}
          </p>
          <p className="mt-10 text-xs text-muted-foreground text-center">
            {content.credibility.strip}
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 5 — Tools (white, two cards side by side)
          ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="tools-heading" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="tools-heading" className="font-sans text-2xl md:text-3xl font-bold text-foreground text-center text-balance">
            {content.tools.heading}
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.trustaudit.tools/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-border bg-card p-6 min-h-[44px] hover:border-[#F5A623]/40 transition-colors"
            >
              <h3 className="font-semibold text-foreground">{content.tools.t1.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{content.tools.t1.body}</p>
              <span className="mt-3 inline-block text-sm text-[#F5A623] font-medium">
                {content.tools.t1.link} <span className="sr-only">(opens in new tab)</span>
              </span>
            </a>
            <a
              href="https://trustbridge.design"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-border bg-card p-6 min-h-[44px] hover:border-[#F5A623]/40 transition-colors"
            >
              <h3 className="font-semibold text-foreground">{content.tools.t2.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{content.tools.t2.body}</p>
              <span className="mt-3 inline-block text-sm text-[#F5A623] font-medium">
                {content.tools.t2.link} <span className="sr-only">(opens in new tab)</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 6 — Contact (dark navy, centred, amber CTA)
          ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="contact-heading" className="bg-[#0F1B2D] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 id="contact-heading" className="font-sans text-2xl md:text-3xl font-bold text-white text-balance">
            {content.contact.heading}
          </h2>
          <p className="mt-4 text-slate-400">
            {content.contact.sub}
          </p>
          <div className="mt-8">
            <a
              href={`mailto:${content.contact.email}?subject=Discovery+Call+Request`}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#F5A623] text-[#0F1B2D] text-sm font-semibold min-h-[44px] hover:bg-[#f5b340] transition-colors"
            >
              {content.contact.cta}
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            <a href={`mailto:${content.contact.email}`} className="hover:text-slate-300 transition-colors">
              {content.contact.email}
            </a>
          </p>
        </div>
      </section>

    </main>
  )
}
