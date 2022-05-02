import { useState } from 'react'
import { Image } from '../interfaces/IGallery'
import { getGallery, getGalleryByTags } from '../services/gallery'

const useGallery = () => {
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState<Image[]>([])

  const getImagesFromGallery = gallery =>
    gallery
      ?.filter(g => {
        return (
          g?.images?.length && g.images.every(i => i.type.startsWith('image'))
        )
      })
      .map(el => el.images)
      .flat()

  const fetchGallery = async pageNum => {
    try {
      setLoading(true)
      const {
        data: { data: subReddit }
      } = await getGallery('top', 'day', pageNum)

      setImages(imgs => {
        return [...imgs, ...getImagesFromGallery(subReddit)]
      })
    } finally {
      setLoading(true)
    }
  }
  const fetchGalleryByTags = async searchQuery => {
    try {
      setLoading(true)
      const {
        data: {
          data: { items: subReddit }
        }
      } = await getGalleryByTags(searchQuery)

      setImages(getImagesFromGallery(subReddit || []))
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
