import { Link } from "@tanstack/react-router"
import { Home, UtensilsCrossed, Calendar, Phone } from "lucide-react"

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/menu", label: "Menu", icon: UtensilsCrossed },
  { to: "/events", label: "Events", icon: Calendar },
  { to: "/contact", label: "Contact", icon: Phone },
]

export function MobileBottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background md:hidden pb-[env(safe-area-inset-bottom)]"
      aria-label="Bottom navigation"
    >
      <div className="flex items-center justify-around h-14">
        {navItems.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center gap-1 px-3 py-1 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{
              className:
                "flex flex-col items-center gap-1 px-3 py-1 text-primary transition-colors",
            }}
          >
            <Icon className="size-5" />
            <span className="text-[10px] font-medium leading-none">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
