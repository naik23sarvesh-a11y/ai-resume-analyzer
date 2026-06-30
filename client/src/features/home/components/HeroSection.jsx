import Button from "@/shared/components/ui/Button";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        🚀 AI Powered Resume Analysis
      </span>

      <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
        Build a Resume that Gets
        <span className="text-blue-600"> Interview Calls</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Upload your resume and receive AI-powered feedback, ATS score,
        keyword analysis, and personalized suggestions within seconds.
      </p>

     <div className="mt-10 flex flex-wrap justify-center gap-4">
  <Button>
    Analyze Resume
    <ArrowRight size={18} className="ml-2" />
  </Button>

  <Button variant="secondary">
    Learn More
  </Button>
</div>
    </section>
  );
}

export default HeroSection;