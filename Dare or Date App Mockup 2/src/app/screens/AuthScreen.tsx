import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Flame, Mail, Phone, Chrome, Apple } from "lucide-react";

export function AuthScreen() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleContinue = () => {
    navigate("/setup");
  };

  return (
    <div className="h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col max-w-md mx-auto px-6">
      {/* Header */}
      <div className="pt-12 pb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#FF4B6E] to-[#FF6B88] rounded-2xl flex items-center justify-center">
            <Flame className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-bold text-white">Dare or Date</h1>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-zinc-400">
          {isLogin
            ? "Sign in to continue your dating adventure"
            : "Join the most exciting dating experience"}
        </p>
      </div>

      {/* Form */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {/* Email/Phone input */}
          <div>
            <label className="text-sm text-zinc-400 mb-2 block">
              Email or Phone
            </label>
            <input
              type="text"
              placeholder="Enter your email or phone"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4B6E] transition-colors"
            />
          </div>

          {/* Password input */}
          <div>
            <label className="text-sm text-zinc-400 mb-2 block">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4B6E] transition-colors"
            />
          </div>

          {isLogin && (
            <div className="flex justify-end">
              <button className="text-sm text-[#FF4B6E] hover:text-[#FF6B88]">
                Forgot password?
              </button>
            </div>
          )}

          {/* Continue button */}
          <button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-[#FF4B6E] to-[#FF6B88] text-white rounded-xl py-3 font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 py-4">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-sm text-zinc-500">or continue with</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          {/* Social login buttons */}
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 flex items-center justify-center hover:border-zinc-700 transition-colors">
              <Chrome className="w-5 h-5 text-white" />
            </button>
            <button className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 flex items-center justify-center hover:border-zinc-700 transition-colors">
              <Apple className="w-5 h-5 text-white" />
            </button>
            <button className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 flex items-center justify-center hover:border-zinc-700 transition-colors">
              <Phone className="w-5 h-5 text-white" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Toggle auth mode */}
      <div className="pb-8 text-center">
        <p className="text-zinc-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#FF4B6E] font-semibold hover:text-[#FF6B88]"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
