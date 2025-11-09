import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

const JWT_SECRET = process.env.JWT_SECRET || "change-me-secret";
// In-memory token blacklist (simple implementation)
const tokenBlacklist = new Set();

export async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    // return token and user info (omit password)
  const userObj = { id: user._id, name: user.name, email: user.email, role: user.role, created: user.created, updated: user.updated };
  res.json({ token, user: userObj });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function signOut(req, res) {
  try {
    const auth = req.headers.authorization || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : auth;
    if (!token) return res.status(400).json({ message: "Token required" });
    tokenBlacklist.add(token);
    res.json({ message: "Signed out" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export function isTokenBlacklisted(token) {
  return tokenBlacklist.has(token);
}
