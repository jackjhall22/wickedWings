import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { WingsPricingTier } from "@/api/types"

interface WingPricingTiersProps {
  tiers: WingsPricingTier[]
}

export function WingPricingTiers({ tiers }: WingPricingTiersProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {tiers.map((tier) => (
        <Card
          key={tier.label}
          className="bg-card border-border text-center"
        >
          <CardHeader className="pb-2 pt-6">
            <CardTitle
              className="text-sm font-semibold text-muted-foreground uppercase tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {tier.label}
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            <span
              className="text-3xl font-black text-accent"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ${tier.price.toFixed(2)}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
