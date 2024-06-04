import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

type Genre = {
  id: number,
  name: string,
}

type Genres = {
count: number,
results: Genre[],
}

const useGenres = () => {
  const [ genres, setGenres] =  useState<Genre[]>()
  const [ isLoading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  useEffect(()=> {
    const controller = new AbortController()
    setLoading(true)
    apiClient.get<Genres>("/genres", {signal:  controller.signal })
    .then((res)=> {
      setGenres(res.data.results)
      setLoading(false)
    })
    .catch(err => {
      if (err instanceof CanceledError) return
      setError(err.message)
      setLoading(false)
    })

    return (() => {
      controller.abort()
    })
  },[])
  return { genres, error, isLoading}
}

export default useGenres