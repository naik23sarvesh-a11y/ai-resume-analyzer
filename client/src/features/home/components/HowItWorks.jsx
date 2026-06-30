function HowItWorks() {
  const steps = [
    "Upload your Resume",
    "AI analyzes your resume",
    "Receive ATS score and suggestions",
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          How It Works
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">
                Step {index + 1}
              </h3>

              <p className="mt-2 text-gray-600">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;