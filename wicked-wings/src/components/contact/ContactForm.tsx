import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { useContact } from "@/api/hooks/useContact"

const subjects = [
  { value: "general", label: "General Inquiry" },
  { value: "large-party", label: "Large Party Booking" },
  { value: "feedback", label: "Feedback" },
  { value: "events-ufc", label: "Events / UFC PPV" },
]

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const mutation = useContact()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    mutation.mutate(
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      {
        onSuccess: () => {
          toast.success("Message sent!", {
            description: "We'll get back to you as soon as possible.",
          })
          setForm({ name: "", email: "", subject: "", message: "" })
        },
      }
    )
  }

  return (
    <Card className="bg-card border-border h-full">
      <CardHeader>
        <CardTitle
          className="text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Send Us a Message
        </CardTitle>
      </CardHeader>
      <CardContent>
        {mutation.isError && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="contact-name">Name</FieldLabel>
              <Input
                id="contact-name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="contact-email">Email</FieldLabel>
              <Input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>
              <Select
                value={form.subject}
                onValueChange={(v) => setForm((f) => ({ ...f, subject: v }))}
                required
              >
                <SelectTrigger id="contact-subject">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="contact-message">Message</FieldLabel>
              <Textarea
                id="contact-message"
                placeholder="Tell us what's on your mind..."
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                rows={5}
                required
              />
            </Field>
          </FieldGroup>

          <Button
            type="submit"
            variant="default"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              "Sending…"
            ) : (
              <>
                <Send data-icon="inline-start" />
                SEND MESSAGE
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
