const nodemailer=require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "94742d8015f530", // generated ethereal user
      pass: "5319ed0e9ddbbb", // generated ethereal password
    },
})

module.exports=transporter;