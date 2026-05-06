import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { SimpleMenuItem } from "@/api/types"

interface KidsMenuSectionProps {
  items: SimpleMenuItem[]
}

export function KidsMenuSection({ items }: KidsMenuSectionProps) {
  return (
    <section id="kids-menu" className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <h2
          className="text-3xl font-black text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Kids Menu
        </h2>
        <Badge variant="secondary">Includes Drink</Badge>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle
                className="text-foreground text-base"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.name}
              </CardTitle>
              {item.description && (
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <span
                className="text-xl font-bold text-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ${item.price.toFixed(2)}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
