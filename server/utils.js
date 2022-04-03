

const transporter=require('./configs/mail')


const send_mail=async(body)=>{
    console.log(body.otp)
     await transporter.sendMail({
         
        from:"navneetharsh3@mail.com",
        to:body.email,
        subject:"otp",
        text:body.otp.toString(),
        
      });
}

// const admin_mail=async({from,userpost})=>{
    
//     await send_mail({
//         from,
//         to:userpost.email,
//         subject:`Welcome to ABC system ${userpost.first_name} ${userpost.last_name}`,
//         text:`Hi ${userpost.first_name}, Please confirm your email address`,
//         html:"<h1>hi how are you</h1."
//     })
// }
// const admin=async({from,to,userpost})=>{
//     await send_mail({
//         from,
//         to,
//         subject: `${userpost.first_name} ${userpost.last_name} has registered with us`,
//         text: `Please welcome ${userpost.first_name} ${userpost.last_name}`,
//         html:"<h1>hi how are you</h1."
//     })
// }
module.exports ={send_mail,};