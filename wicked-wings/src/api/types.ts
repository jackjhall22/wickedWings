export type HeatLevel = 0 | 1 | 2 | 3 | 4 | 5

export interface WingFlavor {
  id: string
  name: string
  description: string
  heatLevel: HeatLevel
  category: "wet" | "dry"
  requiresWaiver?: boolean
  highlight?: string
}

export interface WingsCategory {
  styles: string[]
  note: string
  flavors: WingFlavor[]
}

export interface SimpleMenuItem {
  id: string
  name: string
  description?: string
  price: number
  badge?: string
}

export interface SizedMenuItem {
  id: string
  name: string
  description?: string
  prices: { label: string; price: number }[]
}

export interface PizzaSize {
  label: string
  size: string
  basePrice: number
  extraToppingPrice: number
}

export interface SpecialtyPizza {
  id: string
  name: string
  description: string
  prices: { size: string; price: number }[]
}

export interface PizzaCategory {
  sizes: PizzaSize[]
  sauces: string[]
  crusts: string[]
  toppings: { meats: string[]; fruitsAndVegetables: string[]; cheese: string[] }
  specialtyPizzas: SpecialtyPizza[]
}

export interface MenuData {
  wings: WingsCategory
  starters: SimpleMenuItem[]
  burgers: SimpleMenuItem[]
  pizza: PizzaCategory
  seafood: SizedMenuItem[]
  sandwiches: SimpleMenuItem[]
  sides: SimpleMenuItem[]
  salads: SimpleMenuItem[]
  chickenEntrees: SizedMenuItem[]
  desserts: SimpleMenuItem[]
  kidsMenu: SimpleMenuItem[]
  drinks: SimpleMenuItem[]
}

export interface RecurringEvent {
  id: string
  day: string
  time: string
  title: string
  description: string
  accentColor: "primary" | "destructive" | "accent"
}

export interface WingsApi {
  getMenu(): Promise<MenuData>
  listEvents(): Promise<RecurringEvent[]>
}
