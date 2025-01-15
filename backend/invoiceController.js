// src/controllers/sendInvoice.js
import { sendEmail } from "./sendmail.js";
import multer from "multer";

// Set up multer for handling file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const sendInvoiceController = async (req, res) => {
  const { email } = req.body;
  const invoicePdf = req.file;

  if (!email || !invoicePdf) {
    return res.status(400).json({ success: false, message: "Email and PDF are required." });
  }

  try {
    await sendEmail(email, invoicePdf);
    res.status(200).json({ success: true, message: "Invoice sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
