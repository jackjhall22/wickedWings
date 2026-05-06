import { MenuListSection } from "./MenuListSection"
import type { SizedMenuItem } from "@/api/types"

interface ChickenEntreesSectionProps {
  items: SizedMenuItem[]
}

export function ChickenEntreesSection({ items }: ChickenEntreesSectionProps) {
  return (
    <MenuListSection
      id="chicken-entrees"
      title="Chicken Entrees"
      items={items}
    />
  )
}
