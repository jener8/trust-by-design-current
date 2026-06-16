import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Innovation | Trust by Design",
  description:
    "We help organisations explore AI responsibly, from opportunity mapping and design sprints to readiness assessments. Human-centred, legally grounded, and genuinely buildable.",
}

export default function InnovationLayout({ children }: { children: React.ReactNode }) {
  return children
}
