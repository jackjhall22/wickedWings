import { useMutation } from "@tanstack/react-query"
import { api } from "@/api/client"

export function useEventNotify() {
  return useMutation({
    mutationFn: (input: { eventId: string; email: string }) =>
      api.subscribeToEvent(input),
  })
}
