import Image from 'next/image'
import Link from 'next/link'

interface ArticleCardProps {
  title: string
  description: string
  image: string
  date: string
  slug: string
}

export const ArticleCard = ({ title, description, image, date, slug }: ArticleCardProps) => {
  return (
    <Link href={`/articles/${slug}`}>
      <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white transition-all hover:shadow-xl hover:shadow-gray-100/50 hover:border-gray-200">
        <div className="relative h-52 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2">
            <time className="text-sm font-medium text-gray-400 transition-colors group-hover:text-gray-600">
              {date}
            </time>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-gray-800 transition-colors group-hover:text-gray-900">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 line-clamp-2 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
