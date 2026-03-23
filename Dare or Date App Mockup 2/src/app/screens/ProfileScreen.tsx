import { useNavigate } from "react-router";
import {
  Settings,
  Trophy,
  Flame,
  Star,
  Edit2,
  Shield,
  Award,
  Target,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const stats = [
  { label: "Dares Completed", value: "24", icon: Flame, color: "text-orange-500" },
  { label: "Points Earned", value: "1,250", icon: Trophy, color: "text-yellow-500" },
  { label: "Success Rate", value: "92%", icon: Target, color: "text-green-500" },
  { label: "Rating", value: "4.8", icon: Star, color: "text-blue-500" },
];

const achievements = [
  {
    id: 1,
    title: "First Dare",
    description: "Complete your first dare",
    icon: "🎯",
    unlocked: true,
  },
  {
    id: 2,
    title: "Social Butterfly",
    description: "Match with 10 people",
    icon: "🦋",
    unlocked: true,
  },
  {
    id: 3,
    title: "Dare Master",
    description: "Complete 50 dares",
    icon: "👑",
    unlocked: false,
  },
  {
    id: 4,
    title: "Top Rated",
    description: "Maintain 4.5+ rating",
    icon: "⭐",
    unlocked: true,
  },
];

export function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gradient-to-br from-zinc-950 via-black to-zinc-950 overflow-auto">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Profile</h1>
        <button
          onClick={() => navigate("/app/safety")}
          className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
        >
          <Settings className="w-6 h-6 text-zinc-400" />
        </button>
      </div>

      {/* Profile Card */}
      <div className="px-6 pb-6">
        <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
          <div className="aspect-[3/2] relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1771584969936-571ef1c3f130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlcnNvbiUyMHBvcnRyYWl0JTIwbmV1dHJhbCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc0Mjk4MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900" />

            <button
              onClick={() => {}}
              className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Edit2 className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-1">You, 25</h2>
            <p className="text-zinc-400 mb-4">San Francisco, CA</p>

            <p className="text-zinc-300 mb-4">
              Adventure seeker 🌍 | Coffee addict ☕ | Always up for a good dare
            </p>

            <div className="flex flex-wrap gap-2">
              {["Travel", "Coffee", "Hiking", "Photography", "Music"].map(
                (interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Points Balance */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm mb-1">Points Balance</p>
              <h3 className="text-3xl font-bold text-white">1,250</h3>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
          <button className="mt-4 w-full bg-white/20 backdrop-blur-sm text-white rounded-xl py-2 text-sm font-semibold hover:bg-white/30 transition-colors">
            Redeem Rewards
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 pb-6">
        <h3 className="text-white font-semibold mb-3">Your Stats</h3>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4"
              >
                <Icon className={`w-6 h-6 ${stat.color} mb-2`} />
                <p className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-zinc-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold">Achievements</h3>
          <button className="text-sm text-[#FF4B6E] hover:text-[#FF6B88]">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`rounded-xl p-4 border ${
                achievement.unlocked
                  ? "bg-zinc-900 border-zinc-800"
                  : "bg-zinc-900/50 border-zinc-800/50 opacity-50"
              }`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h4 className="text-white font-semibold text-sm mb-1">
                {achievement.title}
              </h4>
              <p className="text-xs text-zinc-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 pb-24">
        <div className="space-y-2">
          <button className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 flex items-center gap-3 text-white hover:border-zinc-700 transition-colors">
            <Edit2 className="w-5 h-5 text-zinc-400" />
            <span>Edit Profile</span>
          </button>
          <button
            onClick={() => navigate("/app/safety")}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 flex items-center gap-3 text-white hover:border-zinc-700 transition-colors"
          >
            <Shield className="w-5 h-5 text-zinc-400" />
            <span>Safety & Privacy</span>
          </button>
          <button className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 flex items-center gap-3 text-white hover:border-zinc-700 transition-colors">
            <Award className="w-5 h-5 text-zinc-400" />
            <span>Verify Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}
