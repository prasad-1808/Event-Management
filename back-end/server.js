// server.js
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Register a new user
app.post("/register", async (req, res) => {
  const { username, mobile, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        mobile,
        email,
        password,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "User could not be created" });
  }
});

// Login a user
app.post("/login", async (req, res) => {
  const { mobile, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { mobile },
    });

    if (user && user.password === password) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(400).json({ error: "Login failed" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
