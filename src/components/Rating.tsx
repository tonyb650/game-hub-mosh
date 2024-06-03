import { Badge } from '@chakra-ui/react'

type Props = {
  score: number,
}
const Rating = ({score} : Props) => {
  let color = score > 90 ? 'green' : score > 80 ? 'yellow' : ''

  return (
    <Badge fontSize={'14'} colorScheme={color} borderRadius='4px' paddingX='2'>{score}</Badge>
  )
}

export default Rating