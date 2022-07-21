const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { urlencoded } = require("body-parser");

const app = express();

app.use(bodyParser.json(), urlencoded({ extended: false }));

app.post("/sendEmail", (req, res) => {
  console.log("aa");
  console.log(req.body);
  const body = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "matanTestWeb@gmail.com",
      pass: "pufporjwghustzls",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailDetails = {
    from: "matanTestWeb@gmail.com",
    to: "matanfadida7@gmail.com",
    subject: "",
    message: "",
  };

  transporter.sendMail(mailDetails, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
  res.status(201);
});

app.listen(4000);
