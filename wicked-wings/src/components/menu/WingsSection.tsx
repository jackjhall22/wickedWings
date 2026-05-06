import { WingFlavorCard } from "./WingFlavorCard"
import type { WingsCategory } from "@/api/types"
import { Badge } from "@/components/ui/badge"

interface WingsSectionProps {
  wings: WingsCategory
}

export function WingsSection({ wings }: WingsSectionProps) {
  return (
    <section id="wings" className="flex flex-col gap-8">
      <div>
        <h2 className="font-display text-3xl font-black text-foreground mb-2">
          Wings
        </h2>
        <p className="text-muted-foreground">{wings.note}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {wings.styles.map((style) => (
            <Badge key={style} variant="secondary">
              {style}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Choose Your Flavor
        </h3>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">🌶️ = Heat Level</span>
          <span>0 = No Heat</span>
          <span>5 = Extreme</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {wings.flavors.map((flavor) => (
          <WingFlavorCard key={flavor.id} flavor={flavor} />
        ))}
      </div>
    </section>
  )
}
