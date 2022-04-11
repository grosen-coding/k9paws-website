import axios from "axios";

const API_URL = "/api/reports/";

// Create new report
const createReport = async (reportData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, reportData, config);

  return response.data;
};

const reportService = {
  createReport,
};

export default reportService;
