import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  brand?: string;
}

export const ProductCard = ({ name, price, image, category, brand }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
      <div className="relative h-72">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        {brand && (
          <p className="text-gray-500 text-sm mb-1">{brand}</p>
        )}
        <h3 className="text-gray-900 font-medium mb-2">
          {name}
        </h3>
        <p className="text-gray-900 font-bold">
          Rp {price.toLocaleString('id-ID')}
        </p>
      </div>
    </div>
  );
};