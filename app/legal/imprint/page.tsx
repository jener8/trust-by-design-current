export default function ImprintPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Impressum</h1>

      <div className="space-y-8 max-w-2xl">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Legal Information</h2>
          <p className="text-muted-foreground text-sm">
            Information in accordance with Section 5 TMG (German Telemedia Act)
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Service Provider</h2>
          <div className="text-muted-foreground text-sm space-y-1">
            <p className="font-medium text-foreground">Trust by Design</p>
            <p>Jennifer Simonds</p>
            <p>Independent Research & Consulting</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
          <div className="text-muted-foreground text-sm space-y-1">
            <p>
              Email:{" "}
              <a href="mailto:info@jennifersimonds.com" className="text-primary hover:underline">
                info@jennifersimonds.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/simondsjennifer/"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/simondsjennifer
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Responsible for Content</h2>
          <p className="text-muted-foreground text-sm">
            Jennifer Simonds is responsible for the content of this website in accordance
            with Section 55 (2) RStV.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Disclaimer</h2>
          <div className="text-muted-foreground text-sm space-y-4">
            <div>
              <h3 className="font-medium text-foreground mb-1">Liability for Content</h3>
              <p>
                The contents of our pages have been created with the utmost care. However, we cannot guarantee
                the accuracy, completeness, or timeliness of the content.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-1">Liability for Links</h3>
              <p>
                Our website contains links to external third-party websites over whose content we have no control.
                The respective provider or operator is always responsible for the content of linked pages.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-1">Copyright</h3>
              <p>
                Research frameworks and methodologies are licensed under Creative Commons Attribution 4.0
                International License.
              </p>
            </div>
          </div>
        </section>

        <p className="text-xs text-muted-foreground/60 pt-4">Last updated: February 2026</p>
      </div>
    </main>
  )
}
