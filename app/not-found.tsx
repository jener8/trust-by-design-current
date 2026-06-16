"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <main aria-label="Page not found" className="flex-1 flex items-center justify-center px-6 py-32">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4" aria-hidden="true">404</p>
        <h1 className="font-sans text-3xl mb-4">Page not found</h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary underline hover:text-primary/80 transition-colors min-h-[44px]"
        >
          Go to the homepage
        </Link>
      </div>
    </main>
  )
}
