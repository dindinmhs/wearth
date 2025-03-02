"use client"

import { NavbarDashboard } from "@/components/organism";
import { CartItems } from "@/data/cart";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";

export default function CheckoutPage() {
  const totalItems = CartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = CartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = 15000;
  const total = subtotal + shippingFee;

  return (
    <>
      <NavbarDashboard />
      <main className="pt-20 pb-32 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

          <div className="space-y-4">
            {/* Address Section */}
            <section className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <IoLocationOutline className="text-2xl text-green-600" />
                <h2 className="text-lg font-semibold">Delivery Address</h2>
              </div>
              <div className="ml-9">
                <p className="font-medium">John Doe</p>
                <p className="text-gray-600 mt-1">+62 812-3456-7890</p>
                <p className="text-gray-600 mt-1">
                  123 Main Street, Apartment 4B<br />
                  Jakarta Selatan, DKI Jakarta, 12345
                </p>
              </div>
            </section>

            {/* Order Summary */}
            <section className="bg-white rounded-xl overflow-hidden">
              <div className="border-b px-6 py-4">
                <h2 className="text-lg font-semibold">Order Summary</h2>
              </div>
              
              <div className="divide-y">
                {CartItems.map((item) => (
                  <div key={item.id} className="p-6 flex gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">Size: {item.size}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-green-600 font-medium">
                          Rp {item.price.toLocaleString('id-ID')}
                        </p>
                        <p className="text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t px-6 py-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <BsTruck className="text-xl" />
                  <span>Regular Shipping</span>
                  <span className="ml-auto">Rp {shippingFee.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border rounded-lg hover:border-green-600 cursor-pointer transition-colors">
                  <input type="radio" name="payment" className="accent-green-600" defaultChecked />
                  <span className="font-medium">Bank Transfer</span>
                </label>
                <label className="flex items-center gap-3 p-4 border rounded-lg hover:border-green-600 cursor-pointer transition-colors">
                  <input type="radio" name="payment" className="accent-green-600" />
                  <span className="font-medium">E-Wallet</span>
                </label>
              </div>
            </section>
          </div>
        </div>

        {/* Fixed Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Payment</p>
              <p className="text-xl font-semibold text-green-600">
                Rp {total.toLocaleString('id-ID')}
              </p>
            </div>
            <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors">
              Place Order
            </button>
          </div>
        </div>
      </main>
    </>
  );
}