import { useState } from "react";
import { uploadResume } from "@/services/resumeService";

export default function useResume() {

  const [loading, setLoading] = useState(false);

  const [analysis, setAnalysis] = useState(null);

  const upload = async (file) => {

    setLoading(true);

    try {

      const result = await uploadResume(file);

      setAnalysis(result.resume.analysis);

      return result;

    } finally {

      setLoading(false);

    }

  };

  return {

    loading,

    analysis,

    upload,

  };

}