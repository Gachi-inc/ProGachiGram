const nodemailer = require("nodemailer");

//Использую предложенный тестировщик почты в данный момент. Если будем менять,
//нужно почитать информацию здесь: https://nodemailer.com/usage/using-gmail/
//и здесь: https://nodemailer.com/smtp/
let testAccount = await nodemailer.createTestAccount();
module.exports =  async function send(mail){


    let transporter = nodemailer.createTransport({
        //host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass // generated ethereal password
        }
      });

      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // ???
        //to: " savin-grigosha@yandex.ru", // тест
        to: mail, //подготовленная строка для будущего отправления адреса из фронта
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    
    main().catch(console.error);
send();