"use client"

import Link from "next/link"

const content = {
  hero: {
    heading: "Your AI strategy is only as strong as the people behind it.",
    sub: "Technology doesn't create trust. People do. We help your teams understand AI, engage with it confidently, and use it in ways that are responsible, effective, and genuinely theirs.",
  },
  problem: {
    left: {
      heading: "The tools are ready. The people aren't.",
      body: "You've invested in AI. Your systems are live or nearly there. But your teams are uncertain, your managers don't know how to govern it, and your leadership can't explain it to the board. That's not a technology problem.",
    },
    right: {
      heading: "Adoption is a human challenge.",
      body: "Most AI programmes underestimate the human layer. People need to understand what AI can and can't do, when to trust it and when not to, and how their role changes as AI becomes part of how they work. This takes deliberate design, not a one-hour training session.",
    },
  },
  services: {
    heading: "Building AI capability that lasts",
    cards: [
      {
        title: "AI Literacy Workshops",
        body: "We design and run working sessions for teams at every level, from frontline employees to senior leadership. Sessions are grounded in your organisation's actual AI systems and use cases, not generic AI theory. People leave with real understanding, not just awareness.",
      },
      {
        title: "AI Adoption Programmes",
        body: "We design the human side of your AI rollout: the communication strategy, the change management approach, the manager enablement, and the feedback loops that make adoption stick. We work alongside your internal teams to embed this, not hand it over as a document.",
      },
      {
        title: "Leadership & C-Suite Briefings",
        body: "We translate what your AI systems do, what the EU AI Act requires, and what your organisation's AI strategy means into language your leadership can use to make decisions, communicate with confidence, and govern effectively.",
      },
    ],
  },
  differentiation: {
    heading: "We don't deliver generic AI training.",
    body1:
      "Every session is grounded in your organisation's specific AI systems, your sector's regulatory context, and the real questions your teams are asking. We've worked inside government AI implementation. We know what the hard questions are, and we know how to answer them honestly.",
    body2:
      "We work in German and English. We understand the public sector, regulated industries, and the cultural and organisational context of AI adoption in Germany and across Europe.",
  },
  audience: {
    cards: [
      { title: "HR and L&D teams", body: "Building AI literacy programmes for your workforce." },
      { title: "Digital transformation leads", body: "Managing AI rollout across departments and ensuring people adopt, not resist." },
      { title: "Team managers and leads", body: "Understanding how to govern AI in your team's day-to-day work." },
      { title: "Leadership and C-suite", body: "Communicating AI strategy and managing risk at board level." },
      { title: "Innovation and product teams", body: "Getting teams up to speed on responsible AI before development begins." },
    ],
  },
  cta: {
    heading: "Ready to build real AI capability in your organisation?",
    body: "Tell us where your teams are. We'll design a programme that meets them there.",
    button: "Book a discovery call",
    mailto: "mailto:info@jennifersimonds.com?subject=Education+and+Adoption+Enquiry",
  },
  crossLinks: [
    { label: "Exploring what AI could do for your organisation?", href: "/innovation" },
    { label: "Need to map your EU AI Act obligations?", href: "/compliance" },
    { label: "Ready to design the Trust Layer into a live system?", href: "/framework" },
  ],
}

export default function EducationPage() {
  return (
    <main aria-label="Education and Adoption">

      <section aria-labelledby="education-hero-heading" className="bg-[#0F1B2D]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 id="education-hero-heading" className="font-sans text-3xl md:text-5xl font-bold text-white leading-tight">
              {content.hero.heading}
            </h1>
            <p className="mt-4 text-white/70 leading-relaxed text-sm md:text-base max-w-2xl">
              {content.hero.sub}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="education-problem-heading" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="education-problem-heading" className="sr-only">The adoption challenge</h2>
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

      <section aria-labelledby="education-services-heading" className="bg-[#0F1B2D] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="education-services-heading" className="font-sans text-2xl md:text-3xl font-bold text-white text-center">
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

      <section aria-labelledby="education-diff-heading" className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="education-diff-heading" className="font-sans text-2xl md:text-3xl font-bold text-foreground text-center text-balance">
            {content.differentiation.heading}
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-center">{content.differentiation.body1}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-center">{content.differentiation.body2}</p>
        </div>
      </section>

      <section aria-labelledby="education-audience-heading" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="education-audience-heading" className="sr-only">Who this is for</h2>
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

      <section aria-labelledby="education-cta-heading" className="bg-[#0F1B2D] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 id="education-cta-heading" className="font-sans text-2xl md:text-3xl font-bold text-white text-balance">
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
