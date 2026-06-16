// To add German translation: duplicate content object as contentDE, add language toggle to nav, swap content reference on toggle.
"use client"

import Image from "next/image"
import Link from "next/link"

const content = {
  nav: { home: "Home", about: "About", method: "The Method", contact: "Contact" },
  hero: {
    headline: "Deploy High-Risk AI with Confidence.",
    sub: "We help regulated organisations in government, health, and finance explore, adopt, and deploy AI in ways that are human-centred, responsible, and trusted \u2014 whether you are just starting out or already in production.",
    cta1: "Book a Discovery Call",
    cta2: "See the Framework"
  },
  gap: {
    heading: "The gap no one is designing for",
    left: {
      heading: "Your organisation is moving towards AI.",
      body: "You have ambition, budget, and pressure to act. You may have a pilot running, a vendor shortlisted, or a leadership mandate to deliver."
    },
    right: {
      heading: "But is your organisation actually ready?",
      body: "Technology is the easy part. What derails AI adoption is the human layer: trust, communication, governance, accessibility, and organisational readiness. These are design problems \u2014 and they need to be solved early, not retrofitted at the end."
    },
    callout: "We work with organisations at every stage \u2014 from early exploration and innovation through to production deployment and compliance. The earlier you address the human layer, the less it costs to get right."
  },
  capabilities: {
    heading: "What makes this work",
    intro1: "Most AI adoption challenges are not technology problems. They are human, organisational, and design problems \u2014 and they show up at every stage, from the first internal conversation about AI through to production deployment and ongoing governance.",
    intro2: "The missing piece is someone who can work across all of those stages and translate between all of the people involved.",
    closing: "Whether your AI is a finished system, a live pilot, or still a question on a leadership agenda \u2014 this is where we start.",
    items: [
      {
        title: "AI Adoption",
        body: "Moving organisations from AI ambition to working systems people actually use \u2014 at whatever stage you are at."
      },
      {
        title: "AI Enablement",
        body: "Building internal capability so your teams \u2014 from frontline employees to leadership \u2014 can engage with, govern, and get value from AI confidently."
      },
      {
        title: "Human-Centered AI",
        body: "Designing AI systems and AI adoption processes around the people who use them: their needs, their limits, their trust."
      },
      {
        title: "Responsible AI",
        body: "Translating EU AI Act obligations, ethics frameworks, and governance requirements into real decisions \u2014 in innovation, in procurement, and in production."
      },
      {
        title: "Digital Transformation",
        body: "Connecting AI adoption to wider organisational change \u2014 processes, culture, communication, and readiness."
      },
      {
        title: "Workshop Facilitation & AI Governance",
        body: "Running working sessions that move teams from uncertainty to action \u2014 and presenting findings to C-suite in language that lands."
      }
    ]
  },
  services: {
    heading: "Three ways we work with you",
    s1: {
      title: "Trust Audit",
      body: "We assess your AI system or AI adoption plans against the four Trust Layer principles \u2014 explainability, recoverability, accessibility, and human control \u2014 and show you exactly where the gaps are, whether you are in discovery or in production.",
      link: "trustaudit.tools \u2192"
    },
    s2: {
      title: "Framework Implementation",
      body: "We design and build the Trust Layer into your AI systems, innovation projects, and organisational processes \u2014 working alongside your technical, product, UX, compliance, and leadership teams from early exploration through to deployment."
    },
    s3: {
      title: "EU AI Act Readiness",
      body: "We map your high-risk AI obligations \u2014 current and anticipated \u2014 and build the human-centred compliance layer your organisation needs. Enforcement is underway. We help you move from documentation to implementation."
    }
  },
  sectors: {
    heading: "We work with regulated industries deploying high-risk AI",
    gov: { title: "Government", body: "Federal agencies, ministries, and public institutions deploying AI in citizen-facing services." },
    health: { title: "Healthcare", body: "Hospitals, insurers, and health technology companies using AI for diagnosis, triage, or patient decisions." },
    finance: { title: "Finance", body: "Banks, insurers, and financial institutions using AI for credit, fraud, or eligibility decisions." }
  },
  credibility: {
    heading: "Built on research. Validated in practice.",
    body1: "The Trust by Design framework was developed through independent research across 14+ AI implementation teams in the German public sector, and validated through advisory work with regulated organisations across government, health, and finance.",
    body2: "We don\u2019t consult from the outside. We\u2019ve built government AI systems from the inside \u2014 including Germany\u2019s first BITV-certified government application, with over a million users.",
    strip: "i-Kfz \u00B7 Germany\u2019s first BITV-certified government app \u00B7 1M+ downloads \u00B7 Presented to 6+ German government communities \u00B7 MA Design for Responsible AI \u00B7 EU AI Act specialist"
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
  explore: {
    links: [
      { label: "Explore what AI could do for your organisation", href: "/innovation" },
      { label: "Build AI capability across your teams", href: "/education" },
      { label: "Understand your EU AI Act obligations", href: "/compliance" },
    ]
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
          SECTION 1b — What makes this work (2×3 capability grid)
          ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="capabilities-heading" className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="capabilities-heading" className="font-sans text-2xl md:text-3xl font-bold text-foreground text-center text-balance">
            {content.capabilities.heading}
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            {content.capabilities.intro1}
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            {content.capabilities.intro2}
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.capabilities.items.map((item) => (
              <div key={item.title} className="rounded-lg border border-[#0F1B2D]/10 bg-white p-6">
                <h3 className="text-sm font-semibold text-[#F5A623]">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
            {content.capabilities.closing}
          </p>
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
          SECTION 5b — Explore links (above final CTA)
          ────────────────────────────────────────────────────────── */}
      <section aria-label="Explore our services" className="py-12 md:py-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 space-y-3">
          {content.explore.links.map((link) => (
            <p key={link.href} className="text-sm text-muted-foreground">
              <Link href={link.href} className="text-[#F5A623] font-medium hover:underline">
                {link.label}
              </Link>
              <span aria-hidden="true"> {"\u2192"}</span>
            </p>
          ))}
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
