import { Brain, FileText, Target } from "lucide-react";
import Card from "@/shared/components/ui/Card";

const features = [
  {
    icon: <Brain size={36} className="text-blue-600" />,
    title: "AI Feedback",
    description: "Receive intelligent suggestions to improve your resume.",
  },
  {
    icon: <Target size={36} className="text-blue-600" />,
    title: "ATS Score",
    description: "Check how well your resume performs with ATS systems.",
  },
  {
    icon: <FileText size={36} className="text-blue-600" />,
    title: "Keyword Analysis",
    description: "Find missing keywords recruiters are looking for.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Features
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
         <Card>
              {feature.icon}

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;