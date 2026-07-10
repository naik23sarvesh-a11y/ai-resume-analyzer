import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
},

    fileName: {
      type: String,
      required: true,
    },

    resumeText: {
      type: String,
      required: true,
    },

    analysis: {
      atsScore: Number,

      summary: String,

      strengths: [String],

      weaknesses: [String],

      missingSkills: [String],

      improvements: [String],

      recommendedRoles: [String],

      interviewQuestions: [String],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Resume", resumeSchema);