const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTE
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the new Incident Reports API" });
});

// Routes
app.use("/api/clients", require("./routes/clientRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
