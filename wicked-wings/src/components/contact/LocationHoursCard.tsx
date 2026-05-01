import { MapPin, Phone, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const hours = [
  { day: "Monday – Sunday", time: "11:00 AM – 2:00 AM" },
]

export function LocationHoursCard() {
  return (
    <Card className="bg-card border-border h-full">
      <CardHeader>
        <CardTitle
          className="text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Find Us
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-foreground">Address</span>
            <span className="text-sm text-muted-foreground">
              615 West Slaughter Lane Ste 108
              <br />
              Austin, TX 78748
            </span>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="size-5 text-primary shrink-0" />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-foreground">Phone</span>
            <a
              href="tel:5125208029"
              className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
            >
              512-520-8029
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3">
          <Clock className="size-5 text-primary shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-sm font-semibold text-foreground">Hours</span>
            {hours.map((h, idx) => (
              <div key={h.day}>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{h.day}</span>
                  <span className="text-sm text-foreground font-medium">{h.time}</span>
                </div>
                {idx < hours.length - 1 && <Separator className="mt-2" />}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
