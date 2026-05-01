import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useEvents } from "@/api/hooks/useEvents"
import { EventCard } from "./EventCard"

function EventCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 min-h-[200px]">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-9 w-32" />
    </div>
  )
}

export function EventsPage() {
  const { data, isLoading } = useEvents()

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero */}
      <section className="mb-12 flex flex-col gap-4" aria-label="Events hero">
        <div className="flex flex-wrap items-center gap-4">
          <h1
            className="text-5xl font-black text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            THE <span className="text-primary">LINEUP</span>
          </h1>
          <Badge variant="destructive" className="text-sm animate-pulse px-3 py-1">
            Always Loud
          </Badge>
        </div>
        <p className="text-muted-foreground max-w-lg">
          Weekly events to keep the energy going. From karaoke nights to DJ sets and
          cornhole tournaments — there's always something happening at Wicked Wings.
        </p>
      </section>

      {/* Event grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => <EventCardSkeleton key={i} />)
          : data?.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  )
}
