import { MenuCardGrid } from "./MenuCardGrid"
import type { Cocktail } from "@/api/types"

interface CocktailsSectionProps {
  cocktails: Cocktail[]
}

export function CocktailsSection({ cocktails }: CocktailsSectionProps) {
  const items = cocktails.map((c) => ({
    id: c.id,
    name: c.name,
    description: c.description,
    price: c.price,
  }))

  return (
    <MenuCardGrid
      id="cocktails"
      title="Game Day Cocktails"
      items={items}
      columns="grid-cols-1 sm:grid-cols-2"
    />
  )
}
