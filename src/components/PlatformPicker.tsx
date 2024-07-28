import { Menu, MenuButton, Button, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

type Props = {
  selectedPlatformId?: number,
  onSelectPlatform: (platform: number) => void,
}
const PlatformPicker = ({onSelectPlatform, selectedPlatformId}: Props) => {
  const {data: platforms, error} = usePlatforms()

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{ platforms?.results.find((platform) => platform.id === selectedPlatformId)?.name || "Platforms"}</MenuButton>
      <MenuList backgroundColor='black'>
        {platforms?.results.map((platform) =>
          <MenuItem onClick={() => onSelectPlatform(platform.id)} key={platform.id}>{platform.name}</MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default PlatformPicker