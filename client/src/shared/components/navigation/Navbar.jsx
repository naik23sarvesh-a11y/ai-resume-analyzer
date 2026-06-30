import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          ResumeAI
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-gray-600 hover:text-black transition"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-black transition"
          >
            How it Works
          </a>

          <Link
            to="/login"
            className="rounded-xl border border-gray-300 px-5 py-2 font-medium transition hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;