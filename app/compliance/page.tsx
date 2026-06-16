"use client"

import Link from "next/link"

const content = {
  hero: {
    heading: "The EU AI Act is in force. Your obligations are real. We make them implementable.",
    sub: "Legal compliance for high-risk AI systems is not a documentation exercise. It requires design decisions, technical changes, governance structures, and organisational processes that most legal and compliance teams are not equipped to specify alone. We bridge the gap between what the law requires and what your systems actually do.",
  },
  problem: {
    left: {
      heading: "You know what the law says. You don't know what it means in practice.",
      body: "Your legal team has read the EU AI Act. Your compliance framework is in progress. But the gap between \"Article 13 requires transparency\" and \"this is what the interface needs to show users\" is not a legal problem. It is a design and implementation problem, and it sits outside most legal teams' expertise.",
    },
    right: {
      heading: "Compliance without implementation is not compliance.",
      body: "Regulators are not assessing your documentation. They are assessing your systems, your processes, and the real experience of the people affected by your AI. A conformity assessment that does not reflect how the system actually works is a liability, not a safeguard.",
    },
  },
  services: {
    heading: "From legal obligation to implemented compliance",
    cards: [
      {
        title: "EU AI Act Obligation Mapping",
        body: "We work through your AI systems and identify which EU AI Act requirements apply, what each one means in practice, and what design, technical, or governance changes are needed to meet them. You receive a clear, prioritised implementation plan, not a summary of the law you already have.",
      },
      {
        title: "Human-Centred Compliance Design",
        body: "We translate specific obligations (transparency, explainability, human oversight, accessibility, data governance) into concrete interface, interaction, and process decisions. We work alongside your legal, technical, and product teams to implement them in a way that is both compliant and usable.",
      },
      {
        title: "Compliance Audit & Gap Analysis",
        body: "We assess your existing AI systems and documentation against EU AI Act requirements, BITV/WCAG accessibility standards, and GDPR obligations. You receive a structured gap analysis with specific, actionable recommendations, and an honest assessment of your current risk exposure.",
      },
    ],
  },
  differentiation: {
    heading: "Why this requires design expertise, not just legal expertise.",
    body1:
      "The EU AI Act places obligations on AI systems that only design can fulfil.\n\nTransparency (Article 13) requires users to understand what an AI system is doing and why. That is an interface design problem. Human oversight (Article 14) requires users to be able to monitor, challenge, and override AI decisions. That is an interaction design problem. Accessibility is required for high-risk systems in public-facing contexts. That is a BITV/WCAG design problem.",
    body2:
      "These obligations cannot be met by a legal team alone. They require someone who understands both the law and the design, and can work credibly with both your legal counsel and your product teams. That is what we do.",
  },
  obligations: [
    {
      article: "Article 9: Risk management",
      body: "In practice: a documented, implemented process for identifying and mitigating risks throughout the AI system's lifecycle. We design the process and the governance structure.",
    },
    {
      article: "Article 13: Transparency",
      body: "In practice: users must be able to understand what the system does, how it makes decisions, and what its limitations are. We design the interface and communication layer that delivers this.",
    },
    {
      article: "Article 14: Human oversight",
      body: "In practice: users must be able to monitor, interpret, and override the system's outputs. We design the oversight mechanisms and the interaction patterns that make this real.",
    },
    {
      article: "Article 15: Accuracy, robustness, cybersecurity",
      body: "In practice: the system must perform reliably and communicate uncertainty honestly. We design the failure states, error handling, and confidence communication.",
    },
    {
      article: "BITV/WCAG: Accessibility",
      body: "In practice: high-risk AI systems in public-facing contexts must meet accessibility standards. We assess and implement to BITV/WCAG 2.1 AA as a baseline.",
    },
  ],
  audience: {
    cards: [
      { title: "Legal counsel advising on EU AI Act compliance", body: "Needing a design and implementation partner to translate obligations into practice." },
      { title: "Compliance and risk officers", body: "Responsible for AI governance frameworks and conformity assessments." },
      { title: "Data protection officers", body: "Managing the intersection of EU AI Act and GDPR obligations." },
      { title: "Public sector legal and governance teams", body: "Navigating the specific obligations for AI in public authority contexts." },
      { title: "Law firms advising regulated sector clients", body: "Looking for a specialist partner who can bridge legal and design." },
    ],
  },
  cta: {
    heading: "Know your obligations. Implement them properly.",
    body: "A 30-minute discovery call is enough to assess your current exposure and identify the highest-priority gaps.",
    button: "Book a discovery call",
    mailto: "mailto:info@jennifersimonds.com?subject=Compliance+Enquiry",
  },
  crossLinks: [
    { label: "Need to bring your teams up to speed on AI obligations?", href: "/education" },
    { label: "Planning new AI systems and want compliance built in from the start?", href: "/innovation" },
    { label: "Ready to audit or implement the Trust Layer in a live system?", href: "/framework" },
  ],
}

