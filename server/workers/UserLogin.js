const bcrypt =  require('bcryptjs')
const {uri} = require('./config.js');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true });


function login (req, res) {
    console.log('a');
   client.connect(err => {
      if(err) {
        console.log('Oops!', err)
        setTimeout(() => {
        }, 5000);
      } else {
        console.log('Connected'); 
        const {login, password} = req.body;
        const db = client.db('Users');
        //Для входа либо по логину, либо по мылу
        db.collection('UserData').findOne({
            $or: [
                    { login : login },
                    { email: login }
                ]
        }, (err, result) => {
            //Проверка на корректный ввод
            if (!result) {
                res.send({
                    error: true,
                    errorMessage: 'Не правильно указан логин.'
                });
                return;
            }

            if (err) {
                res.send({
                    error: true,
                    errorMessage: err
                });
                return;
            }
            const {passwordToSave, login: dbLogin} = result;
            const passwordsAreEqual = new Promise((resolve, reject) => { 
                // Проверка паролей (запрошенного чистого и хэшированного из файла)
                //errMessage - для фронта
                bcrypt.compare(password, passwordToSave, (err, res) => {
                    if (err) {
                        reject(err);
                    } 
                        resolve(res);
                });
            });
            
            passwordsAreEqual.then(result => {
                let responseBody = {};
                if (result) {
                    responseBody = {
                        login: dbLogin,
                        password
                    };
                    LogInBool = true;
                } else {
                    responseBody = {
                        error: true,
                        errorMessage: 'Не правильный пароль!'
                    };
                }   
                
                res.send(responseBody); 
            }).catch(err => {
                res.send({
                    error: true,
                    errorMessage: err
                });
            });
        });
    }
   });
}

module.exports =  {
    login
}