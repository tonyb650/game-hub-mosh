import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { HStack, Icon, Tooltip } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { Platform } from '../hooks/usePlatforms'

type Props = {
  platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {

  const iconsMap: { [key: string]: IconType} = {
    pc : FaWindows,
    playstation : FaPlaystation,
    xbox : FaXbox,
    nintendo : SiNintendo,
    mac : FaApple,
    linux : FaLinux,
    android : FaAndroid,
    ios : MdPhoneIphone,
    web : BsGlobe,
  }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => 
        <div key={platform.id} >
          <Tooltip label={platform.slug} placement='auto'>
            <span>
              <Icon as={iconsMap[platform.slug]} color='gray.500'/>
            </span>
          </Tooltip>
        </div>
      )}
    </HStack>
  )
}

export default PlatformIconList