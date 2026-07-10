import { GoogleGenAI } from "@google/genai";

export async function analyzeResume(text) {

  console.log("Gemini Key:", process.env.GEMINI_API_KEY);

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const prompt = `
You are an expert ATS Resume Reviewer.

Return ONLY valid JSON.

{
  "atsScore": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "improvements": [],
  "recommendedRoles": [],
  "interviewQuestions": []
}

Resume:

${text}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: prompt,
  });

  const raw = response.text;

  const cleaned = raw
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();

  return JSON.parse(cleaned);
}