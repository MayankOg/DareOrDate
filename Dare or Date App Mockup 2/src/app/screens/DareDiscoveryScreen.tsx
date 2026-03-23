import { useNavigate } from "react-router";
import { Clock, Trophy, Flame, Filter } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const dares = [
  {
    id: 1,
    title: "Sing your favorite song in a public place",
    category: "Performance",
    stake: 50,
    timeLeft: "2h 30m",
    difficulty: "Medium",
    participants: 12,
    image: "https://images.unsplash.com/photo-1574368202449-7efa1b4f3e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMGNhc3VhbCUyMHN0eWxlfGVufDF8fHx8MTc3NDI5ODE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Do 20 push-ups and share a video",
    category: "Fitness",
    stake: 30,
    timeLeft: "1h 15m",
    difficulty: "Easy",
    participants: 24,
    image: "https://images.unsplash.com/photo-1765175095011-7c31690b4e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNvbmZpZGVudCUyMG1vZGVybnxlbnwxfHx8fDE3NzQyOTgxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "Share your best dance moves",
    category: "Fun",
    stake: 40,
    timeLeft: "3h 45m",
    difficulty: "Medium",
    participants: 18,
    image: "https://images.unsplash.com/photo-1760551937527-2bc6cfe45180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGUlMjBjYXN1YWx8ZW58MXx8fHwxNzc0Mjk4MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "Cook a meal and share the recipe",
    category: "Creative",
    stake: 60,
    timeLeft: "5h 20m",
    difficulty: "Hard",
    participants: 8,
    image: "https://images.unsplash.com/photo-1613626201548-3d1864ef9d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDE5MTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function DareDiscoveryScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gradient-to-br from-zinc-950 via-black to-zinc-950 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-bold text-white">Active Dares</h1>
          </div>
          <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
            <Filter className="w-6 h-6 text-zinc-400" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800">
            <Trophy className="w-5 h-5 text-[#FF4B6E] mb-1" />
            <p className="text-xl font-bold text-white">250</p>
            <p className="text-xs text-zinc-400">Points</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800">
            <Flame className="w-5 h-5 text-orange-500 mb-1" />
            <p className="text-xl font-bold text-white">12</p>
            <p className="text-xs text-zinc-400">Active</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800">
            <Clock className="w-5 h-5 text-blue-500 mb-1" />
            <p className="text-xl font-bold text-white">8</p>
            <p className="text-xs text-zinc-400">Completed</p>
          </div>
        </div>
      </div>

      {/* Dare Cards */}
      <div className="flex-1 overflow-auto px-6 space-y-4 pb-6">
        {dares.map((dare) => (
          <div
            key={dare.id}
            onClick={() => navigate(`/app/dares/${dare.id}`)}
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#FF4B6E] transition-colors cursor-pointer"
          >
            <div className="flex gap-4 p-4">
              {/* Dare Image */}
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={dare.image}
                  alt={dare.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dare Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white text-sm line-clamp-2">
                    {dare.title}
                  </h3>
                  <span className="px-2 py-1 bg-[#FF4B6E]/20 text-[#FF4B6E] rounded-lg text-xs font-semibold whitespace-nowrap">
                    {dare.stake} pts
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <span className="px-2 py-1 bg-zinc-800 rounded-md">{dare.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {dare.timeLeft}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-zinc-500">
                    {dare.participants} participating
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-md ${
                      dare.difficulty === "Easy"
                        ? "bg-green-500/20 text-green-400"
                        : dare.difficulty === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {dare.difficulty}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Dare Button */}
      <div className="px-6 py-4 bg-zinc-900 border-t border-zinc-800">
        <button
          onClick={() => navigate("/app/dares/new")}
          className="w-full bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] text-white rounded-xl py-3 font-semibold hover:shadow-lg transition-shadow"
        >
          Create New Dare
        </button>
      </div>
    </div>
  );
}
