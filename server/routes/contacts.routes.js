import express from "express";
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts,
} from "../controllers/contact.controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:id", getContactById);
// write operations restricted to admin
router.post("/", authenticate, authorizeRoles("admin"), createContact);
router.put("/:id", authenticate, authorizeRoles("admin"), updateContact);
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteContact);
router.delete("/", authenticate, authorizeRoles("admin"), deleteAllContacts);

export default router;
