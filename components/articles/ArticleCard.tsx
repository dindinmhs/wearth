import Image from 'next/image'

interface ArticleCardProps {
  title: string
  description: string
  image: string
  date: string
}

export const ArticleCard = ({ title, description, image, date }: ArticleCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
      <div className="relative h-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
      <div className="p-4">
        <time className="text-gray-500 text-sm mb-1 block">
          {date}
        </time>
        <h3 className="text-gray-900 font-medium mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>
  )
}
