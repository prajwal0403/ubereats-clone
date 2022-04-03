const nodemailer=require('nodemailer');

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cac7e3055b0e23",
    pass: "08b3e61a086dca"
  }
})

module.exports=transporter;