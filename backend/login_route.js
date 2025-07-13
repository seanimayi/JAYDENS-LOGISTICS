// routes/login.route.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; // For password comparison
import jwt from "jsonwebtoken"; // If you plan to use JWT for authentication

const router = express.Router();
const prisma = new PrismaClient();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await prisma.admin_Table.findUnique({ where: { email } });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15h", // Adjust the expiration time as needed
    }
  );

  await prisma.session.create({
    data: {
      user_id: user.id, // Assuming you have a userId field in your session model
      session_token: token,
      expires: new Date(Date.now() + 15 * 60 * 60 * 1000), // 15 hours from now
      create_at: new Date(),
      // Assuming you have a userId field in your session model
    },
  });

  res.status(200).json({ message: "Login successful", data: user });
});

export default router;
