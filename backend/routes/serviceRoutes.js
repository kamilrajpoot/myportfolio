const express = require("express");
const router = express.Router();
const {
  getServices,
  getServiceBySlug,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

router.route("/").get(getServices).post(createService);
router.get("/slug/:slug", getServiceBySlug);
router.route("/:id").get(getServiceById).put(updateService).delete(deleteService);

module.exports = router;
