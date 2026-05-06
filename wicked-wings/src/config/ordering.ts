import { Truck, ShoppingBag, Phone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface OrderProvider {
  id: string
  name: string
  description: string
  url: string
  icon: LucideIcon
}

export const orderProviders: OrderProvider[] = [
  {
    id: "doordash",
    name: "DoorDash",
    description: "Delivery to your door",
    url: "https://www.doordash.com/store/wicked-wings-austin-868621/33107147/?delivery=true",
    icon: Truck,
  },
  {
    id: "toast",
    name: "Toast",
    description: "Order pickup or delivery",
    url: "https://www.toasttab.com/local/order/wicked-wings-sports-bar-south-austin-615-w-slaughter-lane/r-445ccb3e-7d88-429c-9bad-275e930d5758",
    icon: ShoppingBag,
  },
  {
    id: "phone",
    name: "Call to Order",
    description: "Pick-up orders by phone",
    url: "tel:5125208029",
    icon: Phone,
  },
]
