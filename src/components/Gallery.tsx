import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import Loading from '../components/icons/Loading'
import { Image } from '../interfaces/IGallery'
import { getGallery } from '../services/gallery'
import ImageCard from './ImageCard'

const Gallery = () => {
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState<Image[]>([])
  const [pageNum, setPageNum] = useState(0)

  const { ref, inView } = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setPageNum(pageNum + 1)
    }
  }, [inView])

  const getImagesFromSubReddit = subReddit =>
    subReddit
      .filter(g => {
        return (
          g?.images?.length && g.images.every(i => i.type.startsWith('image'))
        )
      })
      .map(el => el.images)
      .flat()

  const fetchGallery = async () => {
    try {
      setLoading(true)
      const {
        data: { data: subRedditFromApi }
      } = await getGallery('top', 'day', pageNum)

      setImages(imgs => [...imgs, ...getImagesFromSubReddit(subRedditFromApi)])
    } finally {
      setLoading(true)
    }
  }

  useEffect(() => {
    fetchGallery()
  }, [pageNum])

  return (
    <>
      <div className="gap-6 pt-2 columns-3xs">
        {images?.map((image, index) => {
          if (images[images.length - 1].id !== image.id) {
            return <ImageCard key={`${index}${image.id}`} img={image} />
          }

          return (
            <div key={`${index}${image.id}`} ref={ref} data-inview={inView}>
              <ImageCard img={image} />
            </div>
          )
        })}
      </div>
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loading className="w-8 h-8 text-indigo-600 animate-spin" />
        </div>
      ) : null}
    </>
  )
}

export default Gallery
