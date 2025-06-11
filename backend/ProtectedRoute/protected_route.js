// routes/protectedRoutes.js
import express from "express";
import {authenticate} from "../middlewares/authenticate.js";

const router = express.Router();

router.get("/dashboard", authenticate, (req, res) => {
  res.json({ message: "You are authorized!", user: req.user });
});

export default router;
