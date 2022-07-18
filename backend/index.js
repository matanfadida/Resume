const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.get("/", (req, res) => {
//   const body = req.body;
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "matanTestWeb@gmail.com",
//       pass: "pufporjwghustzls",
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   const mailDetails = {
//     from: "matanTestWeb@gmail.com",
//     to: "matanfadida7@gmail.com",
//     subject: "",
//     message: "",
//   };

//   transporter.sendMail(mailDetails, (err, success) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Email sent successfully");
//     }
//   });
});

app.post('/sendEmail', (req, res) => {
    console.log(req);
});

app.listen(4000);
