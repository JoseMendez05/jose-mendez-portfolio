import express from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  deleteAllProjects,
} from "../controllers/project.controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
// write operations restricted to admin
router.post("/", authenticate, authorizeRoles("admin"), createProject);
router.put("/:id", authenticate, authorizeRoles("admin"), updateProject);
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteProject);
router.delete("/", authenticate, authorizeRoles("admin"), deleteAllProjects);

export default router;
