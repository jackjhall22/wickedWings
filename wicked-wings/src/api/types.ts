export type HeatLevel = 1 | 2 | 3 | 4 | 5

export interface WingFlavor {
  id: string
  name: string
  description: string
  heatLevel: HeatLevel
  requiresWaiver?: boolean
  highlight?: string
}

export interface WingsPricingTier {
  label: string
  pieces: number
  price: number
}

export interface WingsCategory {
  pricingTiers: WingsPricingTier[]
  flavors: WingFlavor[]
}

export interface SimpleMenuItem {
  id: string
  name: string
  description?: string
  price: number
  badge?: string
}

export interface DraftBeer {
  id: string
  name: string
  description?: string
  price16oz: number
  price22oz: number
  isLocal?: boolean
}

export interface Cocktail {
  id: string
  name: string
  description?: string
  price: number
}

export interface MenuData {
  wings: WingsCategory
  appetizers: SimpleMenuItem[]
  burgers: SimpleMenuItem[]
  drafts: DraftBeer[]
  cocktails: Cocktail[]
}

export interface RecurringEvent {
  id: string
  day: string
  time: string
  title: string
  description: string
  accentColor: "primary" | "destructive" | "accent"
}

export interface ReservationInput {
  name: string
  email: string
  phone?: string
  partySize: number
  date: string
  time: string
  notes?: string
}

export interface Reservation {
  id: string
  createdAt: string
  input: ReservationInput
}

export interface NotifySubscription {
  id: string
  eventId: string
  email: string
  createdAt: string
}

export interface ContactInput {
  name: string
  email: string
  subject: string
  message: string
}

export interface WingsApi {
  getMenu(): Promise<MenuData>
  listEvents(): Promise<RecurringEvent[]>
  createReservation(input: ReservationInput): Promise<Reservation>
  subscribeToEvent(input: { eventId: string; email: string }): Promise<NotifySubscription>
  submitContactMessage(input: ContactInput): Promise<{ id: string }>
}
