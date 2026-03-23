import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Play, CheckCircle, XCircle, Flag } from "lucide-react";

export function ApprovalScreen() {
  const navigate = useNavigate();
  const [showDispute, setShowDispute] = useState(false);

  const handleApprove = () => {
    // Show success animation and navigate
    setTimeout(() => {
      navigate("/app/matches");
    }, 1500);
  };

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
          <h1 className="text-2xl font-bold text-white">Review Proof</h1>
        </div>
        <p className="text-zinc-400">Evaluate if the dare was completed</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 pb-6 space-y-6">
        {/* Dare Info */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-semibold">Sing in public place</h3>
            <span className="px-3 py-1 bg-[#FF4B6E]/20 text-[#FF4B6E] rounded-lg text-sm font-semibold">
              50 pts
            </span>
          </div>
          <p className="text-zinc-400 text-sm">
            Submitted by Alex • 5 minutes ago
          </p>
        </div>

        {/* Video Preview */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900" />
            <button className="relative w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </button>
          </div>

          {/* Caption */}
          <div className="p-4">
            <p className="text-white text-sm">
              "Had so much fun doing this! Hope you like my rendition of 'Don't Stop Believin'! 🎤🎶"
            </p>
          </div>
        </div>

        {/* Review Criteria */}
        <div className="bg-blue-900/20 border border-blue-800/30 rounded-xl p-4">
          <h4 className="text-white font-semibold mb-3 text-sm">
            ✅ Review Checklist
          </h4>
          <div className="space-y-2">
            <label className="flex items-center gap-3 text-sm text-blue-200/90">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-blue-500"
                defaultChecked
              />
              <span>Person is clearly visible</span>
            </label>
            <label className="flex items-center gap-3 text-sm text-blue-200/90">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-blue-500"
                defaultChecked
              />
              <span>Singing is audible in video</span>
            </label>
            <label className="flex items-center gap-3 text-sm text-blue-200/90">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-blue-500"
                defaultChecked
              />
              <span>Location appears to be public</span>
            </label>
            <label className="flex items-center gap-3 text-sm text-blue-200/90">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-blue-500"
                defaultChecked
              />
              <span>At least 30 seconds long</span>
            </label>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-xl p-4">
          <p className="text-yellow-200/90 text-sm">
            ⚠️ Only approve if the dare was genuinely completed according to the
            rules. Unfair rejections can be disputed.
          </p>
        </div>

        {showDispute && (
          <div className="bg-red-900/20 border border-red-800/30 rounded-xl p-4">
            <h4 className="text-white font-semibold mb-2 text-sm">
              Report Issue
            </h4>
            <textarea
              placeholder="Explain why this proof doesn't meet the requirements..."
              rows={3}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 resize-none text-sm"
            />
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="px-6 py-4 bg-zinc-900 border-t border-zinc-800">
        {!showDispute ? (
          <div className="flex gap-3">
            <button
              onClick={() => setShowDispute(true)}
              className="flex-1 bg-zinc-800 text-white rounded-xl py-3 font-semibold hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2"
            >
              <XCircle className="w-5 h-5" />
              <span>Reject</span>
            </button>
            <button
              onClick={handleApprove}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl py-3 font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Approve</span>
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <button className="w-full bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl py-3 font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
              <Flag className="w-5 h-5" />
              <span>Submit Rejection</span>
            </button>
            <button
              onClick={() => setShowDispute(false)}
              className="w-full bg-zinc-800 text-white rounded-xl py-3 font-semibold hover:bg-zinc-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
