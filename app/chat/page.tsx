"use client"

import { NavbarDashboard } from "@/components/organism";
import { userData } from "@/data/user";
import { ChatData, type Chat } from "@/data/chat";
import Image from "next/image";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(ChatData[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;
    
    // Here you would typically integrate with your backend
    // For now, we'll just clear the input
    setNewMessage("");
  };

  return (
    <>
      <NavbarDashboard />
      <main className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 pb-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm h-[calc(100vh-120px)]">
            <div className="grid grid-cols-12 divide-x h-full">
              {/* Chat List */}
              <div className="col-span-4 flex flex-col h-full">
                <div className="p-4 border-b">
                  <h2 className="text-xl font-semibold">Pesan</h2>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {ChatData.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat)}
                      className={`p-4 flex gap-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedChat?.id === chat.id ? "bg-gray-50" : ""
                      }`}
                    >
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <Image
                          src={chat.user.avatar}
                          alt={chat.user.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium">{chat.user.name}</h3>
                        <p className="text-sm text-gray-500 truncate">
                          {chat.messages[chat.messages.length - 1].text}
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 flex-shrink-0">
                        {chat.user.lastSeen}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Window */}
              <div className="col-span-8 flex flex-col h-full">
                {selectedChat ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-4 border-b flex items-center gap-3">
                      <div className="relative w-10 h-10 flex-shrink-0">
                        <Image
                          src={selectedChat.user.avatar}
                          alt={selectedChat.user.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{selectedChat.user.name}</h3>
                        <p className="text-sm text-gray-500">
                          {selectedChat.user.lastSeen}
                        </p>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {selectedChat.messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.sender === userData.name
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.sender === userData.name
                                ? "bg-green-600 text-white"
                                : "bg-gray-100"
                            }`}
                          >
                            <p className="break-words">{message.text}</p>
                            <span
                              className={`text-xs mt-1 block ${
                                message.sender === userData.name
                                  ? "text-green-100"
                                  : "text-gray-500"
                              }`}
                            >
                              {message.timestamp}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Ketik pesan..."
                          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          onKeyPress={(e) => {
                            if (e.key === "Enter") handleSendMessage();
                          }}
                        />
                        <button
                          onClick={handleSendMessage}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex-shrink-0"
                        >
                          <IoSend className="text-xl" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-gray-500">
                    Pilih chat untuk mulai berkomunikasi
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