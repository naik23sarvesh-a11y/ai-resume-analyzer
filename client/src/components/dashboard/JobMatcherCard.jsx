import { useState } from "react";
import { Briefcase } from "lucide-react";

export default function JobMatcherCard({
    onAnalyze,
    loading,
}) {

    const [jobDescription, setJobDescription] = useState("");

    function handleSubmit() {

        if (!jobDescription.trim()) return;

        onAnalyze(jobDescription);

    }

    return (

        <div className="bg-white rounded-3xl shadow-sm p-8 mt-8">

            <div className="flex items-center gap-3 mb-6">

                <div className="bg-blue-100 p-3 rounded-xl">

                    <Briefcase className="text-blue-600"/>

                </div>

                <div>

                    <h2 className="text-2xl font-bold">

                        Job Description Matcher

                    </h2>

                    <p className="text-gray-500">

                        Compare your resume with any job description.

                    </p>

                </div>

            </div>

            <textarea

                rows={10}

                value={jobDescription}

                onChange={(e)=>
                    setJobDescription(e.target.value)
                }

                placeholder="Paste a job description from LinkedIn, Indeed, Naukri..."

                className="w-full border rounded-2xl p-5 resize-none focus:ring-2 focus:ring-blue-500 outline-none"

            />

            <button

                onClick={handleSubmit}

                disabled={loading}

                className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 font-bold hover:scale-[1.02] transition"

            >

                {

                    loading

                    ? "Analyzing..."

                    : "Analyze Match"

                }

            </button>

        </div>

    );

}