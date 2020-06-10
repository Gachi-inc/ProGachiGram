
const mongoose = require("mongoose");
const {uri} = require('../config');
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      throw Error(err);
    }
  }
);