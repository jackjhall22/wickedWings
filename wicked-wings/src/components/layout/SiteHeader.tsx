import { Link } from "@tanstack/react-router"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "@/assets/logo.png"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/config/navigation"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="" className="size-10" aria-hidden="true" />
          <span
            className="brand-logo leading-none select-none"
            style={{ fontSize: "2rem" }}
          >
            Wicked Wings
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-display text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "font-display text-sm font-medium text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Spacer for alignment */}
        <div className="hidden md:block" />

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
            <nav className="flex flex-col items-center gap-4 pt-8" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-display text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-1 text-center w-full"
                  activeProps={{ className: "font-display text-base font-medium text-foreground py-1 text-center w-full" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
