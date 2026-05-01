import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "sonner"
import { useReservation } from "@/api/hooks/useReservation"

interface BookATableDialogProps {
  children: React.ReactNode
}

const timeOptions = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM",
]

export function BookATableDialog({ children }: BookATableDialogProps) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    partySize: "",
    date: "",
    time: "",
    notes: "",
  })
  const mutation = useReservation()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    mutation.mutate(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        partySize: Number(form.partySize),
        date: form.date,
        time: form.time,
        notes: form.notes,
      },
      {
        onSuccess: () => {
          toast.success("Reservation submitted!", {
            description: `We'll see you ${form.date} at ${form.time}. Check your email for confirmation.`,
          })
          setOpen(false)
          setForm({ name: "", email: "", phone: "", partySize: "", date: "", time: "", notes: "" })
        },
      }
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)} style={{ display: "contents" }}>
        {children}
      </div>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "var(--font-display)" }}>
            Book a Table
          </DialogTitle>
          <DialogDescription>
            Reserve your spot at Wicked Wings Slaughter.
          </DialogDescription>
        </DialogHeader>

        {mutation.isError && (
          <Alert variant="destructive">
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="book-name">Name</FieldLabel>
              <Input
                id="book-name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="book-email">Email</FieldLabel>
              <Input
                id="book-email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="book-phone">Phone</FieldLabel>
              <Input
                id="book-phone"
                type="tel"
                placeholder="(512) 555-0100"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="book-party">Party Size</FieldLabel>
              <Select
                value={form.partySize}
                onValueChange={(v) => setForm((f) => ({ ...f, partySize: v }))}
                required
              >
                <SelectTrigger id="book-party">
                  <SelectValue placeholder="Select party size" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n} {n === 1 ? "person" : "people"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="book-date">Date</FieldLabel>
              <Input
                id="book-date"
                type="date"
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="book-time">Time</FieldLabel>
              <Select
                value={form.time}
                onValueChange={(v) => setForm((f) => ({ ...f, time: v }))}
                required
              >
                <SelectTrigger id="book-time">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeOptions.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="book-notes">Notes</FieldLabel>
              <FieldDescription>
                Special requests, allergies, or anything else we should know.
              </FieldDescription>
              <Textarea
                id="book-notes"
                placeholder="Any special requests..."
                value={form.notes}
                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                rows={3}
              />
            </Field>
          </FieldGroup>

          <Button
            type="submit"
            variant="default"
            disabled={mutation.isPending}
            className="mt-2"
          >
            {mutation.isPending ? "Submitting…" : "BOOK MY TABLE"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
