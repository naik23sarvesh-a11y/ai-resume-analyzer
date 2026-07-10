import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileText, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

import { uploadResume } from "@/services/resumeService";

export default function UploadCard({ onAnalysis,
    setLoadingAnalysis, }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    if (!acceptedFiles.length) return;

    const pdf = acceptedFiles[0];

    if (pdf.type !== "application/pdf") {
      toast.error("Only PDF resumes are allowed.");
      return;
    }

    setFile(pdf);
  };

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        "application/pdf": [".pdf"],
      },
    });

  async function handleUpload() {
    if (!file) {
      toast.error("Please choose a PDF.");
      return;
    }

    try {
      setLoading(true);
      setLoadingAnalysis(true);
      const response = await uploadResume(file);

onAnalysis(response.resume.analysis);

toast.success("Resume analyzed successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Upload failed"
      );
    } finally {
      setLoading(false);
      setLoadingAnalysis(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <h2 className="text-3xl font-bold mb-6">
        Upload Resume
      </h2>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-3xl p-14 transition cursor-pointer text-center

        ${
          isDragActive
            ? "border-blue-600 bg-blue-50"
            : "border-gray-300 hover:border-blue-600"
        }`}
      >
        <input {...getInputProps()} />

        <UploadCloud
          className="mx-auto text-blue-600"
          size={70}
        />

        <h3 className="text-xl font-semibold mt-6">
          Drag & Drop your Resume
        </h3>

        <p className="text-gray-500 mt-2">
          or click to browse
        </p>

        <p className="text-sm mt-5 text-gray-400">
          PDF only • Max 5 MB
        </p>
      </div>

      {file && (
        <div className="mt-8 border rounded-2xl p-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <FileText
              className="text-red-500"
              size={40}
            />

            <div>

              <h4 className="font-semibold">
                {file.name}
              </h4>

              <p className="text-gray-500 text-sm">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>

            </div>

          </div>

          <button
            onClick={() => setFile(null)}
            className="text-red-500"
          >
            Remove
          </button>

        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition"
      >
        {loading ? (
          <span className="flex justify-center items-center gap-3">
            <Loader2
              className="animate-spin"
              size={22}
            />

            AI is analyzing...
          </span>
        ) : (
          "Analyze Resume"
        )}
      </button>

    </div>
  );
}