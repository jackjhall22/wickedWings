import { Separator } from "@/components/ui/separator"
import type { SimpleMenuItem, SizedMenuItem } from "@/api/types"

type ListItem = SimpleMenuItem | SizedMenuItem

function isSizedItem(item: ListItem): item is SizedMenuItem {
  return "prices" in item
}

interface MenuListSectionProps {
  id: string
  title: string
  subtitle?: string
  items: ListItem[]
  pricePrefix?: (item: SimpleMenuItem) => string
}

export function MenuListSection({
  id,
  title,
  subtitle,
  items,
  pricePrefix,
}: MenuListSectionProps) {
  return (
    <section id={id} className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-3xl font-black text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item, idx) => (
          <div key={item.id}>
            <div className="flex items-start justify-between gap-4 rounded-lg px-4 py-4 transition-colors hover:bg-card">
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <span className="font-display font-semibold text-foreground">
                  {item.name}
                </span>
                {item.description && (
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </span>
                )}
              </div>
              {isSizedItem(item) ? (
                <div className="flex gap-3 shrink-0">
                  {item.prices.map((p) => (
                    <span key={p.label || "single"} className="text-sm text-right">
                      {p.label && (
                        <span className="block text-xs text-muted-foreground">{p.label}</span>
                      )}
                      <span className="font-display text-lg font-bold text-accent">
                        ${p.price.toFixed(2)}
                      </span>
                    </span>
                  ))}
                </div>
              ) : (
                <span className="font-display text-lg font-bold text-accent shrink-0">
                  {pricePrefix?.(item) ?? ""}${item.price.toFixed(2)}
                </span>
              )}
            </div>
            {idx < items.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </section>
  )
}
