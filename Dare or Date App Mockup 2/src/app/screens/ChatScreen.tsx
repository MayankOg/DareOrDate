import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  MoreVertical,
  Send,
  Plus,
  Smile,
  Image as ImageIcon,
  Mic,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const messages = [
  {
    id: 1,
    sender: "other",
    text: "Hey! That dare was so much fun! 😄",
    time: "10:32 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "I know right! You were amazing!",
    time: "10:33 AM",
  },
  {
    id: 3,
    sender: "other",
    text: "Thanks! Want to grab coffee sometime?",
    time: "10:35 AM",
  },
  {
    id: 4,
    sender: "me",
    text: "I'd love to! When are you free?",
    time: "10:36 AM",
  },
  {
    id: 5,
    sender: "other",
    text: "How about this Saturday afternoon?",
    time: "10:38 AM",
  },
];

export function ChatScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState("");

  return (
    <div className="h-full bg-black flex flex-col">
      {/* Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760551937527-2bc6cfe45180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGUlMjBjYXN1YWx8ZW58MXx8fHwxNzc0Mjk4MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Emma"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold">Emma</h3>
              <p className="text-xs text-green-400">Online</p>
            </div>
          </div>

          <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Dare Badge */}
      <div className="px-4 py-3 bg-zinc-900/50">
        <div className="bg-gradient-to-r from-[#FF4B6E]/20 to-[#FF6B88]/20 border border-[#FF4B6E]/30 rounded-xl p-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF4B6E] rounded-full flex items-center justify-center text-xl">
            🎤
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold">
              You matched through a dare!
            </p>
            <p className="text-[#FF4B6E] text-xs">Sing in public place • +50 pts</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto px-4 py-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] ${
                msg.sender === "me" ? "items-end" : "items-start"
              } flex flex-col gap-1`}
            >
              <div
                className={`px-4 py-3 rounded-2xl ${
                  msg.sender === "me"
                    ? "bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] text-white rounded-br-md"
                    : "bg-zinc-900 text-white rounded-bl-md"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
              <span className="text-xs text-zinc-500 px-2">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-zinc-900 border-t border-zinc-800 px-4 py-3">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
            <Plus className="w-5 h-5 text-zinc-400" />
          </button>

          <div className="flex-1 bg-zinc-800 rounded-full px-4 py-2 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-white placeholder:text-zinc-500 focus:outline-none"
            />
            <button className="p-1 hover:bg-zinc-700 rounded-lg transition-colors">
              <Smile className="w-5 h-5 text-zinc-400" />
            </button>
          </div>

          {message ? (
            <button className="p-3 bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] rounded-full hover:shadow-lg transition-shadow">
              <Send className="w-5 h-5 text-white" />
            </button>
          ) : (
            <div className="flex gap-2">
              <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                <ImageIcon className="w-5 h-5 text-zinc-400" />
              </button>
              <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                <Mic className="w-5 h-5 text-zinc-400" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
