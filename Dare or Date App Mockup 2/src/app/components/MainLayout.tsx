import { useNavigate, Outlet } from "react-router";
import { Home, Flame, Heart, MessageCircle, User } from "lucide-react";

export function MainLayout() {
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Home", path: "/app" },
    { icon: Flame, label: "Dares", path: "/app/dares" },
    { icon: Heart, label: "Matches", path: "/app/matches" },
    { icon: MessageCircle, label: "Chat", path: "/app/chat/1" },
    { icon: User, label: "Profile", path: "/app/profile" },
  ];

  return (
    <div className="h-screen bg-black flex flex-col max-w-md mx-auto">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-zinc-900 border-t border-zinc-800 px-2 py-3 safe-area-bottom">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center gap-1 px-4 py-2 transition-colors"
              >
                <Icon
                  className={`w-6 h-6 ${
                    isActive ? "text-[#FF4B6E]" : "text-zinc-400"
                  }`}
                />
                <span
                  className={`text-xs ${
                    isActive ? "text-[#FF4B6E]" : "text-zinc-400"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
