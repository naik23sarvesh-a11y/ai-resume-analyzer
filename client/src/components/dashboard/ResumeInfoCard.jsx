import {
  Calendar,
  FileText,
  Award,
  Briefcase,
} from "lucide-react";

export default function ResumeInfoCard({ analysis }) {
  if (!analysis) return null;

  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Resume Details
      </h2>

      <div className="space-y-5">

        <div className="flex items-center gap-4">
          <FileText className="text-blue-600" />
          <span>Latest Resume Analysis</span>
        </div>

        <div className="flex items-center gap-4">
          <Calendar className="text-green-600" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>

        <div className="flex items-center gap-4">
          <Award className="text-yellow-500" />
          <span>ATS Score : {analysis.atsScore}%</span>
        </div>

        <div className="flex items-center gap-4">
          <Briefcase className="text-purple-600" />
          <span>
            {analysis.recommendedRoles.length} Recommended Roles
          </span>
        </div>

      </div>

    </div>
  );
}