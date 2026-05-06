import { MenuCardGrid } from "./MenuCardGrid"
import type { SimpleMenuItem } from "@/api/types"

interface StartersSectionProps {
  items: SimpleMenuItem[]
}

export function StartersSection({ items }: StartersSectionProps) {
  return <MenuCardGrid id="starters" title="Starters" items={items} />
}
