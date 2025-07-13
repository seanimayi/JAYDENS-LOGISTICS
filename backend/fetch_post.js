import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

export const fetchPost = app.get("/fetch-post", async (req, res) => {
  try {
    const post = await prisma.post.findMany({
      orderBy: { updated_at: "desc" },
    });
    res.status(200).json({ message: "Post Fetched", data: post });
  } catch (error) {
    console.error(error);
    res.status(501).json({ message: "Something went wrong" });
  }
});
