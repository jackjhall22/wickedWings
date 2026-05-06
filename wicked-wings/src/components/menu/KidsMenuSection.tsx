import { MenuCardGrid } from "./MenuCardGrid"
import { Badge } from "@/components/ui/badge"
import type { SimpleMenuItem } from "@/api/types"

interface KidsMenuSectionProps {
  items: SimpleMenuItem[]
}

export function KidsMenuSection({ items }: KidsMenuSectionProps) {
  return (
    <MenuCardGrid
      id="kids-menu"
      title="Kids Menu"
      items={items}
      columns="grid-cols-1 sm:grid-cols-3"
      headerSlot={<Badge variant="secondary">Includes Drink</Badge>}
    />
  )
}
