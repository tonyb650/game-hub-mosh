import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenres from "../hooks/useGenres"
import usePlatforms from "../hooks/usePlatforms"

interface Props {
  gameQuery: GameQuery,
}
const GameHeading = ({gameQuery}: Props) => {
  const {data : genreData} = useGenres()
  const {data : platformData} = usePlatforms()

  let heading = "Games"
  if (gameQuery.genreId) {
    heading = genreData.results.find((genre) => genre.id === gameQuery.genreId)?.name + " " + heading
  }
  if (gameQuery.platformId && platformData) {
    heading = platformData.results.find((platform) => platform.id === gameQuery.platformId)?.name + " " + heading
  }

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading