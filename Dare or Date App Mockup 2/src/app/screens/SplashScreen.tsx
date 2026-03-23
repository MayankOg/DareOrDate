import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Flame } from "lucide-react";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col items-center justify-center max-w-md mx-auto px-6">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* Logo */}
        <div className="relative mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="w-24 h-24 bg-gradient-to-br from-[#FF4B6E] to-[#FF6B88] rounded-3xl flex items-center justify-center shadow-2xl"
          >
            <Flame className="w-14 h-14 text-white" strokeWidth={2.5} />
          </motion.div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#FF4B6E] rounded-3xl blur-3xl opacity-30 -z-10" />
        </div>

        {/* App Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl font-bold text-white mb-3 tracking-tight"
        >
          Dare or Date
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-zinc-400 text-center"
        >
          Take the dare, make the connection
        </motion.p>
      </motion.div>

      {/* Loading indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12"
      >
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-[#FF4B6E] rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
