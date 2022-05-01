import { Image } from '../interfaces/IGallery'

type Props = {
  img: Image
}

const ImageCard = ({ img }: Props) => {
  if (img?.type.startsWith('image')) {
    return (
      <figure className="py-4 [break-inside:avoid]">
        <img
          className="rounded-md"
          src={img.link}
          alt={img.description || undefined}
        />
        <figcaption className="mt-2">{img?.title}</figcaption>
        <p className="text-sm text-gray-500 line-clamp-2">{img.description}</p>
      </figure>
    )
  }

  return null
}

export default ImageCard
