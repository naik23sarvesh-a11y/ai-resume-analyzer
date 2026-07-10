import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export default function ATSCard({ analysis }) {
  const score = analysis?.atsScore || 0;

  const getStatus = () => {
    if (score >= 85)
      return {
        text: "Excellent",
        color: "#16a34a",
      };

    if (score >= 70)
      return {
        text: "Good",
        color: "#2563eb",
      };

    if (score >= 50)
      return {
        text: "Average",
        color: "#f59e0b",
      };

    return {
      text: "Needs Improvement",
      color: "#dc2626",
    };
  };

  const status = getStatus();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      className="bg-white rounded-3xl shadow-sm p-8"
    >
      <h2 className="text-2xl font-bold text-center mb-8">
        ATS Score
      </h2>

      <div className="w-52 mx-auto">

        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            pathColor: status.color,
            textColor: "#111827",
            trailColor: "#e5e7eb",
            strokeLinecap: "round",
          })}
        />

      </div>

      <div className="text-center mt-8">

        <h3
          className="text-2xl font-bold"
          style={{
            color: status.color,
          }}
        >
          {status.text}
        </h3>

        <p className="text-gray-500 mt-2">
          AI Resume Evaluation
        </p>

      </div>

      <div className="mt-8">

        <div className="flex justify-between text-sm mb-2">

          <span>Resume Quality</span>

          <span>{score}%</span>

        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${score}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full"
            style={{
              background: status.color,
            }}
          />

        </div>

      </div>
    </motion.div>
  );
}