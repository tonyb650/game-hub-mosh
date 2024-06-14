const getCroppedImageUrl = (url: string):string => {
  if (!url) return ""
  const target = 'media/'
  const index = url.indexOf(target) + target.length
  let croppedImageUrl = url.substring(0,index)
  croppedImageUrl += "crop/600/400/"
  croppedImageUrl += url.substring(index)
  return croppedImageUrl
}

export default getCroppedImageUrl