import { Separator } from "@/components/ui/separator"
import type { SimpleMenuItem } from "@/api/types"

interface BurgersSectionProps {
  items: SimpleMenuItem[]
}

export function BurgersSection({ items }: BurgersSectionProps) {
  return (
    <section id="burgers" className="flex flex-col gap-6">
      <h2
        className="text-3xl font-black text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Burgers &amp; Mains
      </h2>
      <div className="flex flex-col gap-2">
        {items.map((item, idx) => (
          <div key={item.id}>
            <div className="flex items-start justify-between gap-4 rounded-lg px-4 py-4 transition-colors hover:bg-card">
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <span
                  className="font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.name}
                </span>
                {item.description && (
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </span>
                )}
              </div>
              <span
                className="text-lg font-bold text-accent shrink-0"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ${item.price.toFixed(2)}
              </span>
            </div>
            {idx < items.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </section>
  )
}
