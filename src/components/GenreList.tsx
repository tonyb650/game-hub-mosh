import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import { Genre } from "../hooks/useGenres";

type Props = {
  selectedGenre: Genre | null,
  onSelectGenre: (genre: Genre) => void,
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
  const {data, error, isLoading} = useGenres()

  if (isLoading) return <Spinner/>
  if (error) return null

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data && data.map((genre) => 
          <ListItem key={genre.id} py='5px' >
            <HStack>
              <Image boxSize='32px' objectFit='cover' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} variant='link' fontSize='lg' onClick={() => onSelectGenre(genre)}> {genre.name}</Button>
            </HStack>
          </ListItem>
        )}
      </List>
    </>
  )
}

export default GenreList