"use client"

import { NavbarDashboard } from "@/components/organism";
import { CartItems } from "@/data/cart";
import Image from "next/image";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { BsShieldCheck, BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FooterSection } from "@/components/organism/footer";

export default function CheckoutPage() {
  const subtotal = CartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = 15000;
  const discount = 5000;
  const total = subtotal + shippingFee - discount;

  return (
    <>
      <NavbarDashboard />
      <main className="pt-16 md:pt-20 pb-32 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">Checkout</h1>
          <p className="text-gray-600 mb-6">Complete your purchase with sustainable fashion</p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
            {/* Left Column - Product Details */}
            <div className="lg:col-span-8 space-y-3 md:space-y-4 lg:sticky lg:top-20 lg:self-start">
              {/* Address Section */}
              <section className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <IoLocationOutline className="text-2xl text-green-600" />
                  <h2 className="text-lg font-semibold">Delivery Address</h2>
                  <button className="ml-auto text-green-600 text-sm font-medium">Change</button>
                </div>
                <div className="ml-9">
                  <p className="font-medium">John Doe</p>
                  <p className="text-gray-600 mt-1">+62 812-3456-7890</p>
                  <p className="text-gray-600 mt-1">
                    123 Jalan Jalin, Gg Baru II<br />
                    Kota Bandung, 12345
                  </p>
                </div>
              </section>

              {/* Order Summary */}
              <section className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm">
                <div className="border-b px-4 md:px-6 py-3 md:py-4">
                  <h2 className="text-lg font-semibold">Order Items</h2>
                </div>
                
                <div className="divide-y">
                  {CartItems.map((item) => (
                    <div key={item.id} className="p-4 md:p-6 flex gap-3 md:gap-4">
                      <div className="relative w-16 md:w-20 h-16 md:h-20 flex-shrink-0">
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
                          <p className="text-[#2c6e49] font-medium">
                            Rp {item.price.toLocaleString('id-ID')}
                          </p>
                          <p className="text-gray-600">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Payment Details */}
            <div className="lg:col-span-4 space-y-3 md:space-y-4">
              {/* Delivery Options */}
              <section className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <IoTimeOutline className="text-2xl text-green-600" />
                  <h2 className="text-lg font-semibold">Delivery Options</h2>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="flex items-center justify-between p-3 md:p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="delivery" className="accent-green-600" defaultChecked />
                      <div>
                        <span className="font-medium">Standard Delivery</span>
                        <p className="text-sm text-gray-500">Estimated arrival: 3-5 days</p>
                      </div>
                    </div>
                    <span className="font-medium">Rp 15,000</span>
                  </label>
                  <label className="flex items-center justify-between p-4 border rounded-lg hover:border-green-600 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="delivery" className="accent-green-600" />
                      <div>
                        <span className="font-medium">Express Delivery</span>
                        <p className="text-sm text-gray-500">Estimated arrival: 1-2 days</p>
                      </div>
                    </div>
                    <span className="font-medium">Rp 30,000</span>
                  </label>
                </div>
              </section>

              {/* Payment Method */}
              <section className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <BsCreditCard2Back className="text-2xl text-green-600" />
                  <h2 className="text-lg font-semibold">Payment Method</h2>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border rounded-lg hover:border-green-600 cursor-pointer transition-colors">
                    <input type="radio" name="payment" className="accent-green-600" defaultChecked />
                    <div className="flex-1">
                      <span className="font-medium">Bank Transfer</span>
                      <p className="text-sm text-gray-500">Pay via bank transfer to our account</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border rounded-lg hover:border-green-600 cursor-pointer transition-colors">
                    <input type="radio" name="payment" className="accent-green-600" />
                    <div className="flex-1">
                      <span className="font-medium">E-Wallet</span>
                      <p className="text-sm text-gray-500">Pay using your e-wallet balance</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border rounded-lg hover:border-green-600 cursor-pointer transition-colors">
                    <input type="radio" name="payment" className="accent-green-600" />
                    <div className="flex-1">
                      <span className="font-medium">Credit/Debit Card</span>
                      <p className="text-sm text-gray-500">Pay securely with your card</p>
                    </div>
                    <div className="flex gap-1">
                    </div>
                  </label>
                </div>
              </section>

              {/* Promo Code */}
              <section className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <MdOutlineLocalOffer className="text-xl text-[#2c6e49]" />
                  <h3 className="font-medium">Promo Code</h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter promo code" 
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2c6e49]"
                    defaultValue="ECO5K"
                  />
                  <button className="w-full sm:w-auto bg-[#2c6e49] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#235539] transition-colors">
                    Apply
                  </button>
                </div>
                <div className="mt-2 text-sm text-[#2c6e49] flex items-center gap-1">
                  <BsShieldCheck />
                  <span>Promo code &quot;ECO5K&quot; applied: Rp 5,000 discount</span>
                </div>
              </section>

              {/* Order Total Summary */}
              <section className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm lg:sticky lg:top-20">
                <h2 className="text-lg font-semibold mb-4">Order Total</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-medium">Rp {subtotal.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Shipping</p>
                    <p className="font-medium">Rp {shippingFee.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Discount</p>
                    <p className="font-medium text-[#2c6e49]">-Rp {discount.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="border-t pt-3 mt-1 flex justify-between items-center">
                    <p className="font-semibold">Total</p>
                    <p className="text-xl font-semibold text-[#2c6e49]">Rp {total.toLocaleString('id-ID')}</p>
                  </div>
                  <button className="w-full bg-[#2c6e49] text-white py-3 rounded-lg md:rounded-xl font-medium hover:bg-[#235539] transition-colors mt-4">
                    Place Order
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}