import { useMutation } from "@tanstack/react-query"
import { api } from "@/api/client"
import type { ContactInput } from "@/api/types"

export function useContact() {
  return useMutation({
    mutationFn: (input: ContactInput) => api.submitContactMessage(input),
  })
}
