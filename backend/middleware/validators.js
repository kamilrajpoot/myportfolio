const { body, validationResult } = require("express-validator");

const contactValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 100 })
    .withMessage("Name must be 100 characters or fewer"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("subject")
    .optional({ values: "null" })
    .trim()
    .isLength({ max: 150 })
    .withMessage("Subject must be 150 characters or fewer"),
  body("service")
    .optional({ values: "null" })
    .trim()
    .isLength({ max: 100 })
    .withMessage("Service must be 100 characters or fewer"),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ max: 5000 })
    .withMessage("Message must be 5000 characters or fewer"),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Please check the submitted form fields.",
      errors: errors.array().map((error) => ({ field: error.path, message: error.msg })),
    });
  }
  next();
};

module.exports = { contactValidation, handleValidationErrors };
