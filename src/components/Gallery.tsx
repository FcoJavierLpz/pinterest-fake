import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import Loading from '../components/icons/Loading'
import useGallery from '../hooks/useGallery'
import ImageCard from './ImageCard'
import SearchBox from './SearchBox'

const Gallery = () => {
  const [pageNum, setPageNum] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const { fetchGallery, fetchGalleryByTags, images, loading } = useGallery()

  const MIN_LENGTH_SEARCH = 3

  const { ref, inView } = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setPageNum(pageNum + 1)
    }
  }, [inView])

  useEffect(() => {
    fetchGallery(pageNum)
  }, [pageNum])

  useEffect(() => {
    if (searchQuery.length > MIN_LENGTH_SEARCH) {
      fetchGalleryByTags(searchQuery)
    } else {
      setPageNum(0)
      fetchGallery(pageNum)
    }
  }, [searchQuery])

  return (
    <>
      <div className="flex items-center">
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="gap-6 pt-2 columns-3xs">
        {images?.length ? (
          images.map((image, index) => {
            if (images[images.length - 1].id !== image.id) {
              return <ImageCard key={`${index}${image.id}`} img={image} />
            }

            return (
              <div key={`${index}${image.id}`} ref={ref} data-inview={inView}>
                <ImageCard img={image} />
              </div>
            )
          })
        ) : (
          <div className="mx-5">Sin Resultados</div>
        )}
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
