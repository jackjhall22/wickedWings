import { MenuCardGrid } from "./MenuCardGrid"
import type { SimpleMenuItem } from "@/api/types"

interface SaladsSectionProps {
  items: SimpleMenuItem[]
}

export function SaladsSection({ items }: SaladsSectionProps) {
  return (
    <MenuCardGrid
      id="salads"
      title="Salads"
      subtitle="Served with Ranch, Blue Cheese, Caesar, Honey Mustard or any Wing Sauce."
      items={items}
      columns="grid-cols-1 sm:grid-cols-2"
    />
  )
}
