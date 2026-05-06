export function AboutSection() {
  return (
    <section className="py-20 bg-background" aria-label="About Wicked Wings">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-6">
            <h2
              className="font-display text-4xl font-black leading-tight text-foreground border-l-4 border-primary pl-5"
            >
              More Than a
              <br />
              <span className="text-primary">Sports Bar</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Wicked Wings Slaughter is Austin's home for wing lovers and sports fanatics
              alike. Nestled on Slaughter Lane, we bring the heat — from our fire-tested
              wing flavors to the energy in the room on game night.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're coming for the Widowmaker challenge, a cold draft with your
              crew, or karaoke night with friends, the vibe is always right. Daily 11AM–2AM,
              no slowing down.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { label: "Wing Flavors", value: "4+" },
                { label: "Screens", value: "20+" },
                { label: "Drafts on Tap", value: "3" },
                { label: "Weekly Events", value: "5" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    className="font-display text-3xl font-black text-primary"
                  >
                    {value}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border aspect-[4/3] transition-transform duration-500 hover:scale-[1.02] cursor-default">
            <img
              src="/images/storefront.png"
              alt="Wicked Wings Slaughter storefront at night with neon signage"
              className="absolute inset-0 size-full object-cover object-center"
            />
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: "inset 0 0 40px rgba(255,87,26,0.15)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
