import express from "express";
import upload from "./middlewares/multer.js";
import cloudinary from "./utils/cloudinary.js";
import { PrismaClient } from "@prisma/client";
import streamifier from "streamifier";

const prisma = new PrismaClient();
const router = express.Router();

export const post = router.post(
  "/create-post",
  upload.single("image"),
  async (req, res) => {
    try {
      const { title, content, author_id } = req.body;

      const author = await prisma.admin_Table.findUnique({
        where: { id: parseInt(author_id) },
      });

      if (!author) {
        return res.status(404).json({ message: "Author not found" });
      }

      const author_name = author.full_name;

      const uploadToCloudinary = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "uploads" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );

          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };

      let imageUrl = "";

      if (req.file) {
        const result = await uploadToCloudinary();
        imageUrl = result.secure_url;
      }

      const post = await prisma.post.create({
        data: {
          title,
          content,
          image: imageUrl,
          author_name,
          create_at: new Date(),
          author_id: parseInt(author_id),
        },
      });

      res.status(201).json({ message: "Post created", post });
    } catch (error) {
      console.error("Create Post Error:", error);
      if (!res.headersSent) {
        res
          .status(500)
          .json({ message: "Something went wrong", error: error.message });
      }
    }
  }
);

export default router;
