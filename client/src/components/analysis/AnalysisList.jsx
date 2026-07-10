import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  Wrench,
  Briefcase,
  Sparkles,
  MessageCircleQuestion,
} from "lucide-react";

export default function AnalysisList({
  title,
  items,
  color,
}) {
  if (!items?.length) return null;

  const styles = {
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      badge: "bg-green-500",
      icon: CheckCircle2,
    },

    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      badge: "bg-red-500",
      icon: AlertTriangle,
    },

    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      badge: "bg-orange-500",
      icon: Wrench,
    },

    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      badge: "bg-blue-500",
      icon: Briefcase,
    },

    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      badge: "bg-purple-500",
      icon: Sparkles,
    },
  };

  const style = styles[color];

  const Icon =
    title === "Interview Questions"
      ? MessageCircleQuestion
      : style.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`rounded-3xl border p-6 shadow-sm ${style.bg} ${style.border}`}
    >
      <div className="flex items-center gap-3 mb-6">

        <div
          className={`${style.badge} text-white p-3 rounded-xl`}
        >
          <Icon size={22} />
        </div>

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

      </div>

      <div className="space-y-4">

        {items.map((item, index) => (
          <motion.div
            whileHover={{
              x: 5,
            }}
            key={index}
            className="bg-white rounded-xl px-5 py-4 shadow-sm border hover:border-blue-500 transition-all"
          >
            <div className="flex gap-4">

    <div className={`${style.badge} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold`}>
        {index + 1}
    </div>

    <div className="leading-7">
        {item}
    </div>

</div>
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}