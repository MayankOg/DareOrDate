import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Shield,
  AlertCircle,
  Eye,
  Lock,
  UserX,
  Flag,
  CheckCircle,
  Camera,
} from "lucide-react";

export function SafetyScreen() {
  const navigate = useNavigate();

  const safetyFeatures = [
    {
      icon: Shield,
      title: "Verified Badge",
      description: "Verify your identity with photo verification",
      action: "Verify Now",
      color: "text-blue-500",
    },
    {
      icon: Eye,
      title: "Privacy Controls",
      description: "Control who can see your profile and activity",
      action: "Manage",
      color: "text-purple-500",
    },
    {
      icon: Lock,
      title: "Block Users",
      description: "Block and unblock users you don't want to interact with",
      action: "View Blocked",
      color: "text-red-500",
    },
    {
      icon: Flag,
      title: "Report Issues",
      description: "Report inappropriate content or behavior",
      action: "Report",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-zinc-950 via-black to-zinc-950 overflow-auto">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white">Safety & Privacy</h1>
        </div>
        <p className="text-zinc-400">
          Manage your safety settings and privacy preferences
        </p>
      </div>

      {/* Safety Banner */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-800/30 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-semibold mb-2">
                Your Safety Matters
              </h3>
              <p className="text-blue-200/80 text-sm leading-relaxed">
                We're committed to creating a safe and respectful community.
                Use these tools to control your experience and report any
                concerns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Status */}
      <div className="px-6 pb-6">
        <h3 className="text-white font-semibold mb-3">Verification</h3>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Camera className="w-8 h-8 text-blue-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">
                Get Verified Badge
              </h4>
              <p className="text-zinc-400 text-sm">
                Increase trust with photo verification
              </p>
            </div>
            <CheckCircle className="w-6 h-6 text-green-400" />
          </div>
          <button className="w-full bg-blue-500/20 text-blue-400 rounded-xl py-3 font-semibold hover:bg-blue-500/30 transition-colors">
            Start Verification
          </button>
        </div>
      </div>

      {/* Safety Features */}
      <div className="px-6 pb-6">
        <h3 className="text-white font-semibold mb-3">Safety Tools</h3>
        <div className="space-y-3">
          {safetyFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center ${feature.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg text-sm hover:bg-zinc-700 transition-colors">
                    {feature.action}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="px-6 pb-6">
        <h3 className="text-white font-semibold mb-3">Privacy Settings</h3>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl divide-y divide-zinc-800">
          <div className="p-4 flex items-center justify-between">
            <div>
              <h4 className="text-white font-semibold mb-1">Show Activity Status</h4>
              <p className="text-zinc-400 text-sm">
                Let others see when you're online
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF4B6E]"></div>
            </label>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <h4 className="text-white font-semibold mb-1">Read Receipts</h4>
              <p className="text-zinc-400 text-sm">
                Show when you've read messages
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF4B6E]"></div>
            </label>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <h4 className="text-white font-semibold mb-1">Location Sharing</h4>
              <p className="text-zinc-400 text-sm">
                Share approximate location
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF4B6E]"></div>
            </label>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <h4 className="text-white font-semibold mb-1">Profile Visibility</h4>
              <p className="text-zinc-400 text-sm">
                Show profile to everyone
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF4B6E]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Safety Resources */}
      <div className="px-6 pb-24">
        <h3 className="text-white font-semibold mb-3">Safety Resources</h3>
        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold mb-2">
                Community Guidelines
              </h4>
              <p className="text-yellow-200/80 text-sm mb-3">
                Learn about our community standards and what behavior is not
                acceptable on Dare or Date.
              </p>
              <button className="text-yellow-400 text-sm font-semibold hover:text-yellow-300">
                Read Guidelines →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
