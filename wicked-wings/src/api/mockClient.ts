import type { WingsApi, MenuData, RecurringEvent } from "@/api/types"
import { menuFixture } from "@/api/fixtures/menu"
import { eventsFixture } from "@/api/fixtures/events"

function delay(ms = 400) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
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
}
