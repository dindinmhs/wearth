"use client"

import { NavbarDashboard } from "@/components/organism";
import { userData } from "@/data/user";
import Image from "next/image";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <NavbarDashboard />
      <main className="pt-20 pb-16 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Profile Header */}
          <div className="bg-white rounded-xl overflow-hidden mb-8">
            {/* Profile Banner */}
            <div className="h-48 bg-gradient-to-r from-green-400 to-green-600" />
            
            <div className="p-8 -mt-16 relative">
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto md:mx-0">
                <Image
                  src={userData.avatar}
                  alt={userData.name}
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>

              <div className="mt-6 md:mt-4 space-y-8">
                {/* User Info */}
                <div className="text-center md:text-left flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold">{userData.name}</h1>
                    <p className="text-gray-600 mt-1">Member since {userData.joinDate}</p>
                  </div>
                  <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    Settings
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <IoCallOutline className="text-2xl text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p className="text-gray-700 font-medium">{userData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <MdOutlineEmail className="text-2xl text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-gray-700 font-medium">{userData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <IoLocationOutline className="text-2xl text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Location</p>
                      <p className="text-gray-700 font-medium">{userData.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Trade Statistics */}
            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <FaExchangeAlt className="text-xl text-green-600" />
                </div>
                <h3 className="text-lg font-semibold">Trade Statistics</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <StatCard label="Total Trades" value={userData.stats.totalTrades} color="green" />
                <StatCard label="Successful" value={userData.stats.successTrades} color="green" />
                <StatCard label="Pending" value={userData.stats.pendingTrades} color="yellow" />
                <StatCard label="Rejected" value={userData.stats.rejectedTrades} color="red" />
              </div>
            </div>

            {/* Sales Statistics */}
            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <BsBoxSeam className="text-xl text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Sales Statistics</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <StatCard label="Total Sales" value={userData.stats.totalSales} color="blue" />
                <StatCard label="Completed" value={userData.stats.completedSales} color="blue" />
                <StatCard label="Active" value={userData.stats.activeSales} color="blue" />
                <StatCard label="Earnings" value={userData.stats.totalEarnings} color="blue" isText />
              </div>
            </div>
          </div>

          {/* Add Item Button */}
          <div className="flex justify-end gap-4 mb-8">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
              <FaExchangeAlt className="text-xl" />
              Add New Item
            </button>
          </div>

          {/* Sale Items Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {userData.saleItems.map((item) => (
              <div key={item.id} className="rounded-lg overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
                <div className="relative h-72">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm mb-1">{item.brand}</p>
                  <h3 className="text-gray-900 font-medium mb-2">
                    {item.name}
                  </h3>
                  {/* <p className="text-gray-500 text-sm mb-3 line-clamp-2">{item.description}</p> */}
                  <p className="text-gray-900 font-bold mb-3">{item.price}</p>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-xs text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                        Edit
                      </button>
                      <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trade Items Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.tradeItems.map((item) => (
              <div key={item.id} className="rounded-lg overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
                <div className="relative h-72">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm mb-1">{item.brand}</p>
                  <h3 className="text-gray-900 font-medium mb-2">
                    {item.name}
                  </h3>
                  {/* <p className="text-gray-500 text-sm mb-3 line-clamp-2">{item.description}</p> */}
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-xs text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-sm text-green-600 hover:bg-green-50 rounded-lg">
                        Edit
                      </button>
                      <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

interface StatCardProps {
  label: string;
  value: number | string;
  color: 'green' | 'blue' | 'yellow' | 'red';
  isText?: boolean;
}

function StatCard({ label, value, color, isText = false }: StatCardProps) {
  const colorClasses = {
    green: 'text-green-600',
    blue: 'text-blue-600',
    yellow: 'text-yellow-600',
    red: 'text-red-600'
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl text-center">
      <p className={`text-2xl font-bold ${colorClasses[color]}`}>
        {isText ? value : value.toLocaleString()}
      </p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}