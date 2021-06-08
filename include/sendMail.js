const SMTPTransport = require("nodemailer/lib/smtp-transport");
const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport(new SMTPTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "elinore.kutch27@ethereal.email",
      pass: "AqmUfsFeQbrtVunur4",
    }, 
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    // auth: {
    //   user: "correo@gmail.com",
    //   pass: clave,
    // }, 
    tls: {
      rejectUnauthorized: false
    }
    // logger: false,
    // debug: false
}));

module.exports = transporter