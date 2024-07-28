import usePlatforms, { Platform } from "./usePlatforms"

const usePlatform = (id: number | undefined): Platform | undefined => {
  const {data: platformsData} = usePlatforms()
  return platformsData?.results.find((platform) => platform.id === id)
}

export default usePlatform