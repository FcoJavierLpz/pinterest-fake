import { useEffect, useState } from 'react'
import { IGallery } from '../interfaces/IGallery'
import { getGallery } from '../services/gallery'
import ImageCard from './ImageCard'

const Gallery = () => {
  const [gallery, setGallery] = useState<IGallery | null>(null)

  useEffect(() => {
    const fetchGallery = async () => {
      const { data } = await getGallery()
      setGallery(data)
    }

    fetchGallery()
  }, [])

  return (
    <div className="gap-6 pt-2 columns-3xs">
      {gallery?.data?.map(subreddit =>
        subreddit?.images?.map(image => (
          <ImageCard key={image.id} img={image} />
        ))
      )}
    </div>
  )
}

export default Gallery
