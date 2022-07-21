const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { urlencoded } = require("body-parser");

const app = express();

app.use(bodyParser.json(), urlencoded({ extended: false }));

app.post("/sendEmail", (req, res) => {
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
    subject: body.subject,
    text: "The email is:" + body.email + "\n" + body.message,
  };

  transporter.sendMail(mailDetails, (err, success) => {
    if (err) {
      res.status(201).send("error");
    } else {
      res.status(201).send("Successfully");
    }
  });
  
});

app.listen(4000);
