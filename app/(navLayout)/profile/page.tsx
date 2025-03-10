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
      <main className="pt-16 md:pt-20 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-0">
          {/* Profile Header */}
          <div className="bg-white rounded-lg md:rounded-xl overflow-hidden mb-6 md:mb-8">
            {/* Profile Banner */}
            <div className="h-32 md:h-48 bg-gradient-to-r from-[#3d9a68] to-[#2c6e49]" />
            
            <div className="p-6 md:p-8 -mt-16 relative">
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
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                  <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold">{userData.name}</h1>
                    <p className="text-gray-600 mt-1">Member since {userData.joinDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      Edit Profile
                    </button>
                    <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      Settings
                    </button>
                  </div>
                </div>

                {/* Contact Information - Redesigned */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#edf5f0] flex items-center justify-center">
                        <IoCallOutline className="text-xl text-[#2c6e49]" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Phone</p>
                        <p className="text-gray-800 font-medium">{userData.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#edf5f0] flex items-center justify-center">
                        <MdOutlineEmail className="text-xl text-[#2c6e49]" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Email</p>
                        <p className="text-gray-800 font-medium">{userData.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#edf5f0] flex items-center justify-center">
                        <IoLocationOutline className="text-xl text-[#2c6e49]" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Location</p>
                        <p className="text-gray-800 font-medium">{userData.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Statistics Section */}
          <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl mb-6 md:mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#2c6e49] to-[#3d9a68] text-white rounded-xl hover:from-[#235539] hover:to-[#2c6e49] transition-all duration-200 shadow-sm hover:shadow group">
                <BsBoxSeam className="text-xl group-hover:scale-110 transition-transform" />
                <span>Add New Item</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Trade Stats */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#edf5f0] flex items-center justify-center">
                    <FaExchangeAlt className="text-xl text-[#2c6e49]" />
                  </div>
                  <h3 className="text-lg font-semibold">Trade Statistics</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <StatCard label="Total Trades" value={userData.stats.totalTrades} color="forest" />
                  <StatCard label="Successful" value={userData.stats.successTrades} color="forest" />
                  <StatCard label="Pending" value={userData.stats.pendingTrades} color="yellow" />
                  <StatCard label="Rejected" value={userData.stats.rejectedTrades} color="red" />
                </div>
              </div>
              
              {/* Sales Stats */}
              <div>
                <div className="flex items-center gap-3 mb-4">
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
          </div>
          
          {/* Sale Items Section */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold text-gray-800">Your Store Items</h2>
                <p className="text-sm text-gray-500">Manage and track your listed products</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {userData.saleItems.map((item) => (
                <div key={item.id} className="overflow-hidden group cursor-pointer transition-all duration-300">
                  <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute bottom-3 left-3">
                          <span className="bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
                            {item.condition}
                          </span>
                        </div>
                      </div>
                      <div className="px-2 py-3">
                        <p className="text-gray-500 text-sm mb-1">{item.brand}</p>
                        <h3 className="text-gray-900 font-medium mb-2 line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-gray-900 font-bold">
                          {item.price}
                        </p>
                        
                        {/* Admin controls - keeping these from original */}
                        <div className="flex justify-between items-center pt-3 mt-2 border-t">
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
              </div>
            </div>
      </main>
    </>
  );
}

interface StatCardProps {
  label: string;
  value: number | string;
  color: 'forest' | 'green' | 'blue' | 'yellow' | 'red';
  isText?: boolean;
}

function StatCard({ label, value, color, isText = false }: StatCardProps) {
  const colorClasses = {
    forest: 'text-[#2c6e49]',
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