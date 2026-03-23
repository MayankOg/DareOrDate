import { useState } from "react";
import { useNavigate } from "react-router";
import { Camera, Plus, X } from "lucide-react";

export function ProfileSetupScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    "Travel", "Fitness", "Music", "Art", "Food",
    "Movies", "Gaming", "Reading", "Sports", "Photography",
    "Dancing", "Cooking", "Hiking", "Yoga", "Coffee"
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate("/app");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col max-w-md mx-auto">
      {/* Progress bar */}
      <div className="bg-zinc-900 px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-semibold">Profile Setup</h3>
          <span className="text-sm text-zinc-400">{step} of 3</span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 py-6">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Add Photos</h2>
              <p className="text-zinc-400">Upload at least 2 photos to continue</p>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-3 gap-3">
              {/* Main photo */}
              <div className="col-span-2 row-span-2 aspect-[3/4] bg-zinc-900 rounded-2xl border-2 border-dashed border-zinc-700 flex flex-col items-center justify-center cursor-pointer hover:border-[#FF4B6E] transition-colors group">
                <Camera className="w-10 h-10 text-zinc-600 group-hover:text-[#FF4B6E] mb-2" />
                <span className="text-sm text-zinc-600 group-hover:text-[#FF4B6E]">Main Photo</span>
              </div>

              {/* Additional photos */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-zinc-900 rounded-xl border-2 border-dashed border-zinc-700 flex items-center justify-center cursor-pointer hover:border-[#FF4B6E] transition-colors group"
                >
                  <Plus className="w-6 h-6 text-zinc-600 group-hover:text-[#FF4B6E]" />
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">About You</h2>
              <p className="text-zinc-400">Tell us a bit about yourself</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-zinc-400 mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4B6E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-zinc-400 mb-2 block">Age</label>
                  <input
                    type="number"
                    placeholder="25"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4B6E]"
                  />
                </div>
                <div>
                  <label className="text-sm text-zinc-400 mb-2 block">Gender</label>
                  <select className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF4B6E]">
                    <option>Woman</option>
                    <option>Man</option>
                    <option>Non-binary</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-zinc-400 mb-2 block">Location</label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4B6E]"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400 mb-2 block">Bio</label>
                <textarea
                  placeholder="Write something interesting about yourself..."
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4B6E] resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Your Interests</h2>
              <p className="text-zinc-400">Select at least 5 interests</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full border-2 transition-all ${
                      isSelected
                        ? "bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] border-transparent text-white"
                        : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-600"
                    }`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>

            <div className="text-center text-sm text-zinc-500">
              {selectedInterests.length} selected
            </div>
          </div>
        )}
      </div>

      {/* Bottom button */}
      <div className="px-6 py-6 bg-zinc-900 border-t border-zinc-800">
        <button
          onClick={handleContinue}
          className="w-full bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] text-white rounded-xl py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={step === 3 && selectedInterests.length < 5}
        >
          {step === 3 ? "Complete Setup" : "Continue"}
        </button>
      </div>
    </div>
  );
}
