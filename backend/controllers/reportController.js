const asyncHandler = require("express-async-handler");

const Client = require("../models/clientModel");
const Report = require("../models/reportModel");

// @desc    Get Client Reports
// @route   GET /api/reports
// @access  Private
const getReports = asyncHandler(async (req, res) => {
  // Get client using ID in the JWT
  const client = await Client.findById(req.client.id);

  if (!client) {
    res.status(401);
    throw new Error("Client not found");
  }

  //   Get Reports
  const reports = await Report.find({ client: req.client.id });

  res.status(200).json(reports);
});

// @desc    Create new Client Report
// @route   POST /api/reports
// @access  Private
const createReport = asyncHandler(async (req, res) => {
  const { category, description } = req.body;

  if (!category || !description) {
    res.status(400);
    throw new Error("Please select a category and add a description.");
  }

  // Get client using ID in the JWT
  const client = await Client.findById(req.client.id);

  if (!client) {
    res.status(401);
    throw new Error("Client not found");
  }

  const report = await Report.create({
    category,
    description,
    client: req.client.id,
    status: "new",
  });

  res.status(201).json(report);
});

module.exports = {
  getReports,
  createReport,
};
