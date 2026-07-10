import { Link } from "react-router-dom";
import { SearchX } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-6">

            <div className="max-w-xl text-center">

                <div className="flex justify-center mb-8">

                    <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">

                        <SearchX
                            size={60}
                            className="text-blue-600"
                        />

                    </div>

                </div>

                <h1 className="text-8xl font-black text-blue-600">
                    404
                </h1>

                <h2 className="mt-4 text-4xl font-bold">
                    Page Not Found
                </h2>

                <p className="mt-4 text-gray-600 leading-8">

                    Sorry, the page you're looking for doesn't
                    exist or may have been moved.

                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-10">

                    <Link
                        to="/"
                        className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/dashboard"
                        className="px-8 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition"
                    >
                        Dashboard
                    </Link>

                </div>

            </div>

        </div>
    );
}