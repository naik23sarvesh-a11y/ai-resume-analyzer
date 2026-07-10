import express from "express";
import multer from "multer";

import authMiddleware from "../middlewares/authMiddleware.js";

import { uploadResume } from "../controllers/resume/uploadResume.js";
import { getResumeHistory } from "../controllers/resume/getResumeHistory.js";
import { getResumeById } from "../controllers/resume/getResumeById.js";
import { deleteResume } from "../controllers/resume/deleteResume.js";

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post(
  "/upload",
  authMiddleware,
  upload.single("resume"),
  uploadResume
);

router.get(
  "/history",
  authMiddleware,
  getResumeHistory
);

router.get(
  "/:id",
  authMiddleware,
  getResumeById
);

router.delete(
  "/:id",
  authMiddleware,
  deleteResume
);

export default router;