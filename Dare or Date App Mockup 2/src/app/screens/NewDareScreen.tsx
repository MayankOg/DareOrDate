import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Sparkles } from "lucide-react";

export function NewDareScreen() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProof, setSelectedProof] = useState("");
  const [timeLimit, setTimeLimit] = useState("24");

  const categories = [
    "🎤 Performance",
    "💪 Fitness",
    "🎨 Creative",
    "😂 Fun",
    "🧠 Challenge",
    "🌟 Adventure",
  ];

  const proofTypes = ["📸 Photo", "🎥 Video", "📝 Text"];

  return (
    <div className="h-full bg-gradient-to-br from-zinc-950 via-black to-zinc-950 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white">Create a Dare</h1>
        </div>
        <p className="text-zinc-400">
          Challenge others and win points when they complete it
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-auto px-6 pb-6 space-y-6">
        {/* Dare Description */}
        <div>
          <label className="text-sm text-zinc-400 mb-2 block">
            What's the dare?
          </label>
          <textarea
            placeholder="Describe your dare in detail..."
            rows={4}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4B6E] resize-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-sm text-zinc-400 mb-2 block">Category</label>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] border-transparent text-white"
                    : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Proof Type */}
        <div>
          <label className="text-sm text-zinc-400 mb-2 block">
            Proof Required
          </label>
          <div className="flex gap-2">
            {proofTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedProof(type)}
                className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all ${
                  selectedProof === type
                    ? "bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] border-transparent text-white"
                    : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Time Limit */}
        <div>
          <label className="text-sm text-zinc-400 mb-2 block">
            Time Limit (hours)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="72"
              value={timeLimit}
              onChange={(e) => setTimeLimit(e.target.value)}
              className="flex-1 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#FF4B6E] [&::-webkit-slider-thumb]:rounded-full"
            />
            <span className="text-white font-semibold w-16 text-right">
              {timeLimit}h
            </span>
          </div>
        </div>

        {/* Points Stake */}
        <div>
          <label className="text-sm text-zinc-400 mb-2 block">
            Points Stake
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[10, 25, 50, 100].map((points) => (
              <button
                key={points}
                className="px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white hover:border-[#FF4B6E] transition-colors"
              >
                {points}
              </button>
            ))}
          </div>
        </div>

        {/* AI Suggestion */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold mb-1">AI Suggestion</h4>
              <p className="text-sm text-purple-200/80">
                Make it fun and achievable! Popular dares get 3x more
                participants.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="px-6 py-4 bg-zinc-900 border-t border-zinc-800">
        <button
          onClick={() => navigate("/app/dares")}
          className="w-full bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] text-white rounded-xl py-3 font-semibold hover:shadow-lg transition-shadow"
        >
          Post Dare
        </button>
      </div>
    </div>
  );
}
