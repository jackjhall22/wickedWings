import { WingPricingTiers } from "./WingPricingTiers"
import { HeatScaleLegend } from "./HeatScaleLegend"
import { WingFlavorCard } from "./WingFlavorCard"
import type { WingsCategory } from "@/api/types"

interface WingsSectionProps {
  wings: WingsCategory
}

export function WingsSection({ wings }: WingsSectionProps) {
  return (
    <section id="wings" className="flex flex-col gap-8">
      <div>
        <h2
          className="text-3xl font-black text-foreground mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Wings
        </h2>
        <p className="text-muted-foreground">Bone-in or boneless. Available in 4 sizes.</p>
      </div>

      <WingPricingTiers tiers={wings.pricingTiers} />

      <div className="flex flex-col gap-3">
        <h3
          className="text-sm font-semibold text-muted-foreground uppercase tracking-wider"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Heat Scale
        </h3>
        <HeatScaleLegend />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {wings.flavors.map((flavor) => (
          <WingFlavorCard key={flavor.id} flavor={flavor} />
        ))}
      </div>
    </section>
  )
}
