import * as functions from "firebase-functions";
import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

// Khi phát triển cục bộ, load từ .env.local
if (process.env.NODE_ENV !== "production") {
  dotenv.config({path: ".env.local"});
}

const app = express();
app.use(cors({origin: true}));
app.use(express.json());


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Lấy từ biến môi trường
    pass: process.env.EMAIL_PASSWORD, // Lấy từ biến môi trường
  },
});

// POST endpoint nhận dữ liệu từ Contact.tsx
app.post("/sendContactEmail", async (req: express.Request, res: express.Response) => {
  const {name, email, message} = req.body;

  if (!name || !email || !message) {
    return res.status(400).send({success: false, error: "Missing fields"});
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECIPIENT_EMAIL, // Lấy từ biến môi trường
    subject: `📩 Contact Form: Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).send({success: true});
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).send({success: false, error});
  }
});

// Export Firebase Function
export const sendContactEmail = functions.https.onRequest(app);
