const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs')
var {UserModel} = require('../models/Schemes');
var {validationResult} = require('express-validator');
var {createJWToken} = require('../utils/createJWToken');
//const {user} = require("../config");

class UserController {
  constructor(io) {
    this.io = io;
  }

  show = (req, res) => {
    const id = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: 'User not found'
        });
      }
      res.json(user);
    });
  };

  getMe = (req, res) => {                               ///НУЖНО ОПР ДЛЯ ЧЕГО БУДЕТ ИСПОЛЬЗОВАТЬСЯ
    const id = req.user && req.user._id;
    UserModel.findById(id, (err, user) => {
      if (err || !user) {
        return res.status(404).json({
          message: 'User not found'
        });
      }
      res.json(user);
    });
  };

  findUsers = (req, res) => {
    const query = req.query.query;
    UserModel.find()
    .or([
      { fullname: new RegExp(query, "i") },
      { email: new RegExp(query, "i") },
    ])
      .then((users) => res.json(users))
      .catch((err => {
        return res.status(404).json({
          status: "error",
          message: err,
        });
      }));
  };

  delete = (req, res) => {
    const id = req.params.id;
    UserModel.findOneAndRemove({
        _id: id
      })
      .then(user => {
        if (user) {
          res.json({
            message: `User ${user.fullname} deleted`
          });
        }
      })
      .catch(() => {
        res.json({
          message: `User not found`
        });
      });
  };

  create = (req, res) => {
    
    const salt = bcrypt.genSaltSync(10);
    const confirmed_hash = bcrypt.hashSync(req.body.password, salt);
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    };

    const errors = validationResult(postData);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array()
      });
    }

    const user = new UserModel(postData);
    user.confirmed_hash = confirmed_hash;
    user
      .save()
      // .then((obj) => {
      //   res.json({
      //    _id: obj._id,
      //    fullname: obj.fullname,
      //    last_seen: obj.last_seen
      //   })
      // })
const URL = "http://localhost:3000/api/user/verify?hash=" + user.confirmed_hash;
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  auth: {
      user: process.env.emailMailer,
      pass: process.env.passwordMailer
  }
});
console.log("мы вошли перед почтой")
    let result = transporter.sendMail({
        from: `"ProGachiGram"<${process.env.emailMailer}>`,
        to: postData.email,
        subject: "Подтверждение регистрации",
        html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:3000/signup/verify?hash=${user.confirmed_hash}">по этой ссылке</a>`,
        text: `Please confirm your account by clicking the following link: ${URL}` 
      }).then(function () {
        console.log("Message sent: %s", postData.email);
        res.json({
          status: 'success',
          message: 'Вам отправлено письмо для подтверждения аккаунта!'
        });
      }, function (error) {
        res.json({
          status: 'failed',
          message: error
        })
      })
      .catch((reason) => {      ///Я хз, нужен здесь вообще catch или нет.
        res.status(500).json({
          status: "error",
          message: reason,
        });
      });
  }


  verify = (req, res) => {
    const hash = req.query.hash;
    if (!hash) {
      return res.status(420).json({
        status: 'error',
        message: 'Данная ссылка недействительна'
      });
    }

    UserModel.findOneAndUpdate({
      confirmed_hash: hash
    }, {
      $set: {
        confirmed: true
      }
    }).then(function () {
      UserModel.findOne({
        confirmed_hash: hash
      }).then(function (result) {                     //Для меня некоторая загадка, почему нельзя после первого
        if (!result || result.confirmed === false) {  // .then получать result для подтверждения значения
          return res.status(404).json({               // confirmed. Но в таком виде оно работает
            hash: hash,
            status: 'error',
            message: 'Не удалось подтвердить аккаунт'
          })
        } else {
          res.json({
            status: 'success',
            message: 'Аккаунт успешно подтвержден!'
          });
        }
      });
    });
  };

  login = (req, res) => {
    const postData = {
      email: req.body.fullname,
      password: req.body.password
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: 'error',
        errors: errors.array()
      });
    }

    UserModel.findOne({
      $or: [{
        fullname: postData.email
          },
            {
        email: postData.email
          }
    ]
    }, (err, user) => {
      if (err || !user) {
        return res.json({
          status: 'error',
          message: 'User not found'
        });
      }
      
      if (bcrypt.compareSync(postData.password, user.password)) {
        
        if (!user.confirmed) {
          return res.json({
            status: 'error',
            message: 'User not activated'
          });
        }

        const token = createJWToken(user);
        res.json({  
          status: 'success',
          token
        });
      } else {
        res.json({
          status: 'error',
          message: 'Incorrect password or email'
        });
      }
    });
  };
}

//export default UserController;


module.exports = UserController;