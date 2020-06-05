const bcrypt = require('bcryptjs')
const uri = "";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

function showMessage(req, res) {

    client.connect(err => {
        if (err) {
            console.log('Oops!', err)
            setTimeout(() => {}, 5000);
        } else {
            console.log('Connected');
            const {
                dialogId
            } = req.params;
            const db = client.db('Dialogs');
            db.collection('MessageData').find({
                dialog: dialogId
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
    showMessage
}