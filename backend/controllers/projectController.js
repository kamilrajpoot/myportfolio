const asyncHandler = require("express-async-handler");
const Project = require("../models/Project");

const getProjects = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.category) filter.category = req.query.category;
  if (req.query.featured !== undefined) filter.featured = req.query.featured === "true";
  if (req.query.service) filter.serviceSlugs = req.query.service;

  const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });
  res.status(200).json({ success: true, count: projects.length, data: projects });
});

const getProjectBySlug = asyncHandler(async (req, res) => {
  const project = await Project.findOne({ slug: req.params.slug });
  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }
  res.status(200).json({ success: true, data: project });
});

const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }
  res.status(200).json({ success: true, data: project });
});

const createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json({ success: true, data: project });
});

const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }
  Object.assign(project, req.body);
  await project.save();
  res.status(200).json({ success: true, data: project });
});

const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }
  await project.deleteOne();
  res.status(200).json({ success: true, data: {} });
});

module.exports = {
  getProjects,
  getProjectBySlug,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
