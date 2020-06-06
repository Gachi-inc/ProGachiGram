const bcrypt = require('bcryptjs')
const uri = "";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

function insertDialog(req, res) {

   client.connect(err => {
      if (err) {
         console.log('Oops!', err)
         setTimeout(() => {}, 5000);
      } else {
         console.log('Connected');
         const {
            fromUser,
            toUser,
            whoCreate
         } = req.body;
         const db = client.db('Dialogs');
         var dialogObj = {
            fromUser,
            toUser,
            whoCreate
         };
         console.log('View Obj');
         db.collection('DialogsData').insertOne(dialogObj, (err, result) => {
            console.log('Sup,', result);
            if (err) {
               return res.send(err);
            } else {
               return res.send({
                  ...result.ops[0]
               });
            }
         });
      }
   });
}
module.exports = {
   insertDialog
}