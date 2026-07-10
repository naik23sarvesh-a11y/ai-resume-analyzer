import { FileSearch } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-16 text-center">

      <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
        <FileSearch className="text-blue-600" size={42} />
      </div>

      <h2 className="text-3xl font-bold mt-8">
        No Resume Analyzed Yet
      </h2>

      <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-8">
        Upload your resume to receive an ATS score,
        strengths, weaknesses, missing skills,
        recommended roles, interview questions,
        and personalized improvement suggestions
        powered by Gemini AI.
      </p>
    </div>
  );
}