import { Menu, MenuButton, Button, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'
import useGameQueryStore from '../store'

const PlatformPicker = () => {
  const {data: platforms, error} = usePlatforms()
  
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = usePlatform(selectedPlatformId)

  const setPlatformId = useGameQueryStore(s => s.setPlatformId)

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{ platform?.name || "Platforms"}</MenuButton>
      <MenuList backgroundColor='black'>
        {platforms?.results.map((platform) =>
          <MenuItem onClick={() => setPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default PlatformPicker