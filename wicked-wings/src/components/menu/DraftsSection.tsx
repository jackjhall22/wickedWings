import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { DraftBeer } from "@/api/types"

interface DraftsSectionProps {
  drafts: DraftBeer[]
}

export function DraftsSection({ drafts }: DraftsSectionProps) {
  return (
    <section id="drafts" className="flex flex-col gap-6">
      <h2
        className="text-3xl font-black text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        On Draft
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Drafts column */}
        <div className="flex flex-col gap-4">
          <h3
            className="text-sm font-semibold text-muted-foreground uppercase tracking-wider"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Beer on Draft
          </h3>
          <div className="flex flex-col gap-2">
            {drafts.map((beer, idx) => (
              <div key={beer.id}>
                <div className="flex items-start justify-between gap-4 rounded-lg px-4 py-3 transition-colors hover:bg-card">
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {beer.name}
                      </span>
                      {beer.isLocal && (
                        <Badge variant="secondary" className="text-xs">
                          Local
                        </Badge>
                      )}
                    </div>
                    {beer.description && (
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {beer.description}
                      </span>
                    )}
                  </div>
                  <div className="text-right shrink-0 flex flex-col gap-0.5">
                    <span className="text-xs text-muted-foreground">16oz</span>
                    <span
                      className="text-base font-bold text-accent"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      ${beer.price16oz}
                    </span>
                    <span className="text-xs text-muted-foreground">22oz</span>
                    <span
                      className="text-base font-bold text-accent"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      ${beer.price22oz}
                    </span>
                  </div>
                </div>
                {idx < drafts.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing guide */}
        <div className="flex flex-col gap-4">
          <h3
            className="text-sm font-semibold text-muted-foreground uppercase tracking-wider"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Size Guide
          </h3>
          <div className="flex flex-col gap-3">
            {[
              { size: "16oz Pint", desc: "The standard. Cold and crisp." },
              { size: "22oz Bomber", desc: "Go big. Stay longer." },
            ].map(({ size, desc }) => (
              <div
                key={size}
                className="rounded-lg bg-card border border-border px-4 py-3 flex flex-col gap-1"
              >
                <span
                  className="font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {size}
                </span>
                <span className="text-sm text-muted-foreground">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
