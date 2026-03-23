import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Settings, MapPin, Heart, X, Flame, Verified, Info } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const profiles = [
  {
    id: 1,
    name: "Emma",
    age: 24,
    distance: "2 km away",
    bio: "Adventure seeker 🌍 | Coffee addict ☕ | Love hiking and trying new restaurants",
    interests: ["Travel", "Coffee", "Hiking", "Food"],
    verified: true,
    image: "https://images.unsplash.com/photo-1760551937527-2bc6cfe45180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGUlMjBjYXN1YWx8ZW58MXx8fHwxNzc0Mjk4MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Alex",
    age: 27,
    distance: "5 km away",
    bio: "Photographer 📸 | Fitness enthusiast 💪 | Dog lover 🐕",
    interests: ["Photography", "Fitness", "Dogs", "Art"],
    verified: true,
    image: "https://images.unsplash.com/photo-1765175095011-7c31690b4e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNvbmZpZGVudCUyMG1vZGVybnxlbnwxfHx8fDE3NzQyOTgxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Sophie",
    age: 23,
    distance: "3 km away",
    bio: "Artist & designer ✨ | Music lover 🎵 | Always up for spontaneous adventures",
    interests: ["Art", "Music", "Design", "Travel"],
    verified: false,
    image: "https://images.unsplash.com/photo-1613626201548-3d1864ef9d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDE5MTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function HomeScreen() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const currentProfile = profiles[currentIndex];

  const handleSwipe = (direction: "left" | "right") => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    setShowInfo(false);
  };

  return (
    <div className="h-full bg-gradient-to-br from-zinc-950 via-black to-zinc-950 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF4B6E] to-[#FF6B88] rounded-xl flex items-center justify-center">
            <Flame className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-bold text-white">Discover</h1>
        </div>
        <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
          <Settings className="w-6 h-6 text-zinc-400" />
        </button>
      </div>

      {/* Featured Dare Banner */}
      <div className="px-6 pb-4">
        <div
          onClick={() => navigate("/app/dares")}
          className="bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] rounded-2xl p-4 cursor-pointer hover:scale-[1.02] transition-transform"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold mb-1">🔥 New Dare Available</h3>
              <p className="text-white/90 text-sm">Win 50 points and unlock exclusive matches!</p>
            </div>
            <Flame className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="flex-1 px-6 pb-6 flex flex-col">
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Profile Image */}
          <ImageWithFallback
            src={currentProfile.image}
            alt={currentProfile.name}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

          {/* Info button */}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center"
          >
            <Info className="w-5 h-5 text-white" />
          </button>

          {/* Profile Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-3xl font-bold text-white">
                {currentProfile.name}, {currentProfile.age}
              </h2>
              {currentProfile.verified && (
                <Verified className="w-6 h-6 text-blue-400" fill="currentColor" />
              )}
            </div>

            <div className="flex items-center gap-2 text-white/80 mb-3">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{currentProfile.distance}</span>
            </div>

            {showInfo && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 space-y-3"
              >
                <p className="text-white/90">{currentProfile.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {currentProfile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => handleSwipe("left")}
                className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
              >
                <X className="w-8 h-8 text-white" strokeWidth={2.5} />
              </button>

              <button
                onClick={() => navigate("/app/dares/1")}
                className="w-20 h-20 bg-gradient-to-br from-[#FF4B6E] to-[#FF6B88] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <Flame className="w-10 h-10 text-white" strokeWidth={2.5} />
              </button>

              <button
                onClick={() => handleSwipe("right")}
                className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
              >
                <Heart className="w-8 h-8 text-white" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* New Dare Button */}
        <button
          onClick={() => navigate("/app/dares/new")}
          className="mt-4 w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 font-semibold hover:bg-zinc-800 transition-colors"
        >
          Create a Dare
        </button>
      </div>
    </div>
  );
}
