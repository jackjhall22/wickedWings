import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NotifyMeDialog } from "./NotifyMeDialog"
import type { RecurringEvent } from "@/api/types"

const accentColorMap: Record<RecurringEvent["accentColor"], string> = {
  primary: "var(--primary)",
  destructive: "var(--destructive)",
  accent: "var(--accent)",
}

interface EventCardProps {
  event: RecurringEvent
}

export function EventCard({ event }: EventCardProps) {
  const color = accentColorMap[event.accentColor]

  return (
    <article
      className="relative overflow-hidden rounded-2xl border border-border bg-card flex"
      style={{ minHeight: 200 }}
    >
      {/* Diagonal hatch SVG pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M0 0l20 20M-5 15l10 10M15-5l10 10'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Left colored stripe */}
      <div
        className="w-1.5 shrink-0 rounded-l-2xl"
        style={{ background: color }}
      />

      <div className="flex flex-col justify-between gap-4 p-6 flex-1">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color, fontFamily: "var(--font-display)" }}
            >
              {event.day}
            </span>
            <span className="text-sm text-muted-foreground">@ {event.time}</span>
          </div>
          <h3
            className="text-xl font-black text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {event.title}
          </h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {event.description}
        </p>

        <NotifyMeDialog eventId={event.id} eventTitle={event.title}>
          <Button variant="outline" size="sm" className="self-start">
            <Bell data-icon="inline-start" />
            NOTIFY ME
          </Button>
        </NotifyMeDialog>
      </div>
    </article>
  )
}
