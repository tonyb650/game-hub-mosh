import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
// import { Genre } from "../hooks/useGenres";

type Props = {
  selectedGenreId?: number,
  onSelectGenre: (genre: number) => void,
}

const GenreList = ({selectedGenreId, onSelectGenre}: Props) => {
  const {data, error, isLoading} = useGenres()

  if (isLoading) return <Spinner/>
  if (error) return null

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((genre) => 
          <ListItem key={genre.id} py='5px' >
            <HStack>
              <Image boxSize='32px' objectFit='cover' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} variant='link' fontSize='lg' onClick={() => onSelectGenre(genre.id)}> {genre.name}</Button>
            </HStack>
          </ListItem>
        )}
      </List>
    </>
  )
}

export default GenreList