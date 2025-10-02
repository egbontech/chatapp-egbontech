"use client";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useChatStore } from "../../lib/store";
import { SendMessage } from "../../custom-hooks/useMessage";

export default function ChatInput() {
  const [text, setText] = useState("");
  const { activeChatUser } = useChatStore();
  const receiverId = activeChatUser?.id;

  const handleSend = async () => {
    if (!text) return;
    if(!receiverId) return;
    await SendMessage(text,receiverId);
    setText("");
  };
  return (
    <div className="p-4 border-t border-border flex items-center gap-2 bg-slate-950">
      <input
      value={text}
      onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Write a message..."
        className="px-4 py-2 flex-1 rounded-full bg-slate-800 text-white border border-slate-700 focus:outline-none"
      />
      {text.trim().length > 0 && (
        <button onClick={handleSend} className="w-10 h-10 bg-gradient-to-r from-blue-500 to bg-purple-600 text-white hover:bg-blue-700 transition shrink-0 rounded-full cursor-pointer grid place-items-center">
          <IoIosSend size={20} />
        </button>
      )}
    </div>
  );
}
