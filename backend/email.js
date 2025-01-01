const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "calsibowling@gmail.com", // Your Gmail address
    pass: "your-email-password-or-app-password", // Your Gmail password or app-specific password
  },
});

app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});