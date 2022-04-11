const asyncHandler = require("express-async-handler");

const Client = require("../models/clientModel");
const Incident = require("../models/incidentModel");

// @desc    Get Client Reports
// @route   GET /api/reports
// @access  Private
const getReports = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "getReports" });
});

// @desc    Create new Client Report
// @route   POST /api/reports
// @access  Private
const createReport = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "createReport" });
});

module.exports = {
  getReports,
  createReport,
};
