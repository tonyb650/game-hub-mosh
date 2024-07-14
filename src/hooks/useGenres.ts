// import useData from "./useData"
import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres"
import { FetchResponse } from "./useData"
import apiClient from "../services/api-client"


export type Genre = {
  id: number,
  name: string,
  image_background: string,
}


const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => 
    apiClient
      .get<FetchResponse<Genre>>('/genres')
      .then((res) => {console.log(res); return res.data}),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: {count: genres.length, results: genres},
})

export default useGenres