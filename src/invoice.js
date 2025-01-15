import express from "express";
import multer from "multer";
import sendInvoiceEmail from "./sendmail.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Endpoint to handle invoice sending
router.post("/send", upload.single("file"), async (req, res) => {
  const { email } = req.body;

  if (!email || !req.file) {
    return res.status(400).json({ message: "Email or file is missing." });
  }

  try {
    await sendInvoiceEmail(email, req.file.path);
    res.status(200).json({ message: "Invoice sent successfully!" });
  } catch (error) {
    console.error("Error sending invoice:", error);
    res.status(500).json({ message: "Failed to send invoice." });
  }
});

export default router;
