import { MenuCardGrid } from "./MenuCardGrid"
import type { SimpleMenuItem } from "@/api/types"

interface SidesSectionProps {
  items: SimpleMenuItem[]
}

export function SidesSection({ items }: SidesSectionProps) {
  return (
    <MenuCardGrid
      id="sides"
      title="Sides"
      items={items}
      columns="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      cardStyle="compact"
    />
  )
}
