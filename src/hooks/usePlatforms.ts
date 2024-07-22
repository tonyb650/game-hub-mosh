import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"

const apiClient = new APIClient<Platform>(`/platforms/lists/parents`)

export type Platform = {
  id: number,
  name: string,
  slug: string,
}

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: 30 * 24 * 60 * 60 *1000, // 1mo
})


export default usePlatforms