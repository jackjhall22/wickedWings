import { MenuCardGrid } from "./MenuCardGrid"
import type { SimpleMenuItem } from "@/api/types"

interface DessertsSectionProps {
  items: SimpleMenuItem[]
}

export function DessertsSection({ items }: DessertsSectionProps) {
  return (
    <MenuCardGrid
      id="desserts"
      title="Desserts"
      items={items}
      columns="grid-cols-2 sm:grid-cols-3"
      cardStyle="compact"
    />
  )
}
