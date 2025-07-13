import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

export const fetchPostCount = app.get("/fetch-post-count", async (req, res) => {
  try {
    const posts = await prisma.post.count();
    res.status(200).json({ length: posts });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});
