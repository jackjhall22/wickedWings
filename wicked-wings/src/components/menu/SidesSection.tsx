import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { SimpleMenuItem } from "@/api/types"

interface SidesSectionProps {
  items: SimpleMenuItem[]
}

export function SidesSection({ items }: SidesSectionProps) {
  return (
    <section id="sides" className="flex flex-col gap-6">
      <h2
        className="text-3xl font-black text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Sides
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {items.map((item) => (
          <Card key={item.id} className="bg-card border-border text-center">
            <CardHeader className="pb-2 pt-5">
              <CardTitle
                className="text-foreground text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-5">
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
