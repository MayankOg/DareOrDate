import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Camera, Video, Upload } from "lucide-react";

export function ProofSubmissionScreen() {
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");

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
          <h1 className="text-2xl font-bold text-white">Submit Proof</h1>
        </div>
        <p className="text-zinc-400">
          Upload your video of the dare completion
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 pb-6 space-y-6">
        {/* Dare Summary */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
          <h3 className="text-white font-semibold mb-2">The Dare</h3>
          <p className="text-zinc-400 text-sm">
            Sing your favorite song in a public place
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="px-2 py-1 bg-[#FF4B6E]/20 text-[#FF4B6E] rounded text-xs font-semibold">
              50 pts
            </span>
            <span className="px-2 py-1 bg-zinc-800 text-zinc-400 rounded text-xs">
              Video Required
            </span>
          </div>
        </div>

        {/* Upload Area */}
        <div className="bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-2xl p-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FF4B6E] to-[#FF6B88] rounded-full flex items-center justify-center mb-4">
              <Video className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-white font-semibold mb-2">Upload Your Video</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Max file size: 50MB • MP4, MOV, or AVI
            </p>

            <div className="flex gap-3 w-full">
              <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-3 flex items-center justify-center gap-2 transition-colors">
                <Camera className="w-5 h-5" />
                <span>Camera</span>
              </button>
              <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-3 flex items-center justify-center gap-2 transition-colors">
                <Upload className="w-5 h-5" />
                <span>Gallery</span>
              </button>
            </div>
          </div>
        </div>

        {/* Preview placeholder (shown after upload) */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden aspect-video hidden">
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-600">Video Preview</span>
          </div>
        </div>

        {/* Caption */}
        <div>
          <label className="text-sm text-zinc-400 mb-2 block">
            Add a caption (optional)
          </label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Tell them about your experience..."
            rows={3}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4B6E] resize-none"
          />
        </div>

        {/* Guidelines */}
        <div className="bg-blue-900/20 border border-blue-800/30 rounded-xl p-4">
          <h4 className="text-white font-semibold mb-2 text-sm">
            📝 Submission Guidelines
          </h4>
          <ul className="space-y-1 text-xs text-blue-200/80">
            <li>• Ensure your face is clearly visible</li>
            <li>• Show proof that you're in a public place</li>
            <li>• Be respectful to people around you</li>
            <li>• Make sure audio is clear and audible</li>
          </ul>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="px-6 py-4 bg-zinc-900 border-t border-zinc-800">
        <button
          onClick={() => navigate("/app/dares/1/approval")}
          className="w-full bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] text-white rounded-xl py-3 font-semibold hover:shadow-lg transition-shadow disabled:opacity-50"
          disabled={!caption}
        >
          Submit for Review
        </button>
      </div>
    </div>
  );
}
