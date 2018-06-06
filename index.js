require("env2")(".env");

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

transporter.sendMail({
  from: process.env.USER,
  to: "stevenryall812@gmail.com",
  subject: "Nuts",
  text: "Where is my car?",
  html: "<h1>Hello</h1>"
});