export default function CompliancePage() {
  return (
    <main aria-label="Legal Compliance">

      <section aria-labelledby="compliance-hero-heading" className="bg-[#0F1B2D]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 id="compliance-hero-heading" className="font-sans text-3xl md:text-5xl font-bold text-white leading-tight">
              {content.hero.heading}
            </h1>
            <p className="mt-4 text-white/70 leading-relaxed text-sm md:text-base max-w-2xl">
              {content.hero.sub}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="compliance-problem-heading" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="compliance-problem-heading" className="sr-only">The compliance challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground leading-tight">
                {content.problem.left.heading}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{content.problem.left.body}</p>
            </div>
            <div>
              <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground leading-tight">
                {content.problem.right.heading}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{content.problem.right.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="compliance-services-heading" className="bg-[#0F1B2D] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="compliance-services-heading" className="font-sans text-2xl md:text-3xl font-bold text-white text-center">
            {content.services.heading}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.services.cards.map((card) => (
              <div key={card.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold text-[#F5A623]">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="compliance-diff-heading" className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="compliance-diff-heading" className="font-sans text-2xl md:text-3xl font-bold text-foreground text-center text-balance">
            {content.differentiation.heading}
          </h2>
          {content.differentiation.body1.split(/\n\n+/).map((paragraph, index) => (
            <p
              key={index}
              className={`text-muted-foreground leading-relaxed text-center${index === 0 ? " mt-6" : " mt-4"}`}
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-4 text-muted-foreground leading-relaxed text-center">{content.differentiation.body2}</p>
        </div>
      </section>

      <section aria-labelledby="compliance-obligations-heading" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="compliance-obligations-heading" className="sr-only">Key obligations</h2>
          <div className="space-y-4">
            {content.obligations.map((item) => (
              <div
                key={item.article}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div>
                  <p className="font-medium text-foreground text-sm">{item.article}</p>
                  <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="compliance-audience-heading" className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="compliance-audience-heading" className="sr-only">Who this is for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.audience.cards.map((card) => (
              <div key={card.title} className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="compliance-cta-heading" className="bg-[#0F1B2D] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 id="compliance-cta-heading" className="font-sans text-2xl md:text-3xl font-bold text-white text-balance">
            {content.cta.heading}
          </h2>
          <p className="mt-4 text-slate-400">{content.cta.body}</p>
          <div className="mt-8">
            <a
              href={content.cta.mailto}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#F5A623] text-[#0F1B2D] text-sm font-semibold min-h-[44px] hover:bg-[#f5b340] transition-colors"
            >
              {content.cta.button}
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Related pages" className="py-12 md:py-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 space-y-3">
          {content.crossLinks.map((link) => (
            <p key={link.href} className="text-sm text-muted-foreground">
              <Link href={link.href} className="text-[#F5A623] font-medium hover:underline">
                {link.label}
              </Link>
            </p>
          ))}
        </div>
      </section>

    </main>
  )
}
