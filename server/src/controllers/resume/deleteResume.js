import Resume from "../../models/Resume.js";

export async function deleteResume(req, res) {
  try {

await Resume.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
});
    res.json({

      success: true,

      message: "Resume deleted successfully",

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }
}