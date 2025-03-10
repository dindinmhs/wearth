"use client"

import { NavbarDashboard } from "@/components/organism";
import { TradeItems } from "@/data/trade";
import Image from "next/image";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function TradeDetail() {

  return (
    <>
      <NavbarDashboard />
      <main className="pt-20 pb-16 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main Item Section */}
          <div className="bg-white rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={TradeItems[0].image}
                    alt={TradeItems[0].name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black bg-opacity-70 text-white text-sm px-4 py-2 rounded-full">
                      {TradeItems[0].category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <h1 className="text-2xl font-semibold">{TradeItems[0].name}</h1>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {TradeItems[0].condition}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-4">{TradeItems[0].description}</p>
                </div>

                {/* Owner Details */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-5">
                  <div>
                    <h4 className="text-lg font-medium mb-4">Owner Information</h4>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={TradeItems[0].owner.avatar}
                          alt={TradeItems[0].owner.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-medium">{TradeItems[0].owner.name}</p>
                        <p className="text-gray-600">Member since {TradeItems[0].createdAt}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <IoCallOutline className="text-xl text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p className="text-gray-700">{TradeItems[0].owner.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <MdOutlineEmail className="text-xl text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-gray-700">{TradeItems[0].owner.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <IoLocationOutline className="text-xl text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="text-gray-700">{TradeItems[0].owner.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trade Offer Section */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Trade Offer</h2>
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                TradeItems[0].requestedItem.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                TradeItems[0].requestedItem.status === 'accepted' ? 'bg-green-100 text-green-800' :
                'bg-red-100 text-red-800'
              }`}>
                {TradeItems[0].requestedItem.status.charAt(0).toUpperCase() + TradeItems[0].requestedItem.status.slice(1)}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Left Column - Image */}
              <div className="md:col-span-2">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={TradeItems[0].requestedItem.image}
                    alt={TradeItems[0].requestedItem.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="md:col-span-3 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{TradeItems[0].requestedItem.name}</h3>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Condition: {TradeItems[0].requestedItem.condition}
                  </span>
                </div>

                {/* Trader Information */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-5">
                  <div>
                    <h4 className="text-lg font-medium mb-4">Trader Information</h4>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={TradeItems[0].requestedItem.owner.avatar}
                          alt={TradeItems[0].requestedItem.owner.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-medium">{TradeItems[0].requestedItem.owner.name}</p>
                        <p className="text-gray-600">{TradeItems[0].requestedItem.owner.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <IoCallOutline className="text-xl text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p className="text-gray-700">{TradeItems[0].requestedItem.owner.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <MdOutlineEmail className="text-xl text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-gray-700">{TradeItems[0].requestedItem.owner.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <IoLocationOutline className="text-xl text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="text-gray-700">{TradeItems[0].requestedItem.owner.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {TradeItems[0].requestedItem.status === 'pending' && (
                  <div className="flex gap-4">
                    <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors text-lg font-medium">
                      <BsCheckCircleFill className="text-xl" />
                      Accept Trade
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-4 border-2 border-red-600 text-red-600 rounded-xl hover:bg-red-50 transition-colors text-lg font-medium">
                      <BsXCircleFill className="text-xl" />
                      Decline
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}