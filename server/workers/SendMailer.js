// const nodemailer = require("nodemailer");

// async function SendMail(req, res, next){


//     const {name, email, password, password2 } = req.body;
//     let testEmailAccount = await nodemailer.createTestAccount();
//     let transporter = nodemailer.createTransport({
//       host: 'smtp.ethereal.email',
//       port: 587,
//       secure: false,
//       auth: {
//         user: testEmailAccount.user,
//         pass: testEmailAccount.pass
//       }
//     });
    
//     let result = await transporter.sendMail({
//       from: '"Node js" <nodejs@example.com>',
//       to: email,
//       subject: "I hope this is work!",
//       text: "This message was sent from Node js server.",
//       html: "This <i>message</i> was sent from <strong>Node js</strong> server."
//     });
    
//     console.log("Message sent: %s", result.messageId);
//       // Preview only available when sending through an Ethereal account
//       console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
//       // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    



// }


// module.exports =  {
//     SendMail
// }
