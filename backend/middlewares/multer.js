// backend/middleware/multer.js
import multer from "multer";
const storage = multer.memoryStorage(); // keeps the image in memory for Cloudinary upload
const upload = multer({ storage });
export default upload;
 