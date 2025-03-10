"use client";
import { DragSection, NavbarDashboard } from "@/components/organism";
import { BackButton } from "@/components/atoms/BackButton";
import { Breadcrumb } from "@/components/atoms/Breadcrumb";
import { Products } from "@/data/products";
import { FooterSection } from "@/components/organism/footer";
import Image from "next/image";

export default function ProductDetail() {
  // Get product data from the Products array
  const product = Products[0]; // First product for this example

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

              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full self-start mt-2">
                  {product.condition}
                </span>
              </div>
              
              <div className="text-2xl font-bold text-gray-900">
                Rp {product.price.toLocaleString("id-ID")}
              </div>
              

              {/* Size Display (Single) */}
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-900 mr-3">Size</span>
                <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-gray-700 font-medium">{product.size}</span>
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
              
              {/* Seller Information */}
              <div className="border-t border-gray-200 mt-6 pt-6">
                <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    {product.seller.avatar ? (
                      <Image 
                        src={product.seller.avatar} 
                        alt={product.seller.name} 
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-green-100 text-green-800 font-bold text-lg">
                        {product.seller.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{product.seller.name}</div>
                    <div className="text-sm text-gray-500">
                      <span>Joined {product.seller.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}