import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { I18nProvider } from "@/lib/i18n/context"
import Script from "next/script"
import { PageDataAttribute } from "@/components/page-data-attribute"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AnnouncementBanner } from "@/components/announcement-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <title>Trust by Design - Deploy High-Risk AI with Confidence</title>
        <meta
          name="description"
          content="We help regulated organisations in government, health, and finance build the human layer that makes AI systems trustworthy, compliant, and actually adopted. EU AI Act aligned."
        />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest?v=4" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" hrefLang="en" href="https://trust-by-design.org/" />
        <link rel="alternate" hrefLang="de" href="https://trust-by-design.org/de/" />
        <link rel="alternate" hrefLang="x-default" href="https://trust-by-design.org/" />
      </head>
      <body className="font-sans">
        <PageDataAttribute />
        <ScrollToTop />
        <I18nProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <AnnouncementBanner />
          <Header />
          <div id="main-content">
            {children}
          </div>
          <Footer />
        </I18nProvider>
        <Script src="/i18n-loader.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
