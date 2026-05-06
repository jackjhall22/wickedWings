import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { PizzaCategory } from "@/api/types"

interface PizzaSectionProps {
  pizza: PizzaCategory
}

export function PizzaSection({ pizza }: PizzaSectionProps) {
  return (
    <section id="pizza" className="flex flex-col gap-8">
      <div>
        <h2 className="font-display text-3xl font-black text-foreground">
          Pizza
        </h2>
        <p className="text-sm text-muted-foreground mt-1">One topping pizza — build your own or go specialty.</p>
      </div>

      {/* Size pricing */}
      <div className="grid grid-cols-3 gap-4">
        {pizza.sizes.map((s) => (
          <Card key={s.label} className="bg-card border-border text-center">
            <CardHeader className="pb-2 pt-6">
              <CardTitle className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                {s.label} ({s.size})
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <span className="font-display text-2xl font-black text-accent">
                ${s.basePrice.toFixed(2)}
              </span>
              <p className="text-xs text-muted-foreground mt-1">
                +${s.extraToppingPrice.toFixed(2)} per extra topping
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Sauces
          </h3>
          <div className="flex flex-wrap gap-2">
            {pizza.sauces.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Crusts
          </h3>
          <div className="flex flex-wrap gap-2">
            {pizza.crusts.map((c) => (
              <Badge key={c} variant="secondary">{c}</Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Toppings
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {[...pizza.toppings.meats, ...pizza.toppings.fruitsAndVegetables, ...pizza.toppings.cheese].map((t) => (
              <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      {/* Specialty pizzas */}
      <div className="flex flex-col gap-4">
        <h3 className="font-display text-lg font-bold text-foreground">
          Specialty Pizzas
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pizza.specialtyPizzas.map((sp) => (
            <Card key={sp.id} className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-foreground text-base">
                  {sp.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {sp.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {sp.prices.map((p) => (
                    <span key={p.size} className="text-sm">
                      <span className="text-muted-foreground">{p.size}</span>{" "}
                      <span className="font-display font-bold text-accent">
                        ${p.price.toFixed(2)}
                      </span>
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
