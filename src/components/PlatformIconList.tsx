import { Platform } from "../hooks/useGames"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { HStack, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons"

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
        <div key={platform.id}>
          {/* <Image src={FaWindows}/> */}
          <Icon as={iconsMap[platform.slug]} color='gray.500'/>
        </div>
      )}
    </HStack>
  )
}

export default PlatformIconList