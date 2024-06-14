import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformPicker from "./components/PlatformPicker";
import { Platform } from "./hooks/useGames";
import SortPicker from "./components/SortPicker";

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null,
  sortOrder: string,
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
          <NavBar/>
        </GridItem>
        <Show above="lg">
          <GridItem area='aside' px={5}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) =>  setGameQuery({...gameQuery, genre: genre})}/>
          </GridItem>
        </Show>
        <GridItem area='main'>
          <HStack spacing={5} paddingLeft={2} marginBottom={3}>
            <PlatformPicker selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform: platform})}/>
            <SortPicker selectedSortOrder={gameQuery.sortOrder} onSelectSort={(sortValue) => setGameQuery({...gameQuery, sortOrder: sortValue})}/>
          </HStack>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
