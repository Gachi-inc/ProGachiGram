const bcrypt = require('bcryptjs')
const uri = "";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

function insertmessage(req, res) {

  client.connect(err => {
    if (err) {
      console.log('Oops!', err)
      setTimeout(() => {}, 5000);
    } else {
      console.log('Connected');
      const {
        dialog,
        from,
        to,
        text,
        sendDate,
        status
      } = req.body;
      const db = client.db('Dialogs');
      var messageObj = {
        dialog,
        from,
        to,
        text,
        sendDate,
        status
      };
      console.log('View Obj');
      db.collection('MessageData').insertOne(messageObj, (err, result) => {
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
  insertmessage
}