import { useQuery } from "@tanstack/react-query"
import { api } from "@/api/client"

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => api.listEvents(),
    staleTime: 1000 * 60 * 5,
  })
}
