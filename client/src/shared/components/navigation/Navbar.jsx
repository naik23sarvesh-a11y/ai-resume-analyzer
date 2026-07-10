import { Link } from "react-router-dom";
import { Menu, X, BrainCircuit } from "lucide-react";
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    function closeMenu() {
        setOpen(false);
    }

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl shadow-sm">

                <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                    {/* Logo */}

                    <Link
                        to="/"
                        className="flex items-center gap-2"
                    >
                        <BrainCircuit
                            size={30}
                            className="text-blue-600"
                        />

                        <span className="text-2xl font-extrabold text-blue-600">
                            ResumeAI
                        </span>
                    </Link>

                    {/* Desktop Navigation */}

                    <div className="hidden md:flex items-center gap-8">

                        <a
                            href="#features"
                            className="font-medium text-gray-600 hover:text-blue-600 transition"
                        >
                            Features
                        </a>

                        <a
                            href="#how-it-works"
                            className="font-medium text-gray-600 hover:text-blue-600 transition"
                        >
                            How It Works
                        </a>

                        <Link
                            to="/login"
                            className="rounded-xl border border-gray-300 px-5 py-2 font-semibold hover:bg-gray-100 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Get Started
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden rounded-lg p-2 hover:bg-gray-100 transition"
                    >
                        <Menu size={28} />
                    </button>

                </nav>

            </header>

            {/* Mobile Menu */}

            {open && (
                <>
                    {/* Overlay */}

                    <div
                        onClick={closeMenu}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Drawer */}

                    <div
                        className="
                        fixed
                        top-0
                        right-0
                        z-50
                        h-screen
                        w-80
                        bg-white
                        shadow-2xl
                        border-l
                        border-gray-200
                        flex
                        flex-col
                        animate-in
                        slide-in-from-right
                        duration-300
                    "
                    >

                        {/* Header */}

                        <div className="flex items-center justify-between border-b p-6">

                            <div className="flex items-center gap-2">

                                <BrainCircuit
                                    className="text-blue-600"
                                    size={28}
                                />

                                <h2 className="text-2xl font-bold text-blue-600">
                                    ResumeAI
                                </h2>

                            </div>

                            <button
                                onClick={closeMenu}
                                className="rounded-lg p-2 hover:bg-gray-100 transition"
                            >
                                <X size={26} />
                            </button>

                        </div>

                        {/* Navigation */}

                        <div className="flex-1 p-6">

                            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-gray-400">
                                Navigation
                            </p>

                            <div className="space-y-2">

                                <a
                                    href="#features"
                                    onClick={closeMenu}
                                    className="block rounded-xl px-5 py-4 font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    Features
                                </a>

                                <a
                                    href="#how-it-works"
                                    onClick={closeMenu}
                                    className="block rounded-xl px-5 py-4 font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    How It Works
                                </a>

                            </div>

                            <div className="my-8 border-t"></div>

                            <div className="space-y-4">

                                <Link
                                    to="/login"
                                    onClick={closeMenu}
                                    className="block rounded-xl border border-gray-300 py-3 text-center font-semibold hover:bg-gray-100 transition"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    onClick={closeMenu}
                                    className="block rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-center font-semibold text-white shadow-lg hover:shadow-xl transition"
                                >
                                    Get Started
                                </Link>

                            </div>

                        </div>

                        {/* Bottom Section */}

                        <div className="border-t bg-slate-50 p-6">

                            <h3 className="font-bold text-gray-800">
                                AI Resume Analyzer
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Improve your resume with AI-powered ATS analysis,
                                personalized suggestions, and interview preparation.
                            </p>

                        </div>

                    </div>

                </>
            )}
        </>
    );
}

export default Navbar;