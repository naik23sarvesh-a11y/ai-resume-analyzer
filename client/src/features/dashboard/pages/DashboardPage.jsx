import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import UploadCard from "@/components/upload/UploadCard";

import ATSCard from "@/components/analysis/ATSCard";

import AnalysisList from "@/components/analysis/AnalysisList";

import StatsCards from "@/components/dashboard/StatsCards";

import { motion } from "framer-motion";

import EmptyState from "@/components/dashboard/EmptyState";

import ResumeInfoCard from "@/components/dashboard/ResumeInfoCard";

import JobMatcherCard from "@/components/dashboard/JobMatcherCard";

import AnalysisSkeleton from "@/components/analysis/AnalysisSkeleton";



export default function DashboardPage() {

    const [loadingMatch, setLoadingMatch] = useState(false);
    async function handleJobMatch(jobDescription){
        

    console.log(jobDescription);

}

    const [analysis, setAnalysis] = useState(null);
const [loadingAnalysis, setLoadingAnalysis] = useState(false);
    if (loadingAnalysis) {
        return (
            <DashboardLayout>
                <AnalysisSkeleton />
            </DashboardLayout>
        );
    }
    return (

        <DashboardLayout>

          <div className="grid lg:grid-cols-3 gap-6">

    <div className="lg:col-span-2">
<UploadCard
    onAnalysis={setAnalysis}
    setLoadingAnalysis={setLoadingAnalysis}
/>

    </div>

    <ATSCard
        analysis={analysis}
    />

</div>

<StatsCards analysis={analysis} />
<ResumeInfoCard analysis={analysis} />
{!analysis ? (
    <div className="mt-8">
        <EmptyState />
    </div>
) : (
<motion.div
    initial={{
        opacity: 0,
    }}
    animate={{
        opacity: 1,
    }}
>
<div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-10 shadow-lg">
                        <h2 className="text-3xl font-bold">

                            AI Summary

                        </h2>
                        

<p className="mt-5 leading-8 text-blue-100 text-lg">
                            {analysis.summary}

                        </p>

                    </div>
                                            <JobMatcherCard

    loading={loadingMatch}

    onAnalyze={handleJobMatch}

/>

                    <div className="grid lg:grid-cols-2 gap-6 mt-8">

                        <AnalysisList

                            title="Strengths"

                            items={analysis.strengths}

                            color="green"

                        />

                        <AnalysisList

                            title="Weaknesses"

                            items={analysis.weaknesses}

                            color="red"

                        />

                        <AnalysisList

                            title="Missing Skills"

                            items={analysis.missingSkills}

                            color="orange"

                        />

                        <AnalysisList

                            title="Recommended Roles"

                            items={analysis.recommendedRoles}

                            color="blue"

                        />

                    </div>

                    <div className="mt-8">

                        <AnalysisList

                            title="Improvements"

                            items={analysis.improvements}

                            color="purple"

                        />

                    </div>

                    <div className="mt-8">

                        <AnalysisList

                            title="Interview Questions"

                            items={analysis.interviewQuestions}

                            color="blue"

                        />

                    </div>

</motion.div>
            )}

        </DashboardLayout>

    );

}