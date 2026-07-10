import Resume from "../../models/Resume.js";

export async function saveResume(data) {
  return await Resume.create(data);
}