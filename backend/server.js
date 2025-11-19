import express from "express";
import multer from "multer";
import { images } from "./memoryStore.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Multer: store in memory
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
  fileFilter(req, file, cb) {
    if (!file.mimetype.includes("jpeg") && !file.mimetype.includes("png")) {
      return cb(new Error("Only JPEG and PNG allowed"));
    }
    cb(null, true);
  }
});

// Upload endpoint
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const newImage = {
    id: Date.now(),
    filename: req.file.originalname,
    mimeType: req.file.mimetype,
    data: req.file.buffer.toString("base64")
  };

  images.push(newImage);
  res.json(newImage);
});

// Get all images
app.get("/images", (req, res) => {
  res.json(images);
});

// Delete endpoint
app.delete("/images/:id", (req, res) => {
  const { id } = req.params;
  const index = images.findIndex(img => img.id == id);

  if (index === -1) return res.status(404).json({ error: "Not found" });

  images.splice(index, 1);
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
