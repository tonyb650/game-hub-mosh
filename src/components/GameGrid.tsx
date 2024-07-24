import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"

import { GameQuery } from "../App"

interface Props {
  gameQuery: GameQuery,
}

const GameGrid = ({gameQuery}: Props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery)
  const skeletons = new Array(12).fill(0).map((_,i) => i)

  if(error) return <Text>{error.message}</Text>

  return (
    <Box padding='10px'>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} >
        {isLoading && skeletons.map((skeleton) => 
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer>
        )}
        {data?.pages.map((page) => page.results.map((game) => 
          <GameCardContainer key={game.id}>
            <GameCard   game={game}/>
          </GameCardContainer>
        ))}
      </SimpleGrid>
      {hasNextPage && <Button onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>}
    </Box>
  )
}

export default GameGrid