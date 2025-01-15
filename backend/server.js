// src/server.js
import express from "express";
import cors from "cors";
import { sendInvoiceController } from "./invoiceController.js";
import dotenv from 'dotenv';
import multer from "multer";

// Set up multer for handling file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const app = express();
dotenv.config();

app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials:true
  }
)); // Enable CORS with the specified options

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST endpoint for sending invoice
app.post("/send-invoice", upload.single("pdf"), sendInvoiceController);

const port = process.env.PORT ||4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
