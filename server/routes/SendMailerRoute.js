var express = require('express');
const {SendMail}= require('../workers/sendMailer.js');
var router = express.Router();
router.use(express.json());
router.use(express.urlencoded());
//Использую предложенный тестировщик почты в данный момент. Если будем менять,
//нужно почитать информацию здесь: https://nodemailer.com/usage/using-gmail/
//и здесь: https://nodemailer.com/smtp/
//let testAccount = await nodemailer.createTestAccount();

router.post('/', SendMail);

//module.exports =  async function send(mail){
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
    //main().catch(console.error);
//send();

module.exports = router;