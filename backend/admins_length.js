import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

export const adminLength = app.post("/admins_length", async (req, res) => {
  try {
    const count = await prisma.admin_Table.count();
    res.status(200).json({ length: count });
  } catch (error) {
    console.error("Error fetching admin count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
