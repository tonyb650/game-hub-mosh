import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformPicker from "./components/PlatformPicker";
import { Platform } from "./hooks/useGames";
import SortPicker from "./components/SortPicker";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null,
  sortOrder: string,
  search: string,
}

function App() {
  const [ gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery) 

  return (
    <>

      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // > 1024 px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
      >
        <GridItem area='nav'>
          <NavBar onSelectSearch={(searchString) => setGameQuery({...gameQuery, search: searchString}) } />
        </GridItem>
        <Show above="lg">
          <GridItem area='aside' px={5}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) =>  setGameQuery({...gameQuery, genre: genre})}/>
          </GridItem>
        </Show>
        <GridItem area='main'>
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery}/>
            <HStack spacing={5} marginBottom={3}>
              <PlatformPicker selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform: platform})}/>
              <SortPicker selectedSortOrder={gameQuery.sortOrder} onSelectSort={(sortValue) => setGameQuery({...gameQuery, sortOrder: sortValue})}/>
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
