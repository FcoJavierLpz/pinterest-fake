import { useState } from 'react'
import { Image, SubReddit } from '../interfaces/IGallery'
import { getGallery, getGalleryByTags } from '../services/gallery'

const useGallery = () => {
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState<Image[]>([])

  const getImagesFromGallery = (gallery: SubReddit[] = []) =>
    gallery
      .filter(g => {
        return (
          g.images?.length && g.images.every(i => i.type.startsWith('image'))
        )
      })
      .map(el => el.images)
      .flat()

  const fetchGallery = async pageNum => {
    try {
      setLoading(true)
      const {
        data: { data: subReddit }
      } = await getGallery(pageNum)

      const filteredImages = getImagesFromGallery(subReddit)

      setImages(imgs => [...imgs, ...filteredImages])
    } finally {
      setLoading(true)
    }
  }
  const fetchGalleryByTags = async (searchQuery, pageNum) => {
    try {
      setLoading(true)
      const {
        data: {
          data: { items: subReddit }
        }
      } = await getGalleryByTags(searchQuery, pageNum)

      const searchImages = getImagesFromGallery(subReddit)

      setImages(searchImages)
    } finally {
      setLoading(false)
    }
  }

  return {
    fetchGallery,
    fetchGalleryByTags,
    images,
    loading
  }
}

export default useGallery
