import jwt from "jsonwebtoken";
import { isTokenBlacklisted } from "../controllers/auth.controller.js";
import User from "../models/user.model.js";

const JWT_SECRET = process.env.JWT_SECRET || "change-me-secret";

export async function authenticate(req, res, next) {
  try {
    const auth = req.headers.authorization || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : auth;
    if (!token) return res.status(401).json({ message: "No token provided" });
    if (isTokenBlacklisted(token)) return res.status(401).json({ message: "Token invalidated" });

    const payload = jwt.verify(token, JWT_SECRET);
    // attach user to request
    const user = await User.findById(payload.id).select("-password");
    if (!user) return res.status(401).json({ message: "Invalid token" });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: " + err.message });
  }
}
