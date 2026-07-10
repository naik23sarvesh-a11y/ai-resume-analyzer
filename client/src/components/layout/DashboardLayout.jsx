import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import AnalysisSkeleton from "@/components/analysis/AnalysisSkeleton";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* ==========================
          Desktop Sidebar
      ========================== */}
      <div className="hidden md:block">

        <Sidebar />

      </div>

      {/* ==========================
          Mobile Overlay
      ========================== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ==========================
          Mobile Sidebar
      ========================== */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-screen
          transform transition-transform duration-300 ease-in-out
          md:hidden

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        <Sidebar
          closeSidebar={() =>
            setSidebarOpen(false)
          }
        />

      </div>

      {/* ==========================
          Main Content
      ========================== */}
      <div className="flex flex-1 flex-col min-w-0">

        <Navbar
          toggleSidebar={() =>
            setSidebarOpen(true)
          }
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">

          {children}

        </main>

      </div>

    </div>
  );
}