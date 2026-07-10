import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-100">

      <header className="bg-white shadow">

        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-blue-600">
            AI Resume Analyzer
          </h1>

          <button className="rounded-full w-10 h-10 bg-blue-600 text-white font-bold">
            S
          </button>
<Link to="/history">
    History
</Link>
        </div>

      </header>

      <main className="max-w-7xl mx-auto p-8">

        <Outlet />

      </main>

    </div>
  );
}