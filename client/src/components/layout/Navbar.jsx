
import { Bell, Menu } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar({ toggleSidebar }) {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 md:left-72 right-0 z-30 h-20 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">

      <div className="h-full px-4 md:px-8 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition"
          >
            <Menu size={26} />
          </button>

          <div>

            <h2 className="text-xl md:text-3xl font-bold text-gray-900">

              Good to see you,
              <span className="text-blue-600">
                {" "}
                {user?.fullName || "User"}
              </span>

            </h2>

            <p className="hidden sm:block text-sm text-blue-600 mt-1 font-medium">

              AI Powered Resume Analysis Dashboard

            </p>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          <button className="relative rounded-xl p-2 hover:bg-gray-100 transition">

            <Bell size={22} />

            <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

          </button>

          {/* Desktop Avatar */}
          <div className="hidden md:flex items-center gap-3 border-l pl-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">

              {user?.fullName?.charAt(0)?.toUpperCase() || "U"}

            </div>

            <div>

              <p className="font-semibold leading-none">

                {user?.fullName || "User"}

              </p>

              <p className="text-xs text-gray-500">

                {user?.email}

              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

