"use client"

import { useI18n } from "@/lib/i18n/context"

export function AnnouncementBanner() {
  const { t } = useI18n()

  return (
    <div className="w-full bg-[#F5A623] py-2 text-center" role="status">
      <p className="text-xs font-medium text-[#0F1B2D]">{t("banner.text")}</p>
    </div>
  )
}
