import { useCallback, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import Loading from '../components/icons/Loading'
import useGallery from '../hooks/useGallery'
import ImageCard from './ImageCard'
import SearchBox from './SearchBox'
import ImageViewer from '../components/ImageViewer'

const Gallery = () => {
  const [pageNum, setPageNum] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const { fetchGallery, fetchGalleryByTags, images, loading } = useGallery()

  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const openImageViewer = useCallback(index => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  useEffect(() => {
    if (inView) {
      setPageNum(pageNum + 1)
    }
  }, [inView])

  useEffect(() => {
    if (!searchQuery.length) {
      fetchGallery(pageNum)
    } else {
      fetchGalleryByTags(searchQuery, pageNum)
    }
  }, [pageNum, searchQuery])

  return (
    <>
      <div className="flex items-center">
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="gap-6 pt-2 columns-3xs">
        {images?.length ? (
          images.map((image, index) => {
            if (images[images.length - 1].id !== image.id) {
              return (
                <article
                  key={`${index}${image.id}`}
                  onClick={() => openImageViewer(index)}
                >
                  <ImageCard data={image} />
                </article>
              )
            }

            return (
              <article
                onClick={() => openImageViewer(index)}
                key={`${index}${image.id}`}
                ref={ref}
                data-inview={inView}
              >
                <ImageCard data={image} />
              </article>
            )
          })
        ) : (
          <div className="mx-5">Sin Resultados</div>
        )}

        {isViewerOpen && (
          <ImageViewer
            src={images.map(img => img.link)}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(10px) saturate(150%) brightness(100%)'
            }}
            closeOnClickOutside={true}
          />
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
