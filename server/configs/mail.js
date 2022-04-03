const nodemailer=require('nodemailer');

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2620e3fdecbbd6",
    pass: "85e41e08a9aab1"
  }
})

module.exports=transporter;