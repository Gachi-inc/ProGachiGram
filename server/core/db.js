
const mongoose = require("mongoose");
const {uri} = require('../config');
console.log('<mongoose connected>')
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      throw Error(err);
    }
  }
);