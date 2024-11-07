const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded payloads

// Define routes
app.use("/api/users", userRoutes);

module.exports = app;
