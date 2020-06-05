const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var UserModel = mongoose.model('UserModel', userModelScheme);
// установка схемы
const userModelScheme = new Schema({
  email: String,
  login: String,
  passwrod: String
});

const dialogModelScheme = new Schema({
  _id: Number,
  fromUser: mongoose.Types.ObjectId,
  toUser: mongoose.Types.ObjectId,
  dateOfCreate: Date,
  whoCreate: mongoose.Types.ObjectId,
  lastMessage: String,
  unRead: Boolean
});

const messageModelScheme = new Schema({
  dialog: mongoose.Types.ObjectId,
  from: mongoose.Types.ObjectId,
  to: mongoose.Types.ObjectId,
  text: String,
  sendDate: Date,
  status: Boolean
});