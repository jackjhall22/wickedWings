export function AboutSection() {
  return (
    <section className="py-20 bg-background" aria-label="About Wicked Wings">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-6">
            <h2
              className="text-4xl font-black leading-tight text-foreground border-l-4 border-primary pl-5"
              style={{ fontFamily: "var(--font-display)" }}
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
                    className="text-3xl font-black text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
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

          {/* Image placeholder */}
          <div
            className="relative overflow-hidden rounded-2xl bg-card border border-border aspect-[4/3] transition-transform duration-500 hover:scale-[1.02] cursor-default"
            style={{
              background:
                "linear-gradient(135deg, #1e2023 0%, #282a2d 50%, #1e2023 100%)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div
                className="text-7xl font-black text-primary/20"
                style={{ fontFamily: "var(--font-display)" }}
              >
                🔥
              </div>
              <span className="text-sm text-muted-foreground font-medium tracking-widest uppercase">
                The Wing Bar
              </span>
            </div>
            {/* Decorative neon border glow */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: "inset 0 0 40px rgba(255,87,26,0.08)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
