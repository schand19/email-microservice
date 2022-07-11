const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());

app.post("/send-email", async function (req, res) {
  console.log(req.body);

  const { mailService, userName, password, fromMail, toMail, subject, text } =
    req.body;
    
  const transporter = nodemailer.createTransport({
    service: mailService,
    auth: {
      user: userName,
      pass: password,
    },
  });

  const mailOptions = {
    from: fromMail,
    to: toMail,
    subject: subject,
    text: text,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);
    res.send("email sent successfully");
  } catch (err1) {
    console.log("SENDING ERROR MESSAGE: " + err1.message);
    res.send(err1.message);
  }

});

app.listen(4000, () => console.log("Server started..."));
