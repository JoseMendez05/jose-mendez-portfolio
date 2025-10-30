import express from "express";
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts,
} from "../controllers/contact.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:id", getContactById);
router.post("/", authenticate, createContact);
router.put("/:id", authenticate, updateContact);
router.delete("/:id", authenticate, deleteContact);
router.delete("/", authenticate, deleteAllContacts);

export default router;
