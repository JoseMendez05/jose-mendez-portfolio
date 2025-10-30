import Education from "../models/education.model.js";

export async function getAllEducations(req, res) {
  try {
    const items = await Education.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getEducationById(req, res) {
  try {
    const item = await Education.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Qualification not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function createEducation(req, res) {
  try {
    const education = new Education(req.body);
    const saved = await education.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function updateEducation(req, res) {
  try {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Qualification not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function deleteEducation(req, res) {
  try {
    const deleted = await Education.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Qualification not found" });
    res.json({ message: "Qualification deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function deleteAllEducations(req, res) {
  try {
    await Education.deleteMany({});
    res.json({ message: "All qualifications removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
