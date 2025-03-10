"use client";

import { NavbarDashboard } from "@/components/organism";
import { TradeItems } from "@/data/trade";
import Image from "next/image";
import {
  IoLocationOutline,
  IoCallOutline,
  IoSwapHorizontalOutline,
} from "react-icons/io5";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { FooterSection } from "@/components/organism/footer";

export default function TradeDetail() {
  const trade = TradeItems[0];

  return (
    <>
      <NavbarDashboard />
      <main className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="container mx-auto px-4 md:px-0">
          {/* Header with Actions */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-clip-text">
                Trade Details
              </h1>
              <p className="text-gray-600 mt-1">
                View the details of this sustainable fashion exchange
              </p>
            </div>

            {trade.requestedItem.status === "pending" && (
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gradient-to-r from-[#2c6e49] to-[#3d9a68] text-white rounded-lg hover:from-[#235539] hover:to-[#2c6e49] transition-all text-sm font-medium flex items-center gap-2">
                  <BsCheckCircleFill />
                  Accept
                </button>
                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-all text-sm font-medium flex items-center gap-2">
                  <BsXCircleFill />
                  Decline
                </button>
              </div>
            )}
          </div>

          {/* Trade Status Banner */}
          <div
            className={`mb-8 p-4 rounded-lg flex items-center justify-between ${
              trade.requestedItem.status === "pending"
                ? "bg-yellow-50 border border-yellow-200"
                : trade.requestedItem.status === "accepted"
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  trade.requestedItem.status === "pending"
                    ? "bg-yellow-100"
                    : trade.requestedItem.status === "accepted"
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                <IoSwapHorizontalOutline
                  className={`text-xl ${
                    trade.requestedItem.status === "pending"
                      ? "text-yellow-700"
                      : trade.requestedItem.status === "accepted"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                />
              </div>
              <div>
                <h2 className="font-medium">Trade Status</h2>
                <p
                  className={`text-sm ${
                    trade.requestedItem.status === "pending"
                      ? "text-yellow-800"
                      : trade.requestedItem.status === "accepted"
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {trade.requestedItem.status === "pending"
                    ? "Waiting for response"
                    : trade.requestedItem.status === "accepted"
                    ? "Trade accepted"
                    : "Trade declined"}
                </p>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                trade.requestedItem.status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : trade.requestedItem.status === "accepted"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {trade.requestedItem.status.charAt(0).toUpperCase() +
                trade.requestedItem.status.slice(1)}
            </span>
          </div>

          {/* Trade Items Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative">
            {/* Your Item */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Requested Item</h4>
                  <span className="bg-[#edf5f0] text-[#2c6e49] text-xs px-2 py-1 rounded-full">
                    {trade.condition}
                  </span>
                </div>
              </div>

              <div className="relative h-[300px]">
                <Image
                  src={trade.image}
                  alt={trade.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  {trade.size} / {trade.brand}
                </p>
                <h5 className="font-medium text-lg mb-1">{trade.name}</h5>
                <p className="text-sm text-gray-700">{trade.description}</p>
              </div>

              {/* Trader Profile */}
              <div className="p-4 border-t bg-gray-50">
                <h6 className="text-sm font-medium text-gray-500 mb-3">
                  Trader Profile
                </h6>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src={trade.owner.avatar}
                      alt={trade.owner.name}
                      fill
                      className="object-cover rounded-full border-2 border-white"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{trade.owner.name}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <IoLocationOutline />
                        <span>{trade.owner.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoCallOutline />
                        <span>{trade.owner.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trade Icon */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-[#2c6e49] to-[#3d9a68] rounded-full items-center justify-center shadow-lg z-10 hover:scale-110 transition-transform">
              <IoSwapHorizontalOutline className="text-2xl text-white" />
            </div>

            {/* Requested Item */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Your Item</h4>
                  <span className="bg-[#edf5f0] text-[#2c6e49] text-xs px-2 py-1 rounded-full">
                    {trade.requestedItem.condition}
                  </span>
                </div>
              </div>

              <div className="relative h-[300px]">
                <Image
                  src={trade.requestedItem.image}
                  alt={trade.requestedItem.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  {trade.requestedItem.size} / {trade.requestedItem.brand}
                </p>
                <h5 className="font-medium text-lg mb-1">
                  {trade.requestedItem.name}
                </h5>
                <p className="text-sm text-gray-700">
                  {trade.requestedItem.description}
                </p>
              </div>

              {/* Item Owner */}
              <div className="p-4 border-t bg-gray-50">
                <h6 className="text-sm font-medium text-gray-500 mb-3">
                  Item Owner
                </h6>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src={trade.requestedItem.owner.avatar}
                      alt={trade.requestedItem.owner.name}
                      fill
                      className="object-cover rounded-full border-2 border-white"
                    />
                  </div>
                  <div>
                    <p className="font-medium">
                      {trade.requestedItem.owner.name}
                    </p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <IoLocationOutline />
                        <span>{trade.requestedItem.owner.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoCallOutline />
                        <span>{trade.requestedItem.owner.phone}</span>
                      </div>
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
