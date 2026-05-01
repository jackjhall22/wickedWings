import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { SimpleMenuItem } from "@/api/types"

interface AppetizersSectionProps {
  items: SimpleMenuItem[]
}

export function AppetizersSection({ items }: AppetizersSectionProps) {
  return (
    <section id="appetizers" className="flex flex-col gap-6">
      <h2
        className="text-3xl font-black text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Appetizers
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle
                className="text-foreground text-base"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span
                className="text-xl font-bold text-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ${item.price.toFixed(2)}
              </span>
              {item.badge && (
                <span className="ml-2 text-xs text-muted-foreground">{item.badge}</span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
