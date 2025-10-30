import Project from "../models/project.model.js";

export async function getAllProjects(req, res) {
  try {
    const items = await Project.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getProjectById(req, res) {
  try {
    const item = await Project.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Project not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function createProject(req, res) {
  try {
    const project = new Project(req.body);
    const saved = await project.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function updateProject(req, res) {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Project not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function deleteProject(req, res) {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function deleteAllProjects(req, res) {
  try {
    await Project.deleteMany({});
    res.json({ message: "All projects removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
