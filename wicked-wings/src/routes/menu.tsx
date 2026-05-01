import { createFileRoute } from "@tanstack/react-router"
import { MenuPage } from "@/components/menu/MenuPage"

export const Route = createFileRoute("/menu")({
  component: MenuPage,
})
