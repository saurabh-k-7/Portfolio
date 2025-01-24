import { Home, Briefcase, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-lg px-6 py-4 rounded-2xl border border-gray-400/50 shadow-xl z-50">
      <nav className="flex gap-8">
        {[
          { path: "/", icon: Home, label: "Home" },
          { path: "/projects", icon: Briefcase, label: "Projects" },
          { path: "/contact", icon: Mail, label: "Contact" },
        ].map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              isActive(path)
                ? "text-purple-400 scale-140"
                : "text-gray-300 hover:text-purple-100"
            }`}
          >
            <Icon size={20} />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
