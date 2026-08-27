const express = require("express");
const router = express.Router();
const { getCertifications } = require("../controllers/certificationController");

router.route("/").get(getCertifications);

module.exports = router;
