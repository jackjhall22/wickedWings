import { MenuListSection } from "./MenuListSection"
import type { SimpleMenuItem } from "@/api/types"

interface BurgersSectionProps {
  items: SimpleMenuItem[]
}

export function BurgersSection({ items }: BurgersSectionProps) {
  return (
    <MenuListSection
      id="burgers"
      title="Burgers"
      subtitle="Fresh, never frozen 1/2 lb 100% beef. Served with fries or tots. Substitute sides for $1.00."
      items={items}
      pricePrefix={(item) => (item.id === "byo-burger" ? "From " : "")}
    />
  )
}
