import { useMutation } from "@tanstack/react-query"
import { api } from "@/api/client"
import type { ReservationInput } from "@/api/types"

export function useReservation() {
  return useMutation({
    mutationFn: (input: ReservationInput) => api.createReservation(input),
  })
}
