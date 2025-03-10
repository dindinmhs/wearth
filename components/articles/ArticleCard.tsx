import Image from 'next/image'
import { IoArrowForward } from 'react-icons/io5'

interface ArticleCardProps {
  title: string
  description?: string
  image: string
  date: string
  otherStyle? : string;
}

export const ArticleCard = ({ title, description, image, date, otherStyle }: ArticleCardProps) => {
  return (
    <div className={`group cursor-pointer transition-all duration-300 ${otherStyle}`}>
      <div className="relative h-48 w-full rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority
        />
        <time className="text-gray-50 text-sm mb-1 block absolute top-2 left-2 bg-black/50 px-3 rounded-full py-1">
          {date}
        </time>
      </div>
      <div className="py-2 px-1">
        <h3 className="text-gray-900 font-medium mb-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-1">
          {description}
        </p>
      </div>
    </div>
  )
}

export const ArticleBentoCard = ({ title, image, date, otherStyle }: ArticleCardProps) => {
  return (
      <div className={`relative rounded-2xl overflow-hidden group transition-transform ${otherStyle}`}>
          <div className="relative w-full h-full overflow-hidden">
              <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <IoArrowForward size={25} className='absolute top-2 right-2 text-white group-hover:-rotate-45 duration-300'/>
          </div>
          <div className="absolute bottom-0 left-0 p-4 w-full transition-all">
              <p className="text-sm text-gray-300">{date}</p>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
      </div>
  );
};


