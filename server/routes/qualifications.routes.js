import express from "express";
import {
  getAllEducations,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
  deleteAllEducations,
} from "../controllers/education.controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAllEducations);
router.get("/:id", getEducationById);
// write operations restricted to admin
router.post("/", authenticate, authorizeRoles("admin"), createEducation);
router.put("/:id", authenticate, authorizeRoles("admin"), updateEducation);
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteEducation);
router.delete("/", authenticate, authorizeRoles("admin"), deleteAllEducations);

export default router;
