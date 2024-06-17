import noImage from '../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url: string):string => {
  if (!url) return noImage
  const target = 'media/'
  const index = url.indexOf(target) + target.length
  let croppedImageUrl = url.substring(0,index)
  croppedImageUrl += "crop/600/400/"
  croppedImageUrl += url.substring(index)
  return croppedImageUrl
}

export default getCroppedImageUrl