const asyncHandler = require("express-async-handler");
const Service = require("../models/Service");

const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find().sort({ order: 1, index: 1 });
  res.status(200).json({ success: true, count: services.length, data: services });
});

const getServiceBySlug = asyncHandler(async (req, res) => {
  const service = await Service.findOne({ slug: req.params.slug });
  if (!service) {
    res.status(404);
    throw new Error("Service not found");
  }
  res.status(200).json({ success: true, data: service });
});

const getServiceById = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error("Service not found");
  }
  res.status(200).json({ success: true, data: service });
});

const createService = asyncHandler(async (req, res) => {
  const service = await Service.create(req.body);
  res.status(201).json({ success: true, data: service });
});

const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error("Service not found");
  }
  Object.assign(service, req.body);
  await service.save();
  res.status(200).json({ success: true, data: service });
});

const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error("Service not found");
  }
  await service.deleteOne();
  res.status(200).json({ success: true, data: {} });
});

module.exports = {
  getServices,
  getServiceBySlug,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
