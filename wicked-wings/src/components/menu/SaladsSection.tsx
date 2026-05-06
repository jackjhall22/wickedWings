import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { SimpleMenuItem } from "@/api/types"

interface SaladsSectionProps {
  items: SimpleMenuItem[]
}

export function SaladsSection({ items }: SaladsSectionProps) {
  return (
    <section id="salads" className="flex flex-col gap-6">
      <div>
        <h2
          className="text-3xl font-black text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Salads
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Served with Ranch, Blue Cheese, Caesar, Honey Mustard or any Wing Sauce.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
