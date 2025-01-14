// import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
// import NavBar from "./components/NavBar";
// import GameGrid from "./components/GameGrid";
// import GenreList from "./components/GenreList";
// import PlatformPicker from "./components/PlatformPicker";
// import SortPicker from "./components/SortPicker";
// import GameHeading from "./components/GameHeading";

// function App() {
//   // const [ gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery) 

//   return (
//     <>
//       <Grid templateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav" "aside main"` // > 1024 px
//       }}
//       templateColumns={{
//         base: '1fr',
//         lg: '200px 1fr'
//       }}
//       >
//         <GridItem area='nav'>
//           <NavBar />
//         </GridItem>
//         <Show above="lg">
//           <GridItem area='aside' px={5}>
//             <GenreList/>
//           </GridItem>
//         </Show>
//         <GridItem area='main'>
//           <Box paddingLeft={2}>
//             <GameHeading/>
//             <HStack spacing={5} marginBottom={3}>
//               <PlatformPicker />
//               <SortPicker />
//             </HStack>
//           </Box>
//           <GameGrid />
//         </GridItem>
//       </Grid>
//     </>
//   );
// }

// export default App;
