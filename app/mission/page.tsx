"use client"

import { NavbarDashboard } from "@/components/organism";
import Image from "next/image";
import { IoTrophyOutline } from "react-icons/io5";
import { BsCoin } from "react-icons/bs";

import { missions } from "@/data/mission";

export default function Mission() {
    const handleMissionAction = (missionId: number) => {
      console.log(`Mission ${missionId} claimed`);
    };
  
    return (
      <>
        <NavbarDashboard />
        <main className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                Mission Board
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Complete missions, earn rewards, and make sustainable fashion choices
              </p>
            </div>
  
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-green-100 border border-green-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <IoTrophyOutline className="text-2xl text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Current Level</p>
                    <h3 className="text-2xl font-bold text-gray-800">Level 5</h3>
                  </div>
                </div>
              </div>
  
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-purple-100 border border-purple-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                    <BsCoin className="text-2xl text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Coins</p>
                    <h3 className="text-2xl font-bold text-gray-800">1,250</h3>
                  </div>
                </div>
              </div>
  
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-blue-100 border border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <IoTrophyOutline className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Missions Completed</p>
                    <h3 className="text-2xl font-bold text-gray-800">12/20</h3>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Missions Grid */}
            <div className="grid grid-cols-1 gap-6">
              {missions.map((mission) => (
                <div 
                  key={mission.id} 
                  className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-50 p-3 flex-shrink-0">
                      <div className="relative w-full h-full">
                        <Image
                          src={mission.icon}
                          alt={mission.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">{mission.title}</h3>
                          <p className="text-gray-500 text-sm">{mission.description}</p>
                        </div>
                        <div className="flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-full">
                          <BsCoin className="text-yellow-500" />
                          <span className="font-semibold text-green-700">{mission.reward}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-6">
                        <div className="w-[800px]">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-500">Progress</span>
                            <span className="font-medium text-gray-700">
                              {mission.progress}/{mission.target}
                            </span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1">
                            <div
                              className={`h-1 rounded-full transition-all duration-300 ${
                                mission.status === 'completed' 
                                  ? 'bg-green-500' 
                                  : mission.status === 'in-progress'
                                  ? 'bg-blue-500'
                                  : 'bg-gray-300'
                              }`}
                              style={{ width: `${(mission.progress / mission.target) * 100}%` }}
                            />
                          </div>
                        </div>
                        {mission.status === 'completed' ? (
                          <button
                            onClick={() => handleMissionAction(mission.id)}
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-500 text-white text-sm rounded-full font-medium hover:bg-green-600 transition-all duration-200 shadow-sm hover:shadow"
                          >
                            <span>Claim</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleMissionAction(mission.id)}
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-white text-sm rounded-full font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow"
                          >
                            <span>Start</span>
                          </button>
                        )}
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