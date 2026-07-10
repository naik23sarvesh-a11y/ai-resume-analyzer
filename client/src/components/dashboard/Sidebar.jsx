import {
  LayoutDashboard,
  History,
  User,
  LogOut,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";


export default function Sidebar({ closeSidebar }) {
  const { user, logout } = useAuth();
const navigate = useNavigate();
  const menu = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      path: "/history",
    },
    {
      name: "Profile",
      icon: User,
      path: "/profile",
    },
  ];

 function handleLogout() {
  logout();

  closeSidebar?.();

  navigate("/");
}

  return (
    <aside className="flex h-screen w-72 flex-col bg-white border-r shadow-xl md:shadow-none">

      {/* Header */}
      <div className="flex items-center justify-between border-b p-6">

        <div>

          <h1 className="text-3xl font-extrabold text-blue-600">

            ResumeAI

          </h1>

          <p className="mt-1 text-sm text-gray-500">

            AI Resume Analyzer

          </p>

        </div>

        {/* Mobile Close Button */}
        <button
          onClick={closeSidebar}
          className="rounded-lg p-2 hover:bg-gray-100 transition md:hidden"
        >
          <X size={22} />
        </button>

      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-5">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `mb-3 flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              <Icon size={22} />

              <span className="font-medium">

                {item.name}

              </span>

            </NavLink>
          );
        })}

      </nav>

      {/* Footer */}
      <div className="border-t p-5">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">

            {user?.fullName?.charAt(0)?.toUpperCase() || "U"}

          </div>

          <div className="min-w-0">

            <h3 className="truncate font-semibold">

              {user?.fullName || "Guest"}

            </h3>

            <p className="truncate text-sm text-gray-500">

              {user?.email}

            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 font-medium text-white transition hover:bg-red-600"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}