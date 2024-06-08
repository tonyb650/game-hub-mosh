import useGenres from '../hooks/useGenres'



const GenreList = () => {
  const {data, error, isLoading} = useGenres()
  return (
    <div>
      {data && data.map((genre) => 
        <p key={genre.id}>
          {genre.name}
        </p>
      )}

    </div>
  )
}

export default GenreList