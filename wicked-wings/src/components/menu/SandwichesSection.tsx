import { Separator } from "@/components/ui/separator"
import type { SimpleMenuItem } from "@/api/types"

interface SandwichesSectionProps {
  items: SimpleMenuItem[]
}

export function SandwichesSection({ items }: SandwichesSectionProps) {
  return (
    <section id="sandwiches" className="flex flex-col gap-6">
      <div>
        <h2
          className="text-3xl font-black text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Sandwiches
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Served with fries or tots. Substitute sides for $1.00. All sandwiches also available as a wrap at no extra cost.
        </p>
      </div>
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
