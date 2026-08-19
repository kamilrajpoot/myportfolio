const asyncHandler = require("express-async-handler");
const Contact = require("../models/Contact");

const createContact = asyncHandler(async (req, res) => {
  const { name, email, subject, service, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error("Name, email, and message are required");
  }

  const contact = await Contact.create({ name, email, subject, service, message });

  res.status(201).json({
    success: true,
    data: contact,
    message: "Message received. I will get back to you soon.",
  });
});

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: contacts.length, data: contacts });
});

const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact message not found");
  }
  res.status(200).json({ success: true, data: contact });
});

const updateContactStatus = asyncHandler(async (req, res) => {
  const allowedStatuses = ["new", "read", "archived"];
  if (req.body.status && !allowedStatuses.includes(req.body.status)) {
    res.status(400);
    throw new Error("Invalid contact status");
  }

  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact message not found");
  }

  contact.status = req.body.status || contact.status;
  await contact.save();
  res.status(200).json({ success: true, data: contact });
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact message not found");
  }
  await contact.deleteOne();
  res.status(200).json({ success: true, data: {} });
});

module.exports = {
  createContact,
  getContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
};
