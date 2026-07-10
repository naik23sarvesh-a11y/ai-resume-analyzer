import { Trash2, Eye, Calendar } from "lucide-react";

export default function HistoryCard({
    resume,
    onDelete,
    onView,
}) {
    return (
        <div className="bg-white rounded-3xl shadow-sm p-6 hover:shadow-lg transition">

            <div className="flex justify-between">

                <div>

                    <h2 className="text-xl font-bold">
                        {resume.fileName}
                    </h2>

                    <div className="flex items-center gap-2 mt-3 text-gray-500">

                        <Calendar size={16} />

                        {new Date(
                            resume.createdAt
                        ).toLocaleDateString()}

                    </div>

                </div>

                <div className="text-right">

                    <p className="text-4xl font-bold text-blue-600">

                        {resume.analysis.atsScore}

                    </p>

                    <p className="text-sm text-gray-500">

                        ATS Score

                    </p>

                </div>

            </div>

            <div className="flex gap-3 mt-8">

                <button
                    onClick={() => onView(resume)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 flex justify-center gap-2"
                >
                    <Eye size={18} />
                    View
                </button>

                <button
                    onClick={() => onDelete(resume._id)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-xl px-5"
                >
                    <Trash2 size={18} />
                </button>

            </div>

        </div>
    );
}