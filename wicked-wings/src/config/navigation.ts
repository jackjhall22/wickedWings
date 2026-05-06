import { Home, UtensilsCrossed, Calendar } from "lucide-react"

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/events", label: "Events" },
] as const

export const navItemsWithIcons = [
  { to: "/", label: "Home", icon: Home },
  { to: "/menu", label: "Menu", icon: UtensilsCrossed },
  { to: "/events", label: "Events", icon: Calendar },
] as const
