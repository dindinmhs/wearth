import { ProductType } from '@/types';
import Image from 'next/image';

export const ProductCard = ({ name, price, images, brand, condition, is3d, sizes }: ProductType) => {
  return (
    <div className="overflow-hidden group cursor-pointer transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden rounded-lg">
        <Image
          src={images[0]}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {condition && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
              {condition}
            </span>
          </div>
        )}
        {is3d && (
          <div className="absolute top-3 right-3">
            <span className="bg-forest text-white text-xs font-bold p-3 rounded-md">
              3D
            </span>
          </div>
        )}
      </div>
      <div className="px-2 py-3">
        {brand && (
          <p className="text-gray-500 text-sm mb-1">{`${sizes[0]} / ${brand}`}</p>
        )}
        <h3 className="text-gray-900 font-medium mb-2 line-clamp-1">
          {name}
        </h3>
        <p className="text-gray-900 font-bold">
          Rp {price.toLocaleString('id-ID')}
        </p>
      </div>
    </div>
  );
};