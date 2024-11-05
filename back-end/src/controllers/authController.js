const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../prismaClient");
const generateToken = require("../utils/generateToken");

const loginUser = async (req, res) => {
  const { mobileNumber, password, role } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { mobileNumber },
    });

    if (!user || user.role !== role) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user.id, user.role);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginUser };
