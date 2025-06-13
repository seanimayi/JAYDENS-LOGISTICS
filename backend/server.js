import express from "express";
import cors from "cors";
import loginRoute from "./login_route.js";
import protectedRoutes from "./ProtectedRoute/protected_route.js";
import { adminLength } from "./admins_length.js";
import { fetchedAdmins } from "./fetch_admins.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", loginRoute);
app.use("/api", protectedRoutes);
app.use("/api", adminLength)
app.use('/api', fetchedAdmins)
// Adjust the path as necessary

app.get("/", (req, res) => {
  res.json("Hello then");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
