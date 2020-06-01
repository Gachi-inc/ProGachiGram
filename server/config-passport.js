// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const uri = "mongodb+srv://MishNigGrishPuk:5XGH24h3xUlQzFSu@cluster0-6rss2.azure.mongodb.net/test?retryWrites=true&w=majority";
// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// let dbUserCollection = null;

// client.connect(err => {
//     if(err) {
//       console.log('Oops!', err)
//       setTimeout(() => {
//       }, 5000);
//     } else {
//       console.log('Connected');
//       dbUserCollection = client.db('Users').collection('UserData');
//     }
// });


// passport.serializeUser(function(user, done) {
//   console.log('Сериализация: ', user);
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//     console.log('Десериализация: ', id);
//     dbUserCollection.findById(id, function(err, user) {
//         done(err, user);
//     });
// });