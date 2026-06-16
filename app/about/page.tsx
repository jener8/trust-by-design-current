// To add German: duplicate content as contentDE, add language toggle, swap reference on toggle.
"use client"

import Image from "next/image"

const content = {
  hero: {
    heading: "Jenny Simonds",
    sub: "UX and AI Governance Specialist. 10+ years designing digital services for the German public sector.",
  },
  intro: {
    heading: "Why I built this",
    body: "I spent years building government AI systems from the inside, including Germany\u2019s first BITV-certified government app, scaled to over a million users. I watched technically excellent systems struggle in the field because no one had designed the human layer. Trust by Design is the framework I built because it didn\u2019t exist."
  },
  expertise: {
    heading: "What I bring to your organisation",
    e1: {
      title: "I translate technical complexity",
      body: "I bridge the gap between what your technical teams build, what your business needs, and what your users can actually understand and trust. I\u2019ve worked inside government AI systems. I know what the codebase looks like and I can explain it to a minister."
    },
    e2: {
      title: "I make governance implementable",
      body: "EU AI Act obligations don\u2019t implement themselves. I take compliance and legal requirements and turn them into specific design, interaction, and process decisions, then present that work to leadership in language that lands."
    },
    e3: {
      title: "I design for the people who get left out",
      body: "Accessibility, inclusion, and design for vulnerable populations are not edge cases. They are the test of whether a system is genuinely trustworthy. I led Germany\u2019s first BITV-certified government app. I apply that standard to every engagement."
    },
    e4: {
      title: "I educate and enable teams",
      body: "I run working sessions for technical teams, leadership, and everyone in between, helping organisations build internal fluency in responsible AI, not just external compliance. I present to C-suite, I facilitate with frontline teams, and I speak both languages."
    },
    bridge:
      "The organisations I work best with are the ones where the problem isn\u2019t lack of ambition. It\u2019s lack of translation. Everyone is working hard in their own lane. What\u2019s missing is someone who can move between all of them."
  },
  approach: {
    heading: "How I work",
    body: "I work as a trusted partner to regulated organisations, embedded enough to understand your systems, independent enough to see what your team can\u2019t.\n\nI don\u2019t deliver reports and disappear. I work at the intersection of your technical, product, compliance, and leadership teams, translating between them, designing the human layer, and making the work legible to everyone who needs to understand it: regulators, users, employees, and the C-suite."
  },
  credibility: {
    strip: "i-Kfz digital identity service \u00B7 1M+ downloads \u00B7 Germany\u2019s first BITV-certified government app \u00B7 6+ German government communities \u00B7 MA Design for Responsible AI \u00B7 EU AI Act specialist \u00B7 Global Digital Transformation Summit speaker"
  },
  cta: {
    heading: "Want to work together?",
    body: "Discovery calls are 30 minutes. No obligation.",
    button: "Get in Touch"
  }
}

export default function AboutPage() {
  return (
    <main aria-label="About Jenny Simonds">

      {/* HERO -- dark navy, left text + right headshot */}
      <section aria-labelledby="about-hero-heading" className="bg-[#0F1B2D]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2">
              <h1
                id="about-hero-heading"
                className="font-sans text-3xl md:text-5xl font-bold text-white leading-tight"
              >
                {content.hero.heading}
              </h1>
              <p className="mt-4 text-white/70 leading-relaxed text-sm md:text-base max-w-md">
                {content.hero.sub}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEWME-zYtz6V9XEJr50DjZ3NoUM6vmI3isEB.png"
                  alt="Jenny Simonds"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY I BUILT THIS -- white bg, single column, generous padding */}
      <section aria-labelledby="intro-heading" className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 id="intro-heading" className="font-sans text-2xl md:text-3xl font-bold text-[#0F1B2D]">
            {content.intro.heading}
          </h2>
          <p className="mt-6 text-[#5A6478] leading-relaxed text-base md:text-lg">
            {content.intro.body}
          </p>
        </div>
      </section>

      {/* WHAT I BRING -- off-white bg, 2x2 card grid with amber left border */}
      <section aria-labelledby="expertise-heading" className="bg-[#F7F5F0]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <h2 id="expertise-heading" className="font-sans text-2xl md:text-3xl font-bold text-[#0F1B2D] text-center">
            {content.expertise.heading}
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[content.expertise.e1, content.expertise.e2, content.expertise.e3, content.expertise.e4].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border-l-4 border-[#F5A623]">
                <h3 className="font-semibold text-[#0F1B2D]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#5A6478] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[#5A6478] leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
            {content.expertise.bridge}
          </p>
        </div>
      </section>

      {/* HOW I WORK -- dark navy, single column, white text */}
      <section aria-labelledby="approach-heading" className="bg-[#0F1B2D]">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 id="approach-heading" className="font-sans text-2xl md:text-3xl font-bold text-white">
            {content.approach.heading}
          </h2>
          {content.approach.body.split(/\n\n+/).map((paragraph, index) => (
            <p
              key={index}
              className={`text-white/70 leading-relaxed text-base md:text-lg${index === 0 ? " mt-6" : " mt-4"}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* CREDIBILITY STRIP -- white bg, amber accent, single line */}
      <section aria-label="Credentials" className="bg-white border-y border-[#E2E5EB]">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <p className="text-center text-sm text-[#5A6478]">
            <span className="text-[#F5A623] font-semibold" aria-hidden="true">{"·"}</span>
            {" "}
            {content.credibility.strip}
            {" "}
            <span className="text-[#F5A623] font-semibold" aria-hidden="true">{"·"}</span>
          </p>
        </div>
      </section>

      {/* CTA -- dark navy, centred, amber button */}
      <section aria-labelledby="about-cta-heading" className="bg-[#0F1B2D]">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-center">
          <h2 id="about-cta-heading" className="font-sans text-2xl md:text-3xl font-bold text-white">
            {content.cta.heading}
          </h2>
          <p className="mt-4 text-white/60 max-w-md mx-auto">
            {content.cta.body}
          </p>
          <a
            href="mailto:info@jennifersimonds.com?subject=Trust+by+Design+Enquiry"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#F5A623] text-[#0F1B2D] text-sm font-semibold hover:bg-[#F5A623]/90 transition-colors min-h-[44px]"
          >
            {content.cta.button}
          </a>
        </div>
      </section>

    </main>
  )
}
