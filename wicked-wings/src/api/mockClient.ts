import type {
  WingsApi,
  MenuData,
  RecurringEvent,
  ReservationInput,
  Reservation,
  NotifySubscription,
  ContactInput,
} from "@/api/types"
import { menuFixture } from "@/api/fixtures/menu"
import { eventsFixture } from "@/api/fixtures/events"

function delay(ms = 400) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

function generateId() {
  return Math.random().toString(36).slice(2, 10)
}

export const mockClient: WingsApi = {
  async getMenu(): Promise<MenuData> {
    await delay()
    return menuFixture
  },

  async listEvents(): Promise<RecurringEvent[]> {
    await delay()
    return eventsFixture
  },

  async createReservation(input: ReservationInput): Promise<Reservation> {
    await delay(600)
    const reservation: Reservation = {
      id: generateId(),
      createdAt: new Date().toISOString(),
      input,
    }
    const existing = JSON.parse(localStorage.getItem("ww_reservations") ?? "[]")
    localStorage.setItem("ww_reservations", JSON.stringify([...existing, reservation]))
    return reservation
  },

  async subscribeToEvent(input: { eventId: string; email: string }): Promise<NotifySubscription> {
    await delay(500)
    const sub: NotifySubscription = {
      id: generateId(),
      eventId: input.eventId,
      email: input.email,
      createdAt: new Date().toISOString(),
    }
    const existing = JSON.parse(localStorage.getItem("ww_event_subs") ?? "[]")
    localStorage.setItem("ww_event_subs", JSON.stringify([...existing, sub]))
    return sub
  },

  async submitContactMessage(input: ContactInput): Promise<{ id: string }> {
    await delay(600)
    const id = generateId()
    const msg = { id, createdAt: new Date().toISOString(), ...input }
    const existing = JSON.parse(localStorage.getItem("ww_contact_messages") ?? "[]")
    localStorage.setItem("ww_contact_messages", JSON.stringify([...existing, msg]))
    return { id }
  },
}
