import { Heading } from "@chakra-ui/react"
import usePlatform from "../hooks/usePlatform"
import useGenre from "../hooks/useGenre"
import useGameQueryStore from "../store"


const GameHeading = () => {
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = usePlatform(selectedPlatformId)

  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genre = useGenre(selectedGenreId)
  
  const heading = `${genre?.name ? genre?.name : "" } ${platform?.name ? platform.name: ""} Games`

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading