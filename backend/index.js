const http = require("http");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require('cors');
const { urlencoded } = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, "/public")))

app.use(bodyParser.json(), urlencoded({ extended: false }));
app.use(cors({origin:true,credentials: true}));

const port = process.env.PORT || 4000;

app.use("/sendEmail", (req, res) => {
  const body = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "matanTestWeb@gmail.com",
      pass: "kjwa mgsv sngw nlue",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailDetails = {
    from: "matanTestWeb@gmail.com",
    to: "matanfadida7@gmail.com",
    subject: body.subject,
    text: "The email is:" + body.email + "\n" + "The Message: \n" + body.message,
  };

  transporter.sendMail(mailDetails, (err, success) => {
    if (err) {
      res.status(400).json({message:"error"});
    } else {
      res.status(201).json({message: "Successfully"});
    }
  });
  
});

app.listen(port, function() {
  console.log('Listening on port %d', port);
});