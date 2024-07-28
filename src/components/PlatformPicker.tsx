import { Menu, MenuButton, Button, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'

type Props = {
  selectedPlatformId?: number,
  onSelectPlatform: (platform: number) => void,
}
const PlatformPicker = ({onSelectPlatform, selectedPlatformId}: Props) => {
  const {data: platforms, error} = usePlatforms()
  const platform = usePlatform(selectedPlatformId)

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{ platform?.name || "Platforms"}</MenuButton>
      <MenuList backgroundColor='black'>
        {platforms?.results.map((platform) =>
          <MenuItem onClick={() => onSelectPlatform(platform.id)} key={platform.id}>{platform.name}</MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default PlatformPicker