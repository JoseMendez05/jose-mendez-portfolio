import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export async function getAllUsers(req, res) {
  try {
    const items = await User.find().select("-password -__v");
    res.json({ value: items, Count: items.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getUserById(req, res) {
  try {
    const item = await User.findById(req.params.id).select("-password -__v");
    if (!item) return res.status(404).json({ message: "User not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function createUser(req, res) {
  try {
    // Hash password before saving
    const data = { ...req.body };
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    const user = new User(data);
    const saved = await user.save();
    const userOut = await User.findById(saved._id).select("-password -__v");
    res.status(201).json(userOut);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function updateUser(req, res) {
  try {
    const data = { ...req.body };
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    const updated = await User.findByIdAndUpdate(req.params.id, data, { new: true }).select("-password -__v");
    if (!updated) return res.status(404).json({ message: "User not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function deleteAllUsers(req, res) {
  try {
    await User.deleteMany({});
    res.json({ message: "All users removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
