import {
  LayoutDashboard,
  Upload,
  History,
  User,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { User } from "lucide-react";


const menu = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "History", icon: History, path: "/history" },
  { title: "Profile", icon: User, path: "/profile" },
  {
    name: "Profile",
    icon: <User size={20} />,
    path: "/profile",
}
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col">
      <div className="h-20 flex items-center px-8 border-b">
        <h1 className="text-2xl font-bold text-blue-600">ResumeAI</h1>
      </div>

      <nav className="flex-1 p-5 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-100 text-slate-700"
              }`
            }
          >
            <item.icon size={20} />
            {item.title}
          </NavLink>
        ))}
      </nav>

      <div className="p-5">
        <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-500 text-white py-3 hover:bg-red-600">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
    
  );
}
