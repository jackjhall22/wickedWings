import { Link } from "@tanstack/react-router"
import { Menu, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BookATableDialog } from "@/components/booking/BookATableDialog"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <UtensilsCrossed className="size-6 text-primary" />
          <span
            className="text-lg font-bold text-foreground leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            WICKED WINGS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm font-medium text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <BookATableDialog>
            <Button variant="default" size="sm">
              BOOK A TABLE
            </Button>
          </BookATableDialog>
        </div>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <nav className="flex flex-col gap-4 pt-8" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
                  activeProps={{ className: "text-base font-medium text-foreground py-1" }}
                >
                  {link.label}
                </Link>
              ))}
              <BookATableDialog>
                <Button variant="default" className="mt-4">
                  BOOK A TABLE
                </Button>
              </BookATableDialog>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
