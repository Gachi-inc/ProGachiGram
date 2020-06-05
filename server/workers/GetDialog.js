const bcrypt = require('bcryptjs')
const uri = "mongodb+srv://MishNigGrishPuk:5XGH24h3xUlQzFSu@cluster0-6rss2.azure.mongodb.net/test?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

function getDialog(req, res) {

   client.connect(err => {
      if (err) {
         console.log('Oops!', err)
         setTimeout(() => {}, 5000);
      } else {
         console.log('Connected');
         const {
            user
         } = req.params;
         const db = client.db('Dialogs');
         db.collection('DialogsData').find({
            fromUser: user
         }).toArray((err, result) => {
            // {user}, 
            console.log(result);
            if (err) {
               console.log(err);
               return res.send(err);
            } else {
               return res.send(result);
            }
         });
      }
   });
}
module.exports = {
   getDialog
}