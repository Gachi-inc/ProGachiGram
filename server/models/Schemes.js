const mongoose = require("mongoose");
// import differenceInMinutes from 'date-fns/differenceInMinutes';
// import generatePasswordHash from "../utils"
var generatePasswordHash = require("../utils")
var differenceInMinutes = require('date-fns/differenceInMinutes');
const {
  parseISO
} = require("date-fns");
const Schema = mongoose.Schema;



// установка схемы
const userModelScheme = new Schema({
  email: {
    type: String,
    require: 'Email address is required',
    // validate: [isEmail, 'Invalid email'],
    unique: true,
  },
  fullname: {
    type: String,
    require: 'Fullname is required',
  },
  password: {
    type: String,
    require: 'Password is required',
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  avatar: String,
  confirmed_hash: String,
  last_seen: {
    type: Date,
    default: new Date(),
  },

  //timestamps: true,
});

userModelScheme.virtual('isOnline').get(function(){
  return differenceInMinutes(parseISO(new Date()), this.last_seen) < 5;
})

userModelScheme.set('toJSON', {
  virtuals: true,
})

userModelScheme.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  user.password = await generatePasswordHash(user.password);
  //user.confirmed_hash = await generatePasswordHash(new Date().toString());
  //return (user.confirmed_hash, user.password);
});



const dialogModelScheme = new Schema({
  // _id: Number,
  fromUser: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  toUser: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  dateOfCreate: Date,
  updateDate: Date,
  // whoCreate: mongoose.Types.ObjectId,
  lastMessage: {
    type: mongoose.Types.ObjectId,
    ref: 'Message'
  },
  unRead: Boolean
});

const messageModelScheme = new Schema({
  dialog: {
    type: mongoose.Types.ObjectId,
    ref: "Dialog",
    require: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    require: true
  },
  text: {
    type: String,
    require: Boolean
  },
  sendDate: Date,
  status: {
    type: Boolean,
    default: false
  }
});



const DialogModel = mongoose.model('Dialog', dialogModelScheme);
const MessageModel = mongoose.model('Message', messageModelScheme);
const UserModel = mongoose.model('User', userModelScheme);

module.exports = {
  UserModel,
  DialogModel,
  MessageModel
}