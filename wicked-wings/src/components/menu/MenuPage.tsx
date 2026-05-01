import { Skeleton } from "@/components/ui/skeleton"
import { useMenu } from "@/api/hooks/useMenu"
import { MenuCategoryNav } from "./MenuCategoryNav"
import { WingsSection } from "./WingsSection"
import { AppetizersSection } from "./AppetizersSection"
import { BurgersSection } from "./BurgersSection"
import { DraftsSection } from "./DraftsSection"
import { CocktailsSection } from "./CocktailsSection"

function MenuSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-4">
          <Skeleton className="h-9 w-48" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, j) => (
              <Skeleton key={j} className="h-28 rounded-xl" />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function MenuPage() {
  const { data, isLoading } = useMenu()

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page header */}
      <div className="mb-10">
        <h1
          className="text-5xl font-black text-foreground mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The <span className="text-primary">Menu</span>
        </h1>
        <p className="text-muted-foreground">
          Everything you need for the perfect wing night.
        </p>
      </div>

      {isLoading ? (
        <MenuSkeleton />
      ) : data ? (
        <div className="flex flex-col gap-0 md:flex-row md:gap-8">
          {/* Category nav */}
          <aside className="w-full md:w-52 shrink-0">
            <MenuCategoryNav />
          </aside>

          {/* Content */}
          <div className="flex flex-col gap-16 flex-1 min-w-0 mt-4 md:mt-0">
            <WingsSection wings={data.wings} />
            <AppetizersSection items={data.appetizers} />
            <BurgersSection items={data.burgers} />
            <DraftsSection drafts={data.drafts} />
            <CocktailsSection cocktails={data.cocktails} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
