import type { SimpleMenuItem } from "@/api/types"

interface DrinksSectionProps {
  items: SimpleMenuItem[]
}

export function DrinksSection({ items }: DrinksSectionProps) {
  return (
    <section id="drinks" className="flex flex-col gap-6">
      <h2 className="font-display text-3xl font-black text-foreground">
        Drinks
      </h2>
      {items.map((item) => (
        <div key={item.id} className="rounded-lg bg-card border border-border px-4 py-4">
          <div className="flex items-start justify-between gap-4">
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
            <span className="font-display text-lg font-bold text-accent shrink-0">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </section>
  )
}
