import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Clock, Trophy, Shield, Verified } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function DareDetailsScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gradient-to-br from-zinc-950 via-black to-zinc-950 flex flex-col">
      {/* Header with Back Button */}
      <div className="px-6 pt-6 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 pb-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760551937527-2bc6cfe45180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGUlMjBjYXN1YWx8ZW58MXx8fHwxNzc0Mjk4MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Emma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white">Emma, 24</h3>
                <Verified className="w-5 h-5 text-blue-400" fill="currentColor" />
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>2 km away</span>
              </div>
            </div>
            <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg text-sm hover:bg-zinc-700 transition-colors">
              View Profile
            </button>
          </div>
        </div>

        {/* Dare Card */}
        <div className="bg-gradient-to-br from-[#FF4B6E]/10 to-[#FF6B88]/10 border border-[#FF4B6E]/30 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#FF4B6E]/20 text-[#FF4B6E] rounded-lg text-sm font-semibold">
              🎤 Performance
            </span>
            <div className="flex items-center gap-2 text-white">
              <Trophy className="w-5 h-5 text-[#FF4B6E]" />
              <span className="font-bold text-xl">50 pts</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">
            Sing your favorite song in a public place
          </h2>

          <p className="text-zinc-300 mb-6">
            Record yourself singing at least 30 seconds of your favorite song in a public place. 
            Show your confidence and have fun with it! Bonus points for creativity and enthusiasm.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-zinc-400" />
                <span className="text-xs text-zinc-400">Time Left</span>
              </div>
              <p className="text-white font-semibold">2h 30m</p>
            </div>

            <div className="bg-zinc-900/50 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-zinc-400" />
                <span className="text-xs text-zinc-400">Proof Type</span>
              </div>
              <p className="text-white font-semibold">Video</p>
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" />
            Rules & Safety
          </h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-[#FF4B6E] mt-0.5">•</span>
              <span>Submit proof within the time limit</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF4B6E] mt-0.5">•</span>
              <span>Your proof will be reviewed by Emma</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF4B6E] mt-0.5">•</span>
              <span>Be respectful and follow community guidelines</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF4B6E] mt-0.5">•</span>
              <span>You can dispute if proof is rejected unfairly</span>
            </li>
          </ul>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800 text-center">
            <p className="text-2xl font-bold text-white">89%</p>
            <p className="text-xs text-zinc-400 mt-1">Success Rate</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800 text-center">
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-xs text-zinc-400 mt-1">Participating</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800 text-center">
            <p className="text-2xl font-bold text-white">4.8</p>
            <p className="text-xs text-zinc-400 mt-1">Rating</p>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-6 py-4 bg-zinc-900 border-t border-zinc-800 space-y-2">
        <button
          onClick={() => navigate("/app/dares/1/proof")}
          className="w-full bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] text-white rounded-xl py-3 font-semibold hover:shadow-lg transition-shadow"
        >
          Accept Dare
        </button>
        <button className="w-full bg-zinc-800 text-white rounded-xl py-3 font-semibold hover:bg-zinc-700 transition-colors">
          Decline
        </button>
      </div>
    </div>
  );
}
