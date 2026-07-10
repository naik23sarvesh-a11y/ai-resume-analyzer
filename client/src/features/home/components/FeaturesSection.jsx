import {
    Brain,
    FileText,
    Target,
    Sparkles,
    ShieldCheck,
    BarChart3,
    ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Card from "@/shared/components/ui/Card";

const features = [
    {
        icon: Brain,
        title: "AI Resume Analysis",
        description:
            "Get intelligent AI-powered insights to improve your resume and increase interview chances.",
    },
    {
        icon: Target,
        title: "ATS Compatibility",
        description:
            "Measure how well your resume performs against Applicant Tracking Systems.",
    },
    {
        icon: FileText,
        title: "Keyword Optimization",
        description:
            "Identify missing keywords that recruiters and ATS systems expect.",
    },
    {
        icon: Sparkles,
        title: "Smart Suggestions",
        description:
            "Receive personalized recommendations to improve every section of your resume.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Resume Storage",
        description:
            "Your resumes remain protected with secure cloud storage and authenticated access.",
    },
    {
        icon: BarChart3,
        title: "Performance Dashboard",
        description:
            "Track ATS scores, resume improvements, strengths, and career insights in one place.",
    },
];

function FeaturesSection() {
    const navigate = useNavigate();

    return (
        <section
            id="features"
            className="py-28 bg-gradient-to-b from-white via-slate-50 to-white"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">

                    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                        FEATURES
                    </span>

                    <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
                        Everything You Need
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                        ResumeAI combines Artificial Intelligence,
                        ATS optimization and resume management into one
                        professional platform built for students,
                        fresh graduates and job seekers.
                    </p>

                </div>

                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (

                            <div
                                key={feature.title}
                                onClick={() => navigate("/register")}
                                className="
                                group
                                cursor-pointer
                                rounded-3xl
                                border
                                border-gray-200
                                bg-white
                                p-8
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-3
                                hover:border-blue-500
                                hover:shadow-2xl
                            "
                            >

                                <div className="flex items-center justify-between">

                                    <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg transition group-hover:scale-110">

                                        <Icon
                                            size={34}
                                            className="text-white"
                                        />

                                    </div>

                                    <ArrowRight
                                        size={22}
                                        className="
                                        text-gray-300
                                        transition-all
                                        duration-300
                                        group-hover:translate-x-2
                                        group-hover:text-blue-600
                                    "
                                    />

                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-gray-900">

                                    {feature.title}

                                </h3>

                                <p className="mt-5 leading-7 text-gray-600">

                                    {feature.description}

                                </p>

                            </div>

                        );
                    })}

                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;