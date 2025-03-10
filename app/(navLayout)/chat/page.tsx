"use client"

import { NavbarDashboard } from "@/components/organism";
import { userData } from "@/data/user";
import { ChatData, type Chat } from "@/data/chat";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [newMessage, setNewMessage] = useState("");

  // Effect to conditionally hide bottom navbar
  useEffect(() => {
    const style = document.createElement('style');
    
    if (selectedChat) {
      // Only hide bottom navbar when a chat is selected
      style.innerHTML = `
        .fixed-bottom-nav, 
        nav[class*="fixed"][class*="bottom"],
        div[class*="fixed"][class*="bottom"] {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Cleanup function
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [selectedChat]); // Run effect when selectedChat changes

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;
    setNewMessage("");
  };

  return (
    <>
      <NavbarDashboard />
      <main className="pt-16 md:pt-20 bg-gray-50 min-h-screen">
        {/* Mobile View */}
        <div className="md:hidden">
          {!selectedChat ? (
            // Chat List View
            <div className="h-[calc(100vh-64px)]">
              <div className="p-4 bg-white border-b">
                <h2 className="text-xl font-semibold">Pesan</h2>
              </div>
              <div className="divide-y">
                {ChatData.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat)}
                    className="p-4 flex gap-3 bg-white cursor-pointer active:bg-gray-50"
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
                    <span className="text-xs text-gray-400">
                      {chat.user.lastSeen}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Chat Detail View
            <div className="h-[calc(100vh-64px)] flex flex-col bg-white">
              <div className="p-4 border-b flex items-center gap-3">
                <button 
                  onClick={() => setSelectedChat(null)}
                  className="p-2 -ml-2 hover:bg-gray-100 rounded-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
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
                  <p className="text-sm text-gray-500">{selectedChat.user.lastSeen}</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {selectedChat.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === userData.name ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        message.sender === userData.name
                          ? "bg-[#2c6e49] text-white rounded-br-none"
                          : "bg-white rounded-bl-none shadow-sm"
                      }`}
                    >
                      <p className="break-words">{message.text}</p>
                      <span className={`text-xs mt-1 block ${
                        message.sender === userData.name ? "text-[#d7f5e6]" : "text-gray-500"
                      }`}>
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Ketik pesan..."
                    className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handleSendMessage();
                    }}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700"
                  >
                    <IoSend className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop View - Redesigned */}
        <div className="hidden md:block py-6">
          <div className="container mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-[calc(100vh-140px)] border border-gray-100">
              <div className="grid grid-cols-12 h-full">
                {/* Chat List - Redesigned */}
                <div className="col-span-4 flex flex-col h-full border-r border-gray-100">
                  <div className="p-5 border-b border-gray-100 bg-gray-50">
                    <h2 className="text-xl font-semibold">Messages</h2>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    {ChatData.map((chat) => (
                      <div
                        key={chat.id}
                        onClick={() => setSelectedChat(chat)}
                        className={`p-4 flex gap-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                          selectedChat?.id === chat.id ? "bg-green-50 border-l-4 border-green-500" : ""
                        }`}
                      >
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <Image
                            src={chat.user.avatar}
                            alt={chat.user.name}
                            fill
                            className="object-cover rounded-full"
                          />
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-600 rounded-full border-2 border-white"></span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium">{chat.user.name}</h3>
                          <p className="text-sm text-gray-500 truncate">
                            {chat.messages[chat.messages.length - 1].text}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs text-gray-400 flex-shrink-0 mb-1">
                            {chat.user.lastSeen}
                          </span>
                          <span className="w-5 h-5 bg-green-600 rounded-full text-white text-xs flex items-center justify-center">
                            2
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Window - Redesigned */}
                <div className="col-span-8 flex flex-col h-full bg-gray-50">
                  {selectedChat ? (
                    <>
                      {/* Chat Header - Redesigned */}
                      <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 flex-shrink-0">
                            <Image
                              src={selectedChat.user.avatar}
                              alt={selectedChat.user.name}
                              fill
                              className="object-cover rounded-full"
                            />
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#2c6e49] rounded-full border-2 border-white"></span>
                          </div>
                          <div>
                            <h3 className="font-medium">{selectedChat.user.name}</h3>
                            <p className="text-xs text-[#2c6e49]">
                              {selectedChat.user.lastSeen}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Messages - Redesigned */}
                      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('/images/chat-pattern.png')] bg-repeat">
                        {selectedChat.messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${
                              message.sender === userData.name
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            {message.sender !== userData.name && (
                              <div className="relative w-8 h-8 mr-2 flex-shrink-0 self-end">
                                <Image
                                  src={selectedChat.user.avatar}
                                  alt={selectedChat.user.name}
                                  fill
                                  className="object-cover rounded-full"
                                />
                              </div>
                            )}
                            <div
                              className={`max-w-[70%] rounded-2xl p-3.5 ${
                                message.sender === userData.name
                                  ? "bg-[#2c6e49] text-white rounded-br-none shadow-md"
                                  : "bg-white rounded-bl-none shadow-md"
                              }`}
                            >
                              <p className="break-words">{message.text}</p>
                              <span
                                className={`text-xs mt-1.5 block ${
                                  message.sender === userData.name
                                    ? "text-[#d7f5e6]"
                                    : "text-gray-500"
                                }`}
                              >
                                {message.timestamp}
                                {message.sender === userData.name && (
                                  <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Message Input - Redesigned */}
                      <div className="p-4 bg-white border-t border-gray-100">
                        <div className="flex gap-2 items-center">
                          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                          </button>
                          <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2c6e49] focus:border-transparent"
                            onKeyPress={(e) => {
                              if (e.key === "Enter") handleSendMessage();
                            }}
                          />
                          <button
                            onClick={handleSendMessage}
                            className="w-10 h-10 bg-gradient-to-r from-[#2c6e49] to-[#3d9a68] text-white rounded-full flex items-center justify-center hover:from-[#235539] hover:to-[#2c6e49] transition-all shadow-md"
                          >
                            <IoSend className="text-xl" />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500 bg-gray-50">
                      <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 max-w-md">
                        <div className="w-20 h-20 bg-[#edf5f0] rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-10 h-10 text-[#2c6e49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-800 mb-2">No conversation selected</h3>
                        <p className="text-gray-500 mb-4">Choose a chat from the list to start messaging</p>
                        <p className="text-xs text-gray-400">Your messages are secure and private</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}