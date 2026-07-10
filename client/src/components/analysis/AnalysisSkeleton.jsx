export default function AnalysisSkeleton() {
  return (
    <div className="animate-pulse space-y-6">

      {/* ATS Score */}
      <div className="bg-white rounded-3xl p-8 shadow">

        <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>

        <div className="h-6 w-full bg-gray-200 rounded"></div>

      </div>

      {/* Summary */}
      <div className="bg-white rounded-3xl p-8 shadow">

        <div className="h-8 w-52 bg-gray-200 rounded mb-6"></div>

        <div className="space-y-3">

          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>

        </div>

      </div>

      {/* Analysis Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {[1, 2, 3, 4].map((item) => (

          <div
            key={item}
            className="bg-white rounded-3xl p-6 shadow"
          >

            <div className="h-6 w-40 bg-gray-200 rounded mb-5"></div>

            <div className="space-y-3">

              <div className="h-4 bg-gray-200 rounded"></div>

              <div className="h-4 bg-gray-200 rounded"></div>

              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}