import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useMenu } from "@/api/hooks/useMenu"

function TeaserCardSkeleton() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full mt-2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-1/3" />
      </CardContent>
    </Card>
  )
}

export function MenuTeaser() {
  const { data, isLoading } = useMenu()

  const featured = data
    ? [
        {
          label: "Fan Favorite Wing",
          name: data.wings.flavors.find((f) => f.id === "buffalo")?.name ?? data.wings.flavors[0].name,
          description: data.wings.flavors.find((f) => f.id === "buffalo")?.description ?? data.wings.flavors[0].description,
          price: "Market Price",
        },
        {
          label: "Starter",
          name: data.starters[0].name,
          description: data.starters[0].description ?? "",
          price: `$${data.starters[0].price.toFixed(2)}`,
        },
        {
          label: "Signature Burger",
          name: data.burgers[0].name,
          description: data.burgers[0].description ?? "",
          price: `$${data.burgers[0].price.toFixed(2)}`,
        },
      ]
    : []

  return (
    <section className="py-20 bg-card/50" aria-label="Menu highlights">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2
            className="font-display text-4xl font-black text-foreground"
          >
            Fuel the <span className="text-primary">Fire</span>
          </h2>
          <p className="text-muted-foreground max-w-md">
            A taste of what's waiting for you. The full menu has plenty more heat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => <TeaserCardSkeleton key={i} />)
            : featured.map((item) => (
                <Card
                  key={item.name}
                  className="bg-card border-border transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(255,87,26,0.2)]"
                >
                  <CardHeader>
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {item.label}
                    </span>
                    <CardTitle
                      className="font-display text-foreground mt-1"
                    >
                      {item.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <span
                      className="font-display text-lg font-bold text-accent"
                    >
                      {item.price}
                    </span>
                  </CardFooter>
                </Card>
              ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/menu">
              See Full Menu
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
