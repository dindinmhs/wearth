"use client";
import { DragSection, NavbarDashboard } from "@/components/organism";
import { BackButton } from "@/components/atoms/BackButton";
import { Breadcrumb } from "@/components/atoms/Breadcrumb";
import { Products } from "@/data/products";
import { FooterSection } from "@/components/organism/footer";
import Image from "next/image";

export default function ProductDetail() {
  const product = Products[0]; 

  return (
    <>
      <NavbarDashboard />
      <main className="pb-16 w-11/12 mx-auto">
        <div className="container mx-auto">
          <div className="pt-20 flex gap-2 md:flex-row flex-col md:items-center md:mb-6">
            <BackButton/>
            <span className="md:block hidden">/</span>
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Explore', href: '/explore' },
                { label: product.name }
              ]} 
            />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
            {/* Left (Image) - Sticky positioning */}
            <div className="h-auto pt-4 md:pt-0 md:sticky md:top-20 md:self-start">
              <DragSection product={product} />
            </div>
            {/* Right (Product Info) - More content for plain black t-shirt */}
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
              
              {/* Item Details - Plain Black T-shirt */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Item Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <span className="text-gray-500 text-sm">Material</span>
                    <p className="text-gray-900">100% Cotton</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Style</span>
                    <p className="text-gray-900">Basic Plain T-shirt</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Color</span>
                    <p className="text-gray-900">Faded Black</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Neckline</span>
                    <p className="text-gray-900">Crew Neck</p>
                  </div>
                </div>
              </div>

              {/* Measurements - For plain black t-shirt */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Measurements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <span className="text-gray-500 text-sm">Chest (pit to pit)</span>
                    <p className="text-gray-900">52 cm</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Length</span>
                    <p className="text-gray-900">70 cm</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Sleeve</span>
                    <p className="text-gray-900">20 cm</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Shoulder Width</span>
                    <p className="text-gray-900">45 cm</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">Measurements taken with item laid flat. Please check carefully against your own measurements.</p>
              </div>
              
              {/* Condition Details - For plain black t-shirt */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Condition Details</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 mb-3">Pre-owned with minimal signs of wear:</p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Slight fading from washing, common for black garments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>No holes, stains, or damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Gentle pilling in some areas, minimal and not noticeable when worn</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Original shape well maintained</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Care Instructions - Good for basic clothing */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Care Instructions</h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span className="text-gray-600">Machine wash cold with similar colors</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span className="text-gray-600">Gentle cycle recommended</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span className="text-gray-600">Do not bleach</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span className="text-gray-600">Tumble dry low or hang to dry</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span className="text-gray-600">Iron on low heat if needed</span>
                  </div>
                </div>
              </div>
              
              {/* Shipping & Returns */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Shipping & Returns</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="mr-3 text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Free Shipping</p>
                      <p className="text-gray-600 text-sm">Estimated delivery: 2-3 days (Jabodetabek), 3-5 days (rest of Indonesia)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">7-Day Inspection Period</p>
                      <p className="text-gray-600 text-sm">All items can be returned if condition differs substantially from description</p>
                    </div>
                  </div>
                </div>
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
                      <span>Joined {product.seller.joinDate}</span> • <span>98% Positive Feedback</span>
                    </div>
                    <button className="mt-2 text-green-600 text-sm font-medium hover:underline">
                      View seller profile
                    </button>
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