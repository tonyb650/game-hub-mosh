const getCroppedImageUrl = (url: string):string => {
  const target = 'media/'
  const index = url.indexOf(target) + target.length
  let croppedImageUrl = url.substring(0,index)
  croppedImageUrl += "crop/600/400/"
  croppedImageUrl += url.substring(index)
  return croppedImageUrl
}

export default getCroppedImageUrl