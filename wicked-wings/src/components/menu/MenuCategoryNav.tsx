import { useEffect, useState } from "react"

const sections = [
  { id: "wings", label: "Wings" },
  { id: "appetizers", label: "Appetizers" },
  { id: "burgers", label: "Burgers & Mains" },
  { id: "drafts", label: "Drafts" },
  { id: "cocktails", label: "Cocktails" },
]

export function MenuCategoryNav() {
  const [activeId, setActiveId] = useState("wings")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id)
            }
          })
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      {/* Desktop sticky sidebar */}
      <nav
        className="hidden md:flex flex-col gap-1 sticky top-24 self-start"
        aria-label="Menu sections"
      >
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeId === id
                ? "bg-primary/10 text-primary border-l-2 border-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Mobile horizontal scroll nav */}
      <nav
        className="md:hidden flex gap-2 overflow-x-auto pb-2 sticky top-16 bg-background z-20 py-3"
        aria-label="Menu sections"
      >
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              activeId === id
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {label}
          </button>
        ))}
      </nav>
    </>
  )
}
