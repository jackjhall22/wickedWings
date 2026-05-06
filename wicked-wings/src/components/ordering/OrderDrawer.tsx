import { ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { orderProviders } from "@/config/ordering"

interface OrderDrawerProps {
  children: React.ReactNode
}

export function OrderDrawer({ children }: OrderDrawerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-lg">Order Takeout</DialogTitle>
          <DialogDescription>
            Choose how you'd like to place your order.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-2">
          {orderProviders.map((provider) => {
            const Icon = provider.icon
            const isExternal = !provider.url.startsWith("tel:")
            return (
              <a
                key={provider.id}
                href={provider.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-sm font-semibold text-foreground">
                    {provider.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {provider.description}
                  </p>
                </div>
                {isExternal && (
                  <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
                )}
              </a>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
