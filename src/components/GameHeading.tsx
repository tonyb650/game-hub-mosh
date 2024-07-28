import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import usePlatform from "../hooks/usePlatform"
import useGenre from "../hooks/useGenre"
interface Props {
  gameQuery: GameQuery,
}
const GameHeading = ({gameQuery}: Props) => {
  const platform = usePlatform(gameQuery.platformId)
  const genre = useGenre(gameQuery.genreId)
  let heading = `${genre?.name ? genre?.name : "" } ${platform?.name ? platform.name: ""} Games`

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading