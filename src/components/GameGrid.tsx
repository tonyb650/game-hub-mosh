import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"

import { GameQuery } from "../App"

interface Props {
  gameQuery: GameQuery,
}

const GameGrid = ({gameQuery}: Props) => {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = new Array(12).fill(0).map((_,i) => i)

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding='10px'>
        {isLoading && skeletons.map((skeleton) => 
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
          
        </GameCardContainer>
        )}
        {data && data.map((game) => 
          <GameCardContainer key={game.id}>
            <GameCard   game={game}/>
          </GameCardContainer>

        )}
      </SimpleGrid>
    </div>
  )
}

export default GameGrid