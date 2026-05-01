import { createFileRoute } from "@tanstack/react-router"
import { Hero } from "@/components/landing/Hero"
import { AboutSection } from "@/components/landing/AboutSection"
import { MenuTeaser } from "@/components/landing/MenuTeaser"

export const Route = createFileRoute("/")({
  component: LandingPage,
})

function LandingPage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MenuTeaser />
    </>
  )
}
