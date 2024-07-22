import { useQuery } from "@tanstack/react-query"
import { GameQuery } from "../App"
import apiClient from "../services/api-client"
import { FetchResponse } from "../services/api-client"
import { Platform } from "./usePlatforms"

export type Game = {
  id: number,
  name: string,
  background_image: string,
  parent_platforms: { platform: Platform }[],
  metacritic: number,
  rating_top: number, // 1 | 2 | 3 | 4 | 5
  genres: [
    {
      id: number,
    }
  ]
}

const useGames = (gameQuery: GameQuery) => 
  useQuery({
    queryKey: ['games', gameQuery], // <-- anytime any of these values change reactQuery will re-fetch
    queryFn: () => 
      apiClient
        .get<FetchResponse<Game>>(`/games`, 
          { 
            params: { 
              genres: gameQuery.genre?.id, 
              parent_platforms: gameQuery.platform?.id, 
              ordering: gameQuery.sortOrder, 
              search: gameQuery.search 
            }
          })
        .then(res => res.data),
    staleTime: 5*60*60*1000, // 5m 
 })


export default useGames