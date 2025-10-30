import express from "express";
import {
  getAllEducations,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
  deleteAllEducations,
} from "../controllers/education.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAllEducations);
router.get("/:id", getEducationById);
router.post("/", authenticate, createEducation);
router.put("/:id", authenticate, updateEducation);
router.delete("/:id", authenticate, deleteEducation);
router.delete("/", authenticate, deleteAllEducations);

export default router;
