import axios from "axios";

const API_URL = "/api/clients";

// Register client
const register = async (clientData) => {
  const response = await axios.post(API_URL, clientData);

  if (response.data) {
    localStorage.setItem("client", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
