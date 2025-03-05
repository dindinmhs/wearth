"use client";
import { Products } from "@/data/products";
import { DragSection, NavbarDashboard } from "@/components/organism";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: ProductPageProps) {
  const product = Products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <NavbarDashboard />
      <main className="pb-16 w-11/12 mx-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kiri (Sticky Image) */}
          <div className="h-[100vh] md:sticky top-24 pt-24 md:pt-0">
            <DragSection product={product} />
          </div>

          {/* Kanan (Product Info yang Bisa di-Scroll) */}
          <div className="md:pt-24 flex flex-col space-y-6 md:overflow-y-auto">
            {product.brand && (
              <span className="text-gray-500 text-lg">{product.brand}</span>
            )}
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="text-2xl font-bold text-gray-900">
              Rp {product.price.toLocaleString("id-ID")}
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
      </main>
    </>
  );
}
