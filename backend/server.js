import express from "express";
import cors from "cors";
import loginRoute from "./login_route.js";
import protectedRoutes from "./ProtectedRoute/protected_route.js";
import { adminLength } from "./admins_length.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", loginRoute);
app.use("/api", protectedRoutes);
app.use("/api", adminLength)
// Adjust the path as necessary

app.get("/", (req, res) => {
  res.json("Hello then");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
