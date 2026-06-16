import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Compliance | Trust by Design",
  description:
    "We translate EU AI Act obligations into implemented, auditable compliance, working with legal, risk, and design teams to close the gap between documentation and reality.",
}

export default function ComplianceLayout({ children }: { children: React.ReactNode }) {
  return children
}
