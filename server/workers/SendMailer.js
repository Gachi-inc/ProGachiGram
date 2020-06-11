const nodemailer = require("nodemailer");

async function SendMail(req, res){
    const {email, confirmed_hash} = req.body;
    let transporter = nodemailer.createTransport({
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
      html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:3000/api/verify?hash=${confirmed_hash}">по этой ссылке</a>`
    }).then(function(){
      res.json({
        status: 'success',
        message: 'Вам отправлено письмо для подтверждения аккаунта!'
      });
    }, function(error){
      res.json({
        status: 'failed',
        message: error
      })
    });



    console.log("Message sent: %s", email);
}



//const user = new UserModel(req);







module.exports =  {
    SendMail
}
