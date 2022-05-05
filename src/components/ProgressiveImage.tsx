import useImageOnLoad from '../hooks/useImageOnLoad'

interface ProgressiveImageProps {
  url?: string
  description?: undefined | string
  alt?: string
  isVisible: boolean
}

const ProgressiveImage = ({
  url = '',
  alt = '',
  isVisible
}: ProgressiveImageProps) => {
  const { handleImageOnLoad, css } = useImageOnLoad()

  const canLoad = isVisible && url

  return (
    <>
      {canLoad ? (
        <>
          <img
            className="rounded-md absolute"
            src={url}
            alt={alt}
            style={{ ...css.thumbnail }}
          />
          <img
            className="rounded-md"
            src={url}
            alt={alt}
            onLoad={handleImageOnLoad}
            style={{ ...css.fullSize }}
          />
        </>
      ) : (
        <div
          className="w-full h-80 animate-pulse"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.11)' }}
        ></div>
      )}
    </>
  )
}

export default ProgressiveImage
