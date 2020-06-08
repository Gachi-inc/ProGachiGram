const nodemailer = require("nodemailer");
// Сюда из фронта при регистрации нужно отправлять данные для отправки сообщения на почту зарегистрировавшемуся человеку.
// Мы пока сделали рабочий вариант без привязки к фронту, он работает в тестовом режиме
// Так что, над доделать



async function SendMail(req, res){
  //console.log(req.body);
    const {email, confirmed_hash} = req.body;
    //let testEmailAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      //host: 'smtp.ethereal.email',
      //port: 587,
      service: 'Yandex',
      auth: {
        user: 'team2messenger@yandex.ru', //Данная почта считается спам почтой бота(Oh wait...)
        pass: 'CheckThisout'
      }
    });
    console.log(email);
    console.log(confirmed_hash);
    let result = await transporter.sendMail({
      from: '"ProGachiGram" <savin-grigosha@yandex.ru>',
      to: email,
      subject: "Подтверждение регистрации",
      //text: "Здравствуйте\nДля завершения регистрации на ProGachiGram пройдите по ссылке ниже в течение 24 часов.",
      html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:3000/api/verify?hash=${confirmed_hash}">по этой ссылке</a>`
    });
    console.log("Message sent: %s", email);
}



//const user = new UserModel(req);







module.exports =  {
    SendMail
}
