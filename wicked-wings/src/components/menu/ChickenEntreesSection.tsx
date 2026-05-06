import { Separator } from "@/components/ui/separator"
import type { SizedMenuItem } from "@/api/types"

interface ChickenEntreesSectionProps {
  items: SizedMenuItem[]
}

export function ChickenEntreesSection({ items }: ChickenEntreesSectionProps) {
  return (
    <section id="chicken-entrees" className="flex flex-col gap-6">
      <h2
        className="text-3xl font-black text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Chicken Entrees
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
              <div className="flex gap-3 shrink-0">
                {item.prices.map((p) => (
                  <span key={p.label || "single"} className="text-sm text-right">
                    {p.label && (
                      <span className="block text-xs text-muted-foreground">{p.label}</span>
                    )}
                    <span
                      className="text-lg font-bold text-accent"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      ${p.price.toFixed(2)}
                    </span>
                  </span>
                ))}
              </div>
            </div>
            {idx < items.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </section>
  )
}
