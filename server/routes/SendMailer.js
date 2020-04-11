const nodemailer = require("nodemailer");

//Использую предложенный тестировщик почты в данный момент. Если будем менять,
//нужно почитать информацию здесь: https://nodemailer.com/usage/using-gmail/
//и здесь: https://nodemailer.com/smtp/
//let testAccount = await nodemailer.createTestAccount();
router.get('/sendmailer', function(req, res, next) {
//module.exports =  async function send(mail){


  let testEmailAccount = await nodemailer.createTestAccount();
    
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testEmailAccount.user,
        pass: testEmailAccount.pass
      }
    });
    
    let result = await transporter.sendMail({
      from: '"Node js" <nodejs@example.com>',
      to: res,
      subject: "I hope this is work!",
      text: "This message was sent from Node js server.",
      html: "This <i>message</i> was sent from <strong>Node js</strong> server."
    });
    
    console.log(result);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    })
    
    //main().catch(console.error);
//send();