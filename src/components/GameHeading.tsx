import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
  gameQuery: GameQuery,
}
const GameHeading = ({gameQuery}: Props) => {

  let heading = "Games"
  if (gameQuery.genre) {
    heading = gameQuery.genre.name + " " + heading
  }
  if (gameQuery.platform) {
    heading = gameQuery.platform.name + " " + heading
  }

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading