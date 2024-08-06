"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
*/
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
app.use(require("./src/middlewares/logger"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
// E-MAIL:
// NodeMailer.com
// npm install nodemailer

// const nodemailer = require("nodemailer");

// Create Test Account:
// nodemailer.createTestAccount().then((data) => console.log(data));
/*
{
 user: 'mg77ib4qjfvsbgh6@ethereal.email',
  pass: 'ez3JDw46RfAWu7MS4M',
  smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  web: 'https://ethereal.email',
  mxEnabled: false
}
*/

// Connect to MailServer/SMTP:
// const transporter = nodemailer.createTransport({
//   // SMTP:
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "mg77ib4qjfvsbgh6@ethereal.email",
//     pass: "ez3JDw46RfAWu7MS4M",
//   },
// });
// // console.log(transporter);

// // SendMail:
// transporter.sendMail({

//     from: 'mg77ib4qjfvsbgh6@ethereal.email',
//     to: 'farukoncu78@gmail.com', // 'abc@def.com, def@ghi.com'
//     subject: 'Hello',
//     text: 'Hello There. How are you?',
//     html: '<p> <b> Hello There </b> <br> How are you? </p>',

// }, function (error, success) {

//     success ? console.log('SUCCESS:', success) : console.log('ERROR: ', error)
// })

// //* GoogleMail (gmail)
// //* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'farukoncu78@gmail.com',
//         pass: 'krkh fxow gujl cjhf'
//     }
// })

//* YandexMail (yandex)
// const transporter = nodemailer.createTransport({
//     service: 'yandex',
//     auth: {
//         user: 'test@yandex.com',
//         pass: '11' // your email-password
//     }
// })

// SendMail:
// transporter.sendMail({

//     from: 'qadir@clarusway.com',
//     to: 'qadir@clarusway.com', // 'abc@def.com, def@ghi.com'
//     subject: 'Hello',
//     text: 'Hello There. How are you?',
//     html: '<p> <b> Hello There </b> <br> How are you? </p>',

// }, function (error, success) {

//     success ? console.log('SUCCESS:', success) : console.log('ERROR: ', error)
// })

/* ------------------------------------------------------- */
// Routes:

// routes/index.js:
app.use("/", require("./src/routes/"));

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

// StaticFile:
// app.use('/uploads', express.static('./uploads'))
app.use("/images", express.static("./uploads"));

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
