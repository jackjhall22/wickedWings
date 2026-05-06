import { ChiliPepperIcon } from "@/components/icons/ChiliPepperIcon"
import { SkullCrossbonesIcon } from "@/components/icons/SkullCrossbonesIcon"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { WingFlavor } from "@/api/types"

const heatColors: Record<number, string> = {
  1: "var(--heat-1)",
  2: "var(--heat-2)",
  3: "var(--heat-3)",
  4: "var(--heat-4)",
  5: "var(--heat-5)",
}

interface WingFlavorCardProps {
  flavor: WingFlavor
}

export function WingFlavorCard({ flavor }: WingFlavorCardProps) {
  const isTopHeat = flavor.heatLevel === 5

  return (
    <Card
      className={`bg-card transition-shadow duration-300 hover:shadow-[0_0_16px_var(--primary)] ${
        isTopHeat ? "border-destructive" : "border-border"
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="font-display text-foreground">
            {flavor.name}
          </CardTitle>
          <div className="flex items-center gap-2 shrink-0">
            {flavor.category === "dry" && (
              <Badge variant="outline" className="text-xs">
                Dry Rub
              </Badge>
            )}
            {isTopHeat && (
              <Badge variant="destructive" className="shrink-0 animate-pulse">
                Extreme Heat
              </Badge>
            )}
          </div>
        </div>
        {flavor.highlight === "hall-of-flame" && (
          <span className="text-xs font-semibold text-destructive uppercase tracking-widest">
            ☠ Hall of Flame
          </span>
        )}
        {flavor.heatLevel > 0 && (
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: flavor.heatLevel }).map((_, i) => {
              const Icon = isTopHeat ? SkullCrossbonesIcon : ChiliPepperIcon
              return (
                <Icon
                  key={i}
                  className={`size-4 ${isTopHeat ? "animate-pulse" : ""}`}
                  style={{ color: heatColors[flavor.heatLevel] }}
                />
              )
            })}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {flavor.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
