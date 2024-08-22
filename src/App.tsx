import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
// import { useState } from "react";
// import { Genre } from "./hooks/useGenres";
import PlatformPicker from "./components/PlatformPicker";
import SortPicker from "./components/SortPicker";
import GameHeading from "./components/GameHeading";
// import useGameQueryStore from "./store";

// import { Platform } from "./hooks/usePlatforms";


// interface GameQuery {
//   genreId?: number,
//   // platform: Platform | null,
//   platformId?: number,
//   sortOrder: string,
//   search: string,
//   // page: number,
//   page_size: number,
// }
// Problems: 
// 1a. prop drilling of gameQuery object (App -> NavBar -> SearchInput)
// 1b. Sharing gameQuery property via props as well (GenreList)
// 2. Logic for updated gameQuery object is spread into multiple places: onSelectSearch, onSelectGenre, onSelectPlatform, onSelectSortOrder, etc.

// We could use a context & reducer BUT context will cause ALL components to rerender upon any change of context = UNNECESSARY RENDERS!

// Solution: use a state management library: Zustand!

function App() {
  // const [ gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery) 

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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area='aside' px={5}>
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem area='main'>
          <Box paddingLeft={2}>
            <GameHeading/>
            <HStack spacing={5} marginBottom={3}>
              <PlatformPicker />
              <SortPicker />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
