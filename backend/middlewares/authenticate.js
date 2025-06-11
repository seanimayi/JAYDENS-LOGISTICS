import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const session = await prisma.session.findUnique({
      where: { token },
    });

    if (!session) return res.status(401).json({ message: "Invalid session" });

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalid or expired" });
  }
};
