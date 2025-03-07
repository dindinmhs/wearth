"use client"

import { useState } from "react";
import { ChatData, type Chat } from "@/data/chat";
import { userData } from "@/data/user";
import Image from "next/image";
import { IoSend } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(ChatData[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;
    setNewMessage("");
  };

  return (
    <div className="hidden md:block fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          <span className="text-sm font-medium">Chat</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-lg w-[500px] h-[400px] flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">Pesan</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoClose className="text-xl" />
            </button>
          </div>

          {/* Rest of the chat interface */}
          <div className="flex-1 flex">
            {/* Chat List */}
            <div className="w-1/3 border-r flex flex-col">
              <div className="flex-1 overflow-y-auto">
                {ChatData.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat)}
                    className={`p-3 flex gap-2 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedChat?.id === chat.id ? "bg-gray-50" : ""
                    }`}
                  >
                    <div className="relative w-10 h-10 flex-shrink-0">
                      <Image
                        src={chat.user.avatar}
                        alt={chat.user.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm">{chat.user.name}</h3>
                      <p className="text-xs text-gray-500 truncate">
                        {chat.messages[chat.messages.length - 1].text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="w-2/3 flex flex-col">
              {selectedChat ? (
                <>
                  <div className="p-3 border-b">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8">
                        <Image
                          src={selectedChat.user.avatar}
                          alt={selectedChat.user.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{selectedChat.user.name}</h3>
                        <p className="text-xs text-gray-500">{selectedChat.user.lastSeen}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-3 space-y-3">
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
                          className={`max-w-[70%] rounded-lg p-2 text-sm ${
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

                  <div className="p-3 border-t">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Ketik pesan..."
                        className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") handleSendMessage();
                        }}
                      />
                      <button
                        onClick={handleSendMessage}
                        className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <IoSend className="text-lg" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                  Pilih chat untuk mulai berkomunikasi
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}