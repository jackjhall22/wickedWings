import { MenuListSection } from "./MenuListSection"
import type { SizedMenuItem } from "@/api/types"

interface SeafoodSectionProps {
  items: SizedMenuItem[]
}

export function SeafoodSection({ items }: SeafoodSectionProps) {
  return (
    <MenuListSection
      id="seafood"
      title="Seafood"
      subtitle="Served with fries or tots. Substitute sides for $1.00."
      items={items}
    />
  )
}
