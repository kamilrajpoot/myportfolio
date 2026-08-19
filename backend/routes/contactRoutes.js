const express = require("express");
const router = express.Router();
const {
  createContact,
  getContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");
const { contactValidation, handleValidationErrors } = require("../middleware/validators");

router.post("/", contactValidation, handleValidationErrors, createContact);
router.get("/", getContacts);
router.route("/:id").get(getContactById).patch(updateContactStatus).delete(deleteContact);

module.exports = router;
