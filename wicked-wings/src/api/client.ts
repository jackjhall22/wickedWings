import type { WingsApi } from "@/api/types"
import { mockClient } from "@/api/mockClient"

export const api: WingsApi =
  import.meta.env.VITE_API_MODE === "http"
    ? ((() => { throw new Error("HTTP client not implemented yet") })() as never)
    : mockClient
