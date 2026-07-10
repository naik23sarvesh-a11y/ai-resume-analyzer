import {
    Trophy,
    FileText,
    CheckCircle,
    XCircle,
    AlertTriangle,
    Sparkles,
    Briefcase,
    MessageCircle,
} from "lucide-react";

function Section({
    icon,
    title,
    items,
    color,
}) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border p-6">

            <div className="flex items-center gap-3 mb-5">

                <div className={`${color} text-white p-2 rounded-xl`}>
                    {icon}
                </div>

                <h2 className="text-xl font-bold">
                    {title}
                </h2>

            </div>

            <ul className="space-y-3">

                {items?.map((item, index) => (

                    <li
                        key={index}
                        className="text-gray-600 leading-7"
                    >
                        • {item}
                    </li>

                ))}

            </ul>

        </div>
    );
}

export default function ResumeDetailsModal({
    open,
    onClose,
    resume,
}) {

    if (!open || !resume) return null;

    const analysis = resume.analysis;

    return (

        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-6">

            <div className="bg-slate-50 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl">

                <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">

                    <div>

                        <h1 className="text-3xl font-bold">

                            Resume Analysis

                        </h1>

                        <p className="text-gray-500 mt-1">

                            {resume.fileName}

                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="text-4xl"
                    >
                        ×
                    </button>

                </div>

                <div className="p-8">

                    <div className="flex flex-col items-center">

                        <div className="w-44 h-44 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-xl">

                            <div>

                                <div className="text-6xl font-bold text-center">

                                    {analysis.atsScore}

                                </div>

                                <div className="text-center">

                                    ATS

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 mt-8">

                        <div className="flex items-center gap-3 mb-4">

                            <FileText />

                            <h2 className="text-2xl font-bold">

                                AI Summary

                            </h2>

                        </div>

                        <p className="text-gray-600 leading-8">

                            {analysis.summary}

                        </p>

                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 mt-8">

                        <Section
                            icon={<CheckCircle />}
                            title="Strengths"
                            items={analysis.strengths}
                            color="bg-green-500"
                        />

                        <Section
                            icon={<XCircle />}
                            title="Weaknesses"
                            items={analysis.weaknesses}
                            color="bg-red-500"
                        />

                        <Section
                            icon={<AlertTriangle />}
                            title="Missing Skills"
                            items={analysis.missingSkills}
                            color="bg-orange-500"
                        />

                        <Section
                            icon={<Sparkles />}
                            title="Improvements"
                            items={analysis.improvements}
                            color="bg-purple-500"
                        />

                        <Section
                            icon={<Briefcase />}
                            title="Recommended Roles"
                            items={analysis.recommendedRoles}
                            color="bg-blue-500"
                        />

                        <Section
                            icon={<MessageCircle />}
                            title="Interview Questions"
                            items={analysis.interviewQuestions}
                            color="bg-indigo-500"
                        />

                    </div>

                </div>

            </div>

        </div>

    );
}