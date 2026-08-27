const Certification = require("../models/Certification");

// @desc    Get all certifications
// @route   GET /api/certifications
// @access  Public
exports.getCertifications = async (req, res, next) => {
  try {
    const certifications = await Certification.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: certifications.length,
      data: certifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
