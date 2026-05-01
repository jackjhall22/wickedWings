import { Link } from "@tanstack/react-router"
import { Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "@/assets/logo.png"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BookATableDialog } from "@/components/booking/BookATableDialog"
import { useTheme } from "@/lib/theme"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="" className="size-8" aria-hidden="true" />
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
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm font-medium text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
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
            <nav className="flex flex-col items-center gap-4 pt-8" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-1 text-center w-full"
                  activeProps={{ className: "text-base font-medium text-foreground py-1 text-center w-full" }}
                >
                  {link.label}
                </Link>
              ))}
              <BookATableDialog>
                <Button variant="default" className="mt-4">
                  BOOK A TABLE
                </Button>
              </BookATableDialog>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="mt-2 gap-2"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
