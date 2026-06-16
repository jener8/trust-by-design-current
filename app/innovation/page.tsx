"use client"

import Link from "next/link"

const content = {
  hero: {
    heading: "The best time to get AI right is before you build it.",
    sub: "Most AI problems are design problems that were made in the first three months, before anyone thought about users, governance, or what \"responsible\" actually means in practice. We help you explore AI possibilities in ways that are human-centred, legally grounded, and genuinely buildable.",
  },
  problem: {
    left: {
      heading: "You have an AI opportunity. You don't know where to start.",
      body: "There is pressure to act on AI, from leadership, from competitors, from clients. But the landscape is complex, the risks are real, and moving fast without a clear approach means expensive mistakes and hard conversations later.",
    },
    right: {
      heading: "Speed without structure is the real risk.",
      body: "The organisations that get AI right don't move faster. They start better. They explore possibilities in structured ways, involve the right people early, and build in the human and legal considerations before a line of code is written. That's not slower. That's smarter.",
    },
  },
  services: {
    heading: "From AI possibility to AI readiness",
    cards: [
      {
        title: "AI Opportunity Mapping",
        body: "We work with your team to identify where AI could genuinely add value in your organisation, and where the risks, costs, or complexity make it the wrong choice. You leave with a clear, honest picture of your AI landscape and a prioritised set of opportunities worth pursuing.",
      },
      {
        title: "Responsible AI Design Sprints",
        body: "We facilitate structured exploration sessions that take a specific AI opportunity from idea to concept, with human needs, regulatory requirements, and organisational constraints built in from the start. These are not hackathons. They are disciplined design processes.",
      },
      {
        title: "AI Readiness Assessment",
        body: "Before you procure, build, or pilot, we assess your organisation's readiness across six dimensions: strategic alignment, technical capability, data quality, governance frameworks, team capability, and user trust. You get an honest readiness picture and a clear set of next steps.",
      },
    ],
  },
  differentiation: {
    heading: "We bring design and governance together from day one.",
    body1:
      "Most innovation support focuses on what AI can do. We focus on what AI should do, for your users, your organisation, and the people who will be affected by it. We integrate human-centred design, EU AI Act awareness, and organisational change thinking into the exploration process itself.",
    body2:
      "This means that when you move from exploration to development, you are not retrofitting compliance or rethinking the user experience. You have it built in.",
  },
  audience: {
    cards: [
      { title: "Innovation and digital transformation leads", body: "Exploring what AI could realistically do for your organisation." },
      { title: "Product and service design teams", body: "Shaping AI-powered products before development begins." },
      { title: "Strategy and leadership teams", body: "Building a credible, human-centred AI strategy that can survive scrutiny." },
      { title: "Public sector digital teams", body: "Navigating the specific constraints and responsibilities of AI in government contexts." },
      { title: "Organisations responding to AI pressure", body: "Moving from \"we need to do something about AI\" to a clear, structured approach." },
    ],
  },
  cta: {
    heading: "Not sure where to start with AI? That's exactly where we begin.",
    body: "A 30-minute discovery call is enough to map your situation and identify what would actually help.",
    button: "Book a discovery call",
    mailto: "mailto:info@jennifersimonds.com?subject=Innovation+Enquiry",
  },
  crossLinks: [
    { label: "Ready to bring your teams along?", href: "/education" },
    { label: "Need to understand your legal obligations?", href: "/compliance" },
    { label: "Have a system to build or audit?", href: "/framework" },
  ],
}

export default function InnovationPage() {
  return (
    <main aria-label="Innovation">

      <section aria-labelledby="innovation-hero-heading" className="bg-[#0F1B2D]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 id="innovation-hero-heading" className="font-sans text-3xl md:text-5xl font-bold text-white leading-tight">
              {content.hero.heading}
            </h1>
            <p className="mt-4 text-white/70 leading-relaxed text-sm md:text-base max-w-2xl">
              {content.hero.sub}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="innovation-problem-heading" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="innovation-problem-heading" className="sr-only">The innovation challenge</h2>
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

      <section aria-labelledby="innovation-services-heading" className="bg-[#0F1B2D] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="innovation-services-heading" className="font-sans text-2xl md:text-3xl font-bold text-white text-center">
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

      <section aria-labelledby="innovation-diff-heading" className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="innovation-diff-heading" className="font-sans text-2xl md:text-3xl font-bold text-foreground text-center text-balance">
            {content.differentiation.heading}
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-center">{content.differentiation.body1}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-center">{content.differentiation.body2}</p>
        </div>
      </section>

      <section aria-labelledby="innovation-audience-heading" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="innovation-audience-heading" className="sr-only">Who this is for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.audience.cards.map((card) => (
              <div key={card.title} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="innovation-cta-heading" className="bg-[#0F1B2D] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 id="innovation-cta-heading" className="font-sans text-2xl md:text-3xl font-bold text-white text-balance">
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
