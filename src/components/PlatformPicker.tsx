import { Menu, MenuButton, Button, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

type Props = {
  selectedPlatform: Platform | null,
  onSelectPlatform: (platform: Platform) => void,
}
const PlatformPicker = ({onSelectPlatform, selectedPlatform}: Props) => {
  const {data: platforms, error} = usePlatforms()

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{ selectedPlatform?.name || "Platforms"}</MenuButton>
      <MenuList>
        {platforms && platforms.map((platform) =>
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default PlatformPicker