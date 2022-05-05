import { Image } from '../interfaces/IGallery'
import { useInView } from 'react-intersection-observer'
import ProgressiveImage from './ProgressiveImage'

type ImageCardProps = {
  data: Image
}

const ImageCard = ({ data }: ImageCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px'
  })

  return (
    <figure
      className="py-4 [break-inside:avoid] cursor-pointer relative"
      ref={ref}
      data-inview={inView}
    >
      <ProgressiveImage
        url={data.link}
        alt={data.description}
        isVisible={inView}
      />
      <figcaption className="mt-2">{data?.title}</figcaption>
      <p className="text-sm text-gray-500 line-clamp-2">{data.description}</p>
    </figure>
  )
}

export default ImageCard
