"use client"

import { NavbarDashboard } from "@/components/organism";
import Image from "next/image";
import { IoLeafOutline, IoRocketOutline } from "react-icons/io5";
import { BsCoin, BsLightningCharge, BsStars } from "react-icons/bs";
import { useState } from "react";
import { missions } from "@/data/mission";

export default function Mission() {
    const [activeTab, setActiveTab] = useState("all");
    
    const handleMissionAction = (missionId: number) => {
      console.log(`Mission ${missionId} claimed`);
    };
    
    const filteredMissions = activeTab === "all" 
      ? missions 
      : missions.filter(mission => mission.status === activeTab);
  
    return (
      <>
        <NavbarDashboard />
        <main className="pt-16 md:pt-20 pb-16 bg-grey min-h-screen">
          <div className="container mx-auto px-4 md:px-0">
            {/* Header Section with Background */}
            <div className="relative rounded-xl md:rounded-3xl bg-gradient-to-r from-[#2c6e49] to-[#3d9a68] p-6 md:p-8 mb-6 md:mb-10 text-white overflow-hidden shadow-xl">
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Mission Board</h1>
                <p className="text-green-50 max-w-2xl">
                  Complete missions, earn rewards, and make sustainable fashion choices
                </p>
                
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <IoLeafOutline className="text-xl" />
                    <span className="font-medium">Level 5</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <BsCoin className="text-yellow-300 text-xl" />
                    <span className="font-medium">1,250 Coins</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#c5e1d3] flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#edf5f0] flex items-center justify-center mb-4">
                  <BsStars className="text-2xl text-[#2c6e49]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">12/20</h3>
                <p className="text-sm text-gray-500">Missions Completed</p>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-4">
                  <div className="h-2 rounded-full bg-[#2c6e49]" style={{ width: '60%' }} />
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BsLightningCharge className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">3</h3>
                <p className="text-sm text-gray-500">Day Streak</p>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div 
                      key={day} 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        day <= 3 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <IoRocketOutline className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Level 5</h3>
                <p className="text-sm text-gray-500">750/1000 XP</p>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-4">
                  <div className="h-2 rounded-full bg-purple-500" style={{ width: '75%' }} />
                </div>
                <p className="text-xs text-gray-500 mt-2">250 XP needed for Level 6</p>
              </div>
            </div>
            
            {/* Mission Tabs */}
            <div className="flex gap-2 mb-4 md:mb-6 overflow-x-auto pb-2">
              {["all", "in-progress", "completed", "not-started"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-[#2c6e49] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab === "all" ? "All Missions" : 
                   tab === "in-progress" ? "In Progress" : 
                   tab === "completed" ? "Completed" : "Not Started"}
                </button>
              ))}
            </div>
  {/* Missions Grid - Updated to 2 items per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {filteredMissions.map((mission) => (
                <div 
                  key={mission.id} 
                  onClick={() => handleMissionAction(mission.id)}
                  className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative group border border-gray-100 cursor-pointer hover:border-[#c5e1d3]"
                >
                  <div className={`absolute top-0 left-0 w-1 h-full ${
                    mission.status === 'completed' ? 'bg-[#2c6e49]' : 
                    mission.status === 'in-progress' ? 'bg-[#3d9a68]' : 'bg-gray-200'
                  }`}></div>
                  
                  <div className="flex flex-col md:flex-row gap-5">
                    {/* Left side with icon and reward */}
                    <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:w-28">
                      <div className={`w-16 h-16 rounded-md flex items-center justify-center ${
                        mission.status === 'completed' ? 'bg-[#edf5f0]' :
                        mission.status === 'in-progress' ? 'bg-[#edf5f0]' : 'bg-gray-50'
                      }`}>
                        <div className="relative w-10 h-10">
                          <Image
                            src={mission.icon}
                            alt={mission.title}
                            fill
                            className="object-contain opacity-90"
                          />
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1.5 bg-[#edf5f0] px-3 py-1.5 rounded-md">
                          <BsCoin className="text-[#2c6e49]" />
                          <span className="font-medium text-[#2c6e49]">{mission.reward}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side with content */}
                    <div className="flex-1 pl-3">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <h3 className="text-lg font-medium text-gray-800">{mission.title}</h3>
                            <div className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                              mission.status === 'completed' 
                                ? 'bg-[#edf5f0] text-[#2c6e49]' 
                                : mission.status === 'in-progress'
                                ? 'bg-[#edf5f0] text-[#2c6e49]'
                                : 'bg-gray-50 text-gray-500'
                            }`}>
                              {mission.status === 'completed' ? 'Completed' : 
                               mission.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{mission.description}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-500 font-medium">Progress</span>
                          <span className="font-medium text-gray-700">
                            {mission.progress}/{mission.target}
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-md h-2">
                          <div
                            className={`h-2 rounded-md transition-all duration-300 ${
                              mission.status === 'completed' 
                                ? 'bg-[#2c6e49]' 
                                : mission.status === 'in-progress'
                                ? 'bg-[#3d9a68]'
                                : 'bg-gray-300'
                            }`}
                            style={{ width: `${(mission.progress / mission.target) * 100}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          {mission.status === 'completed' ? 'Tap to claim reward' : 
                           mission.status === 'in-progress' ? 'Tap to continue' : 'Tap to start'}
                        </div>
                        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          mission.status === 'completed' 
                            ? 'bg-[#edf5f0] text-[#2c6e49]' 
                            : mission.status === 'in-progress'
                            ? 'bg-[#edf5f0] text-[#2c6e49]'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {mission.status === 'completed' ? 'Claim' : 
                           mission.status === 'in-progress' ? 'Continue' : 'Start'}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
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