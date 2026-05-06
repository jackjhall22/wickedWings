import { MenuListSection } from "./MenuListSection"
import type { SimpleMenuItem } from "@/api/types"

interface SandwichesSectionProps {
  items: SimpleMenuItem[]
}

export function SandwichesSection({ items }: SandwichesSectionProps) {
  return (
    <MenuListSection
      id="sandwiches"
      title="Sandwiches"
      subtitle="Served with fries or tots. Substitute sides for $1.00. All sandwiches also available as a wrap at no extra cost."
      items={items}
    />
  )
}
