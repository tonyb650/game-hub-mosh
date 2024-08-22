import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import InfiniteScroll from 'react-infinite-scroll-component';

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames()
  const skeletons = new Array(12).fill(0).map((_,i) => i)

  if(error) return <Text>{error.message}</Text>

  return (
    <Box padding='10px'>
      <InfiniteScroll
        dataLength={data?.pages.reduce((totalGameItems, page) => totalGameItems + page.results.length, 0) || 0} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<Spinner/>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        // }
      >
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
      </InfiniteScroll>
      {/* {hasNextPage && <Button onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>} */}
    </Box>
  )
}

export default GameGrid