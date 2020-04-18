const bcrypt =  require('bcryptjs')
//const {uri} = require('../config')
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true });

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
         
         if (!login || !email || !password || !passwordCheck) {
            console.log(req.body);
            return res.redirect('localhost:3000/registrate')
            }
         

         /* 
         Тут будем хешировать...
         */     
         const salt = bcrypt.genSaltSync(10);
         const passwordToSave = bcrypt.hashSync(password, salt);

         const user  = {login, email, passwordToSave}
         
         const db = client.db('Users');
         db.collection('UserData').insertOne(user, (err, result) => {
            
               if (err) {
                  res.send(err);
                  setTimeout(() => {
                     res.redirect('localhost:3000/registrate');
                  }, 5000)
               }
         });
         res.redirect('localhost:3000/login');
      }
   });
}
  module.exports =  {
     register
 }
 