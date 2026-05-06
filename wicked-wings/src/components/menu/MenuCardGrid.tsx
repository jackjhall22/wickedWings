import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { SimpleMenuItem } from "@/api/types"

interface MenuCardGridProps {
  id: string
  title: string
  subtitle?: string
  items: SimpleMenuItem[]
  columns?: string
  cardStyle?: "full" | "compact"
  headerSlot?: React.ReactNode
}

export function MenuCardGrid({
  id,
  title,
  subtitle,
  items,
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
  cardStyle = "full",
  headerSlot,
}: MenuCardGridProps) {
  return (
    <section id={id} className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-3">
          <h2 className="font-display text-3xl font-black text-foreground">
            {title}
          </h2>
          {headerSlot}
        </div>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      <div className={`grid gap-4 ${columns}`}>
        {items.map((item) => (
          <Card key={item.id} className={`bg-card border-border ${cardStyle === "compact" ? "text-center" : ""}`}>
            <CardHeader className={cardStyle === "compact" ? "pb-2 pt-5" : "pb-2"}>
              <CardTitle className={`font-display text-foreground ${cardStyle === "compact" ? "text-sm" : "text-base"}`}>
                {item.name}
              </CardTitle>
              {cardStyle === "full" && item.description && (
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className={cardStyle === "compact" ? "pb-5" : undefined}>
              <span className="font-display text-xl font-bold text-accent">
                ${item.price.toFixed(2)}
              </span>
              {cardStyle === "full" && item.badge && (
                <span className="ml-2 text-xs text-muted-foreground">{item.badge}</span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
