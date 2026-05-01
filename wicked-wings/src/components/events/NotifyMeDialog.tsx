import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Bell } from "lucide-react"
import { toast } from "sonner"
import { useEventNotify } from "@/api/hooks/useEventNotify"

interface NotifyMeDialogProps {
  eventId: string
  eventTitle: string
  children: React.ReactNode
}

export function NotifyMeDialog({ eventId, eventTitle, children }: NotifyMeDialogProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const mutation = useEventNotify()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    mutation.mutate(
      { eventId, email },
      {
        onSuccess: () => {
          toast.success("You're on the list!", {
            description: `We'll remind you before ${eventTitle}.`,
          })
          setOpen(false)
          setEmail("")
        },
      }
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)} style={{ display: "contents" }}>
        {children}
      </div>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "var(--font-display)" }}>
            Notify Me
          </DialogTitle>
          <DialogDescription>
            Get a reminder before {eventTitle}. We'll only send one email.
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
              <FieldLabel htmlFor="notify-email">Email</FieldLabel>
              <Input
                id="notify-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </FieldGroup>
          <Button
            type="submit"
            variant="default"
            disabled={mutation.isPending}
          >
            <Bell data-icon="inline-start" />
            {mutation.isPending ? "Subscribing…" : "NOTIFY ME"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
