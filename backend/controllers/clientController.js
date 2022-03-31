// @desc    Register a new Client
// @route   /api/clients
// @access  Public

const registerClient = (req, res) => {
  const { name, email, password } = req.body;

  //   Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  res.send("Register Route");
};

// @desc    Login a Client
// @route   /api/clients/login
// @access  Public
const loginClient = (req, res) => {
  res.send("Login Route");
};

module.exports = {
  registerClient,
  loginClient,
};
