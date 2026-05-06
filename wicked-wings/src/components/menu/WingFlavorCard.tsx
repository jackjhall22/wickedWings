import { ChiliPepperIcon } from "@/components/icons/ChiliPepperIcon"
import { SkullCrossbonesIcon } from "@/components/icons/SkullCrossbonesIcon"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { WingFlavor } from "@/api/types"

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
          <CardTitle
            className="text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
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
                  style={{ color: "#ef4444" }}
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
