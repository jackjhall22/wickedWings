import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { BookATableDialog } from "@/components/booking/BookATableDialog"

export function Hero() {
  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-background"
      aria-label="Hero"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,87,26,0.12) 0%, transparent 70%), linear-gradient(to bottom, transparent 60%, #111316 100%)",
        }}
      />

      {/* Decorative glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 size-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,87,26,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <span
            className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Austin, TX • 615 W Slaughter Ln
          </span>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-primary"
            style={{
              fontFamily: "var(--font-display)",
              filter: "drop-shadow(0 0 24px rgba(255,87,26,0.5))",
            }}
          >
            Wings.
            <br />
            <span className="text-foreground">Drinks.</span>
            <br />
            Pure Vibes.
          </h1>
        </div>

        <p className="max-w-md text-lg text-muted-foreground leading-relaxed">
          Championship wings with heat to match. Ice cold drafts. Austin's loudest
          sports bar, open daily 11AM–2AM.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <BookATableDialog>
            <Button size="lg" variant="default" className="min-w-40">
              BOOK A TABLE
            </Button>
          </BookATableDialog>
          <Button size="lg" variant="outline" asChild className="min-w-40">
            <Link to="/menu">VIEW MENU</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
