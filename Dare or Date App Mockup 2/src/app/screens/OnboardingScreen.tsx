import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Flame, Shield, ChevronRight } from "lucide-react";

const onboardingSteps = [
  {
    icon: Heart,
    title: "Discover Real Connections",
    description: "Swipe through authentic profiles and find people who share your interests and vibe.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Flame,
    title: "Make It Exciting with Dares",
    description: "Accept fun challenges to break the ice and show your personality in creative ways.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Safe & Verified",
    description: "Every dare is moderated. Report, block, and control your experience with powerful privacy tools.",
    color: "from-blue-500 to-cyan-500",
  },
];

export function OnboardingScreen() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/auth");
    }
  };

  const handleSkip = () => {
    navigate("/auth");
  };

  const step = onboardingSteps[currentStep];
  const Icon = step.icon;

  return (
    <div className="h-screen bg-black flex flex-col max-w-md mx-auto px-6">
      {/* Skip button */}
      <div className="flex justify-end pt-6 pb-4">
        <button
          onClick={handleSkip}
          className="text-zinc-400 hover:text-white transition-colors px-4 py-2"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            {/* Icon with gradient background */}
            <div className="relative mb-8">
              <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl`}>
                <Icon className="w-16 h-16 text-white" strokeWidth={2} />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-3xl opacity-20 -z-10`} />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-white mb-4 max-w-sm">
              {step.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-zinc-400 max-w-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-8">
        {onboardingSteps.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentStep
                ? "w-8 bg-[#FF4B6E]"
                : "w-2 bg-zinc-700"
            }`}
          />
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="mb-8 w-full bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] text-white rounded-2xl py-4 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
      >
        <span className="text-lg font-semibold">
          {currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
        </span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
