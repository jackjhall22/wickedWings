import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Cocktail } from "@/api/types"

interface CocktailsSectionProps {
  cocktails: Cocktail[]
}

export function CocktailsSection({ cocktails }: CocktailsSectionProps) {
  return (
    <section id="cocktails" className="flex flex-col gap-6">
      <h2
        className="text-3xl font-black text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Game Day Cocktails
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {cocktails.map((cocktail) => (
          <Card key={cocktail.id} className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle
                className="text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cocktail.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                {cocktail.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span
                className="text-xl font-bold text-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ${cocktail.price.toFixed(2)}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
