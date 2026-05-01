import { Link } from "@tanstack/react-router"
import { UtensilsCrossed } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="size-6 text-primary" />
              <span
                className="text-lg font-bold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                WICKED WINGS
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Austin's home for championship wings, cold drafts, and pure
              vibes.
            </p>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-2">
            <h3
              className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Find Us
            </h3>
            <p className="text-sm text-muted-foreground">
              615 West Slaughter Lane Ste 108
              <br />
              Austin, TX 78748
            </p>
            <a
              href="tel:5125208029"
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              512-520-8029
            </a>
            <p className="text-sm text-muted-foreground">Daily 11AM – 2AM</p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            <h3
              className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Navigate
            </h3>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Wicked Wings Slaughter. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
