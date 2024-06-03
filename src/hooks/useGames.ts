import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export type Platform = {
  id: number,
  name: string,
  slug: string,
}

export type Game = {
  id: number,
  name: string,
  background_image: string,
  parent_platforms: { platform: Platform }[],
  metacritic: number,
}

export type Games = {
  count: number,
  results: Game[],
}

const useGames = () => {

  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    const controller = new AbortController()

    apiClient
      .get<Games>("/games", {signal: controller.signal})
      .then(res => setGames(res.data.results))
      .catch(err => {
        if (err instanceof CanceledError ) {
          return
        } else {
          setError(err.message)
        }
      })

    return () => {
      controller.abort()
    }
  },[])

  return { games, error }
}

export default useGames