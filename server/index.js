const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const { yourName, companyName, mobileNo, email, interestedIn, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "madhinishaoff01@gmail.com", // Replace with your admin email
        pass: "apit rkak qfvj iehy", // Replace with your email password
      },
    });

    const mailOptions = {
      from: email,
      to: "madhinishaoff01@gmail.com",
      subject: `Contact Form Submission: ${yourName}`,
      text: `
        Name: ${yourName}
        Company: ${companyName}
        Mobile: ${mobileNo}
        Email: ${email}
        Interested In: ${interestedIn}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send message.");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

