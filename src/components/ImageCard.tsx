import { Image } from '../interfaces/IGallery'
import { useInView } from 'react-intersection-observer'

type Props = {
  img: Image
}

const ImageCard = ({ img }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px'
  })

  return (
    <figure
      className="py-4 [break-inside:avoid]"
      ref={ref}
      data-inview={inView}
    >
      {inView ? (
        <img
          className="rounded-md"
          src={img.link}
          alt={img.description || undefined}
          loading="lazy"
        />
      ) : (
        <div>Load Image...</div>
      )}
      <figcaption className="mt-2">{img?.title}</figcaption>
      <p className="text-sm text-gray-500 line-clamp-2">{img.description}</p>
    </figure>
  )
}

export default ImageCard
