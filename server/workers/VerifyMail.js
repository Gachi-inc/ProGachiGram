const UserModel= require('../models/Schemes');
const MongoClient = require('mongodb').MongoClient;
const {uri} = require('../config')
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

function Verify(req, res){ //Сюда должна вести ссылка, которую мы должны обработать(подготовить роут для нее, но это пока не точно)
    client.connect( err => {
        if (err) {
           console.log('Oops!', err)
           setTimeout(() => {}, 5000);
        } else {
           console.log('Connected');

    const hash = req.query.hash;

    if (!hash) {
        return res.status(420).json({ errors: 'Данная ссылка недействительна' });
      }

    console.log("Полученный хэш: ", hash);

    const db = client.db('Users');
    //callback(db.collections()) //тестовая проверка что бд подключена и мы можем получить данные.
    //console.log("Connecting confirmed: ", db.co);
   db.collection('UserData').findOne({ confirm_hash: hash }, (err, user) => {
        if (err || !user) {
          return res.status(404).json({
            status: 'error',
            message: 'Hash not found'
          });
        }
  
        user.confirmed = true;
        user.save(err => {
          if (err) {
            return res.status(404).json({
              status: 'error',
              message: err
            });
          }
  
          res.json({
            status: 'success',
            message: 'Аккаунт успешно подтвержден!'
          });
        });
      });
    }})}
  
  module.exports =  {
    Verify
}






/* db.collection('UserData').findOneAndUpdate(
    { confirm_hash: hash }, 
    { $set: {confirmed: true}}, // параметр обновления
    //{ returnOriginal: false},   // доп. опции обновления
    (err, user) =>  {           //по полю confirm_hash в схеме из бд мы ищем значение. Далее идет код...
 if (err || !user) {
   return res.status(404).json({
     status: 'error',
     message: 'Hash not found',
   });
 }
 
 
 if(user.confirmed == true && user.confirm_hash == hash){
   res.json({
     status: 'success',
     message: 'Аккаунт успешно подтвержден!'    
   })} else {
     res.json({
         status: 'failed',
         message: 'Не удалось подтвердить аккаунт' ,
         user
   })};
 }) */























