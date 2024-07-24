import { useInfiniteQuery } from "@tanstack/react-query"
import { GameQuery } from "../App"
import APIClient from "../services/api-client"
import { Platform } from "./usePlatforms"

let apiClient = new APIClient<Game>(`/games`)

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
  useInfiniteQuery({
    queryKey: ['games', gameQuery], // <-- anytime any of these values change reactQuery will re-fetch
    queryFn: ({ pageParam = 1}) => apiClient.getAll( 
      { 
        params: { 
          genres: gameQuery.genre?.id, 
          parent_platforms: gameQuery.platform?.id, 
          ordering: gameQuery.sortOrder, 
          search: gameQuery.search,
          page: pageParam,
          // page_size: 20, 
        }
      })
    ,
    staleTime: 5*60*60*1000, // 5m 
    initialPageParam: 1,
    // lastPage: array of games
    // allPages: 2-dimensional array of games (each element in array is an array of games)
    // getNextPageParam should return the page number for the next fetch
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
 })


export default useGames