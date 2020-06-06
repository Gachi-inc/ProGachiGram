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
    db.collection('UserData').findOneAndUpdate({confirmed_hash: hash}, {$set : {confirmed: true}}).then(function(){
      db.collection('UserData').findOne({confirmed_hash: hash}).then(function(result){ //Для меня некоторая загадка, почему нельзя после первого
          if( !result || result.confirmed === false){                                   // .then получать result для подтверждения значения 
            return res.status(404).json({                                              // confirmed. Но в таком виде оно работает
              status: 'error',
              message: 'Не удалось подтвердить аккаунт'                                             
          })} else {
            res.json({                                                                   
            status: 'success',
            message: 'Аккаунт успешно подтвержден!'    
            });
          }
      });
  });

    /*db.collection('UserData').findOneAndUpdate(
      { confirm_hash: hash }, 
      { $inc: { confirmed : true }}, // параметр обновления
      //{ returnOriginal: false},   // доп. опции обновления
      (err, result) =>  {           //по полю confirm_hash в схеме из бд мы ищем значение. Далее идет код...
   if (err || !result) {
     return res.status(404).json({
       status: 'error',
       message: 'Hash not found',
     });
   }
   console.log(result);
   
   //if(user.confirmed == true && user.confirm_hash == hash){
     res.json({
       status: 'success',
       message: 'Аккаунт успешно подтвержден!'    

     })})*/
    
    }})}
    
  
  module.exports =  {
    Verify
}






























