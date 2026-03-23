import { useNavigate } from "react-router";
import { Sparkles, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const matches = [
  {
    id: 1,
    name: "Emma",
    age: 24,
    image: "https://images.unsplash.com/photo-1760551937527-2bc6cfe45180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGUlMjBjYXN1YWx8ZW58MXx8fHwxNzc0Mjk4MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    matchedAt: "2h ago",
    lastMessage: "That dare was so fun! 😄",
    unread: true,
    dareCompleted: true,
  },
  {
    id: 2,
    name: "Alex",
    age: 27,
    image: "https://images.unsplash.com/photo-1765175095011-7c31690b4e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNvbmZpZGVudCUyMG1vZGVybnxlbnwxfHx8fDE3NzQyOTgxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    matchedAt: "1d ago",
    lastMessage: "Hey! How's it going?",
    unread: false,
    dareCompleted: true,
  },
  {
    id: 3,
    name: "Sophie",
    age: 23,
    image: "https://images.unsplash.com/photo-1613626201548-3d1864ef9d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDE5MTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    matchedAt: "2d ago",
    lastMessage: "Thanks for approving! 🎉",
    unread: false,
    dareCompleted: true,
  },
  {
    id: 4,
    name: "Chris",
    age: 26,
    image: "https://images.unsplash.com/photo-1574368202449-7efa1b4f3e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMGNhc3VhbCUyMHN0eWxlfGVufDF8fHx8MTc3NDI5ODE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    matchedAt: "3d ago",
    lastMessage: "Nice to meet you!",
    unread: false,
    dareCompleted: false,
  },
];

export function MatchesScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gradient-to-br from-zinc-950 via-black to-zinc-950 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-white mb-1">Matches</h1>
        <p className="text-zinc-400">
          {matches.filter((m) => m.unread).length} new conversations
        </p>
      </div>

      {/* New Match Banner */}
      <div className="px-6 pb-4">
        <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-800/30 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-pink-400" />
            <div className="flex-1">
              <h3 className="text-white font-semibold">New Match!</h3>
              <p className="text-pink-200/80 text-sm">
                You and Emma completed a dare together
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Matches List */}
      <div className="flex-1 overflow-auto px-6 pb-6 space-y-3">
        {matches.map((match) => (
          <div
            key={match.id}
            onClick={() => navigate(`/app/chat/${match.id}`)}
            className={`bg-zinc-900 border rounded-2xl p-4 cursor-pointer hover:border-[#FF4B6E] transition-colors ${
              match.unread ? "border-[#FF4B6E]/50" : "border-zinc-800"
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={match.image}
                    alt={match.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {match.unread && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF4B6E] rounded-full border-2 border-zinc-900" />
                )}
              </div>

              {/* Match Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-white">
                    {match.name}, {match.age}
                  </h3>
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {match.matchedAt}
                  </span>
                </div>

                <p
                  className={`text-sm truncate ${
                    match.unread ? "text-white font-medium" : "text-zinc-400"
                  }`}
                >
                  {match.lastMessage}
                </p>

                {match.dareCompleted && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded text-xs flex items-center gap-1">
                      ✓ Dare Completed
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Empty state suggestion */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center mt-6">
          <p className="text-zinc-400 mb-3">Want more matches?</p>
          <button
            onClick={() => navigate("/app")}
            className="text-[#FF4B6E] font-semibold hover:text-[#FF6B88]"
          >
            Complete more dares →
          </button>
        </div>
      </div>
    </div>
  );
}
