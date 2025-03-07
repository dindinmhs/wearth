"use client"

import { NavbarDashboard } from "@/components/organism";
import { userData } from "@/data/user";
import { ChatData, type Chat } from "@/data/chat";
import Image from "next/image";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [newMessage, setNewMessage] = useState("");

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
                          ? "bg-green-600 text-white rounded-br-none"
                          : "bg-white rounded-bl-none shadow-sm"
                      }`}
                    >
                      <p className="break-words">{message.text}</p>
                      <span className={`text-xs mt-1 block ${
                        message.sender === userData.name ? "text-green-100" : "text-gray-500"
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

        {/* Desktop View */}
        <div className="hidden md:block max-w-6xl mx-auto px-4 pb-6">
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
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
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
                            className={`max-w-[70%] rounded-2xl p-3 ${
                              message.sender === userData.name
                                ? "bg-green-600 text-white rounded-br-none"
                                : "bg-white rounded-bl-none shadow-sm"
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
                    <div className="p-4 border-t bg-white">
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
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <p className="mb-2">Pilih chat untuk mulai berkomunikasi</p>
                      <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
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