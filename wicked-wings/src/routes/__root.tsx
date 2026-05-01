import { createRootRoute, Outlet } from "@tanstack/react-router"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { MobileBottomNav } from "@/components/layout/MobileBottomNav"
import { Toaster } from "@/components/ui/sonner"

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main-content" className="flex-1 pb-14 md:pb-0">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <MobileBottomNav />
      <Toaster />
    </>
  )
}
