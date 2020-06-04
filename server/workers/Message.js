const bcrypt =  require('bcryptjs')
const uri = "mongodb+srv://MishNigGrishPuk:5XGH24h3xUlQzFSu@cluster0-6rss2.azure.mongodb.net/test?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function showDialog (req, res) {
    
    client.connect(err => {
       if(err) {
         console.log('Oops!', err)
         setTimeout(() => {
         }, 5000);
       } else {
        console.log('Connected'); 
         
        app.get('/message/:dialog', function(req, res) {
            console.log( req.params.dialog);    
        })
        const db = client.db('Users');

        db.collection('UserData').findOne({
             $or: [

                ]
         }, (err, result) => {

         });
     }
    });
 }