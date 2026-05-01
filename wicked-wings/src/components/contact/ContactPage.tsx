import { LocationHoursCard } from "./LocationHoursCard"
import { ContactMap } from "./ContactMap"
import { ContactForm } from "./ContactForm"

export function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-10">
        <h1
          className="text-5xl font-black text-foreground mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-muted-foreground">
          Questions? Large party? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left column: location + map */}
        <div className="flex flex-col gap-6">
          <LocationHoursCard />
          <ContactMap />
        </div>

        {/* Right column: form */}
        <ContactForm />
      </div>
    </div>
  )
}
