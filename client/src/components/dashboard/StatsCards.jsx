import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  FileText,
  TrendingUp,
} from "lucide-react";

export default function StatsCards({ analysis }) {
  if (!analysis) return null;

  const cards = [
    {
      title: "ATS Score",
      value: `${analysis.atsScore}%`,
      icon: Award,
      color: "bg-blue-500",
    },
    {
      title: "Skills Missing",
      value: analysis.missingSkills.length,
      icon: TrendingUp,
      color: "bg-orange-500",
    },
    {
      title: "Recommended Roles",
      value: analysis.recommendedRoles.length,
      icon: Briefcase,
      color: "bg-green-500",
    },
    {
      title: "Interview Questions",
      value: analysis.interviewQuestions.length,
      icon: FileText,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300"          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {card.value}
                </h2>
              </div>

             <motion.div
  whileHover={{
    rotate: 8,
    scale: 1.1,
  }}
  className={`${card.color} text-white p-4 rounded-2xl`}
></motion.div>
                <Icon size={30} />
              </div>
            </div>
        
        );
      })}
    </div>
  );
}