import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education & Adoption | Trust by Design",
  description:
    "We help regulated organisations build AI capability across their teams through literacy workshops, adoption programmes, and leadership briefings.",
}

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return children
}
