import { Flame } from "lucide-react"

const levels = [
  { level: 1, label: "Rookie" },
  { level: 2, label: "Starter" },
  { level: 3, label: "Pro" },
  { level: 4, label: "All-Star" },
  { level: 5, label: "Hall of Flame" },
]

export function HeatScaleLegend() {
  return (
    <div className="flex flex-wrap gap-4">
      {levels.map(({ level, label }) => (
        <div key={level} className="flex items-center gap-2">
          <Flame
            className={`size-4${level === 5 ? " animate-pulse" : ""}`}
            style={{ color: `var(--heat-${level})` }}
          />
          <span className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{level}</span> — {label}
          </span>
        </div>
      ))}
    </div>
  )
}
