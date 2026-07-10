import { extractResumeText } from "../../services/resume/extractResumeText.js";
import { analyzeResume } from "../../services/resume/analyzeResumeService.js";
import { saveResume } from "../../services/resume/saveResumeService.js";

export async function uploadResume(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No resume uploaded",
      });
    }

    const resumeText = await extractResumeText(req.file);
    const analysis = await analyzeResume(resumeText);
    const savedResume = await saveResume({
  user: req.user.id,
  fileName: req.file.originalname,
  resumeText,
  analysis,
});

    return res.json({
      success: true,
      message: "Resume analyzed successfully",
      resume: savedResume,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
}