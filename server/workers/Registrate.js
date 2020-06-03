const bcrypt =  require('bcryptjs')
const {uri} = require('../config.js');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function register(req, res) {
   console.log('a');
   client.connect(err => {
      if(err) {
        console.log('Oops!', err)
        setTimeout(() => {
        }, 5000);
      } else {
         console.log('Connected');
         const {login, email, password, passwordCheck } = req.body;
         //Чек на пустые поля
         if (!login || !email || !password || !passwordCheck) {
            res.send({
               err: true,
               errMessage: "Заполните все поля"
            });
            return;
         }
         //Чек пароля
         if (password !== passwordCheck){
            res.send({
               err: true,
               errMessage: "Пароли не совпадают! Проверьте введенные данные."
            });
            return
         }
         //Чек на повторяющееся имя в БД
         const db = client.db('Users');
         db.collection('UserData').findOne({
            $or: [
                    { login : login },
                    { email: login }
                ]
        }, (err, result) => {
            if (result) {
                res.send({
                    error: true,
                    errorMessage: 'Пользователь с таким логином или данной почтой уже зарегистрирован.'
                });
                return;
            }
        });

         //Хешируем пароль
         const salt = bcrypt.genSaltSync(10);
         const passwordToSave = bcrypt.hashSync(password, salt);

         const user  = {login, email, passwordToSave}
         
         db.collection('UserData').insertOne(user, (err, result) => {
            
               if (err) {
                  return res.send(err);              
               }

               return res.send({...result.ops[0], passwordToSave: passwordToSave});
               setTimeout(() => {
                  return res.redirect('../../')
               }, 5000)
         });
      }
   });
}
  module.exports =  {
     register
 }
 