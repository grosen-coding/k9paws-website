const express = require("express");
const router = express.Router();
const {
  getReports,
  getReport,
  createReport,
  deleteReport,
  updateReport,
} = require("../controllers/reportController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getReports).post(protect, createReport);

router
  .route("/:id")
  .get(protect, getReport)
  .delete(protect, deleteReport)
  .put(protect, updateReport);

module.exports = router;
