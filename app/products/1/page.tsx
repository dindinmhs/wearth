"use client";
import { DragSection, NavbarDashboard } from "@/components/organism";
import { BackButton } from "@/components/atoms/BackButton";
import { Breadcrumb } from "@/components/atoms/Breadcrumb";

export default function ProductDetail() {
  // Static product data
  const product = {
      id: '1',
      name: 'Organic Cotton Oversized T-Shirt',
      price: 299000,
      images: [
        '/images/products/Windbreaker.jpg',
        'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879476/I_m_Just_Here_for_the_Fireworks_Graphic_Tee_-_White___3XL_wlbxm2.jpg',
        'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879483/Mens_Short_Sleeve_The_Wizard_of_Oz_Graphic_T-Shirt___Black___Regular_Medium___Shirts_Tops_Graphic_T-shirts_viv5wo.jpg'
      ],
      category: 'T-Shirts',
      brand: 'EcoWear',
      description: 'Made from 100% organic cotton, this oversized t-shirt combines comfort with sustainability. The breathable fabric ensures all-day comfort while minimizing environmental impact. Each piece is crafted using water-saving techniques and natural dyes.',
      features: [
        'Made from 100% organic cotton',
        'Water-saving production process',
        'Natural dye coloring',
        'Zero plastic packaging',
        'Fair trade certified'
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      condition: 'New',
    }

  return (
    <>
      <NavbarDashboard />
      <main className="pb-16 w-11/12 mx-auto">
        <div className="container mx-auto">
          <div className="pt-24">
            <BackButton href="/products" />
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: product.name }
              ]} 
            />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
            {/* Left (Image) */}
            <div className="h-auto pt-4 md:pt-0">
              <DragSection product={product} />
            </div>
            {/* Right (Product Info) */}
            <div className="pt-4 md:pt-0 flex flex-col space-y-4 md:space-y-6">
              {product.brand && (
                <span className="text-gray-500 text-sm md:text-lg">{product.brand}</span>
              )}
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="text-2xl font-bold text-gray-900">
                Rp {product.price.toLocaleString("id-ID")}
              </div>
              
              {/* Product Condition */}
              <div className="flex items-center">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  {product.condition}
                </span>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-medium text-gray-900">Select Size</h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center text-gray-700 hover:border-green-500 hover:text-green-500 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-green-600 text-white py-4 px-8 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 border-2 border-green-600 text-green-600 py-4 px-8 rounded-lg font-medium hover:bg-green-50 transition-colors">
                  Make an Offer
                </button>
              </div>

              {/* Product Description */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Product Features */}
              <div className="border-t border-gray-200 mt-6 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Features</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
