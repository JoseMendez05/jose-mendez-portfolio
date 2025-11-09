import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
} from "../controllers/user.controller.js";
import { authenticate, authorizeRoles, authorizeSelfOrAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// Only admin can list all users
router.get("/", authenticate, authorizeRoles("admin"), getAllUsers);
// A user can view their own profile, admin can view any
router.get("/:id", authenticate, authorizeSelfOrAdmin("id"), getUserById);
// Anyone can signup (create). Updates allowed for owner or admin
router.post("/", createUser);
router.put("/:id", authenticate, authorizeSelfOrAdmin("id"), updateUser);
// Only admin can delete users
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteUser);
router.delete("/", authenticate, authorizeRoles("admin"), deleteAllUsers);

export default router;
