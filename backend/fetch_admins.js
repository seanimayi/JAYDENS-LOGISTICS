import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json()); // This is needed to parse JSON in req.body

export const fetchedAdmins = app.get("/fetch_admins", async (req, res) => {
    const {email, password} = req.query
  try {
    const admins = await prisma.admin_Table.findMany({
      where: { email },
    });

    return res
      .status(201)
      .json({ message: "Succefully Fetched", data: admins });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
