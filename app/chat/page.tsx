"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

type Message = {
  id: number;
  text: string;
  isMe: boolean;
};

const chats = [
  { id: 1, name: "علی رضایی" },
  { id: 2, name: "مریم محمدی" },
];

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "سلام", isMe: false },
    { id: 2, text: "سلام، بفرمایید", isMe: true },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeChat]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input, isMe: true },
    ]);

    setInput("");
  };

  return (
    <div className="h-screen bg-[#F5F5F0] flex flex-col" dir="rtl">

      {/* ========== LIST VIEW ========== */}
      {activeChat === null && (
        <div className="p-4 space-y-3">
          <h2 className="font-semibold mb-4">گفتگوها</h2>

          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className="p-4 bg-white border border-[#C2A68C] rounded-lg cursor-pointer"
            >
              {chat.name}
            </div>
          ))}
        </div>
      )}

      {/* ========== CHAT VIEW ========== */}
      {activeChat !== null && (
        <div className="flex flex-col flex-1">

          {/* Header */}
          <div className="flex items-center gap-3 p-4 bg-white border-b border-[#C2A68C]">
            <button onClick={() => setActiveChat(null)}>
              <ArrowLeft />
            </button>
            <span className="font-semibold">
              {chats.find((c) => c.id === activeChat)?.name}
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F8F6F2]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.isMe ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm max-w-xs break-words ${
                    msg.isMe
                      ? "bg-[#C2A68C] text-white"
                      : "bg-white border border-[#C2A68C]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-[#C2A68C] flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border border-[#C2A68C] rounded-full px-4 py-2 text-sm outline-none"
              placeholder="پیام بنویسید..."
            />
            <button
              onClick={handleSend}
              className="bg-[#C2A68C] text-white px-5 rounded-full text-sm"
            >
              ارسال
            </button>
          </div>

        </div>
      )}
    </div>
  );
}