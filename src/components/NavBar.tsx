import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'


type Props = {
  onSelectSearch: (searchString: string) => void,
}

const NavBar = ({onSelectSearch} : Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px'/>
      <SearchInput onSelectSearch={onSelectSearch}/>
      <ColorModeSwitch/>
    </HStack>

  )
}

export default NavBar