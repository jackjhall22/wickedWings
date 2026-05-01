import { Flame } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { WingFlavor } from "@/api/types"

interface WingFlavorCardProps {
  flavor: WingFlavor
}

export function WingFlavorCard({ flavor }: WingFlavorCardProps) {
  const isWidowmaker = flavor.requiresWaiver

  return (
    <Card
      className={`bg-card transition-shadow duration-300 hover:shadow-[0_0_16px_var(--primary)] ${
        isWidowmaker ? "border-destructive" : "border-border"
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
          {isWidowmaker && (
            <Badge variant="destructive" className="shrink-0 animate-pulse">
              Waiver Required
            </Badge>
          )}
        </div>
        {flavor.highlight === "hall-of-flame" && (
          <span className="text-xs font-semibold text-destructive uppercase tracking-widest">
            ☠ Hall of Flame
          </span>
        )}
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Flame
              key={i}
              className={`size-4 ${i < flavor.heatLevel && flavor.heatLevel === 5 ? "animate-pulse" : ""}`}
              style={{
                color:
                  i < flavor.heatLevel
                    ? `var(--heat-${flavor.heatLevel})`
                    : "var(--muted-foreground)",
                opacity: i < flavor.heatLevel ? 1 : 0.25,
              }}
            />
          ))}
          <span className="ml-2 text-xs text-muted-foreground">
            Heat {flavor.heatLevel}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {flavor.description}
        </CardDescription>
        {isWidowmaker && (
          <p className="mt-3 text-xs text-destructive font-medium">
            ⚠ By ordering The Widowmaker, you acknowledge the extreme heat level and waive
            all responsibility. Not for the faint of heart.
          </p>
        )}
      </CardContent>
    </Card>
  )
}
