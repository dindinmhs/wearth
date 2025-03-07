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
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                Mission Board
              </h1>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
                Complete missions, earn rewards, and make sustainable fashion choices
              </p>
            </div>
  
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
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
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {missions.map((mission) => (
                <div 
                  key={mission.id} 
                  className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100"
                >
                  <div className="flex items-start gap-3 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-green-50 p-2 md:p-3 flex-shrink-0">
                      <div className="relative w-full h-full">
                        <Image
                          src={mission.icon}
                          alt={mission.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2 md:mb-3">
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">{mission.title}</h3>
                          <p className="text-xs md:text-sm text-gray-500">{mission.description}</p>
                        </div>
                        <div className="flex items-center gap-1.5 bg-green-50 px-2.5 md:px-4 py-1.5 md:py-2 rounded-full flex-shrink-0 w-fit">
                          <BsCoin className="text-yellow-500 text-base md:text-lg" />
                          <span className="font-semibold text-green-700 text-sm md:text-base">{mission.reward}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4 md:mt-6">
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between text-xs md:text-sm mb-2">
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
                        <button
                          onClick={() => handleMissionAction(mission.id)}
                          className={`inline-flex items-center justify-center gap-1.5 px-4 py-1.5 text-white text-sm rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow w-full sm:w-auto ${
                            mission.status === 'completed'
                              ? 'bg-green-500 hover:bg-green-600'
                              : 'bg-blue-500 hover:bg-blue-600'
                          }`}
                        >
                          <span>{mission.status === 'completed' ? 'Claim' : 'Start'}</span>
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