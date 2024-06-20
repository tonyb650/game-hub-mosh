import { Image, ImageProps } from '@chakra-ui/react'
import bullsEye from '../assets/Emojis/bulls-eye.webp'
import thumbsUp from '../assets/Emojis/thumbs-up.webp'
import meh from '../assets/Emojis/meh.webp'

type Props = {
  rating: number,
}

const Emoji = ({rating} : Props) => {
  if (rating < 3) return null

  const emojiMap: {[key: number]: ImageProps} = {   // <--- thus is important typing. Called 'index signature'
    3: { src: meh, alt: 'meh', boxSize: '20px'},
    4: { src: thumbsUp, alt: 'recommended', boxSize: '20px'},
    5: { src: bullsEye, alt: 'exceptional', boxSize: '25px'},
  }

  return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji