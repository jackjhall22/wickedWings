import { useQuery } from "@tanstack/react-query"
import { api } from "@/api/client"

export function useMenu() {
  return useQuery({
    queryKey: ["menu"],
    queryFn: () => api.getMenu(),
    staleTime: 1000 * 60 * 5,
  })
}
