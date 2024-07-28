import useGenres from "./useGenres"

const useGenre = (id: number | undefined) => {
  const {data: genreData} = useGenres() 
  return genreData?.results.find((genre) => genre.id === id)
}

export default useGenre