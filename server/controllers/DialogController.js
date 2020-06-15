// import express from 'express';
// import socket from 'socket.io';

//import { MessageModel, DialogModel } from '../models/Schemes';
var {MessageModel} = require('../models/Schemes');
var {DialogModel} = require('../models/Schemes');

class DialogController {


  constructor(io) {
    this.io = io;
  }

  index = (req, res) => {
    const userId = req.user._id;
    console.log('Index');
    DialogModel.find()
      .or([{ author: userId }, { partner: userId }])
      .populate(['author', 'partner'])
      .populate({
        path: 'lastMessage',
        populate: {
          path: 'user',
        },
      })
      .exec(function(err, dialogs) {
        if (err) {
          return res.status(404).json({
            message: 'Dialogs not found',
          });
        }
        return res.json(dialogs);
      });
  };

  create = (req, res) => {
    console.log('Create');
    console.log(req.body.author);
    console.log(req.body.partner);
    const postData = {
      author: req.body.user,
      partner: req.body.partner,
    };
console.log(postData.author);
console.log(postData.partner);
    DialogModel.findOne(
      {
        author: postData.author,
        partner: postData.partner,
      },
      (err, user) => {
        if (err) {
          return res.status(500).json({
            status: 'error',
            message: err,
          });
        }
        console.log("Мы еще тут")
        if (user) {
          return res.status(403).json({
            status: 'error',
            message: 'Такой диалог уже есть',
          });
        } else {
          const dialog = new DialogModel(postData);

          dialog
            .save()
            .then((dialogObj) => {
              const message = new MessageModel({
                text: req.body.text,
                user: req.user._id,
                dialog: dialogObj._id,
              });
console.log("Мы уже тут")
              message
                .save()
                .then(() => {
                  dialogObj.lastMessage = message._id;
                  dialogObj.save().then(() => {
                    res.json(dialogObj);
                    this.io.emit('SERVER:DIALOG_CREATED', {
                      ...postData,
                      dialog: dialogObj,
                    });
                  });
                })
                .catch(reason => {
                  res.json(reason);
                });
            })
            .catch(err => {
              res.json({
                status: 'error',
                message: err,
              });
            });
        }
      },
    );
  };

  delete = (req, res) => {
    const id = req.params.id;
    DialogModel.findOneAndRemove({ _id: id })
      .then(dialog => {
        if (dialog) {
          res.json({
            message: `Dialog deleted`,
          });
        }
      })
      .catch(() => {
        res.json({
          message: `Dialog not found`,
        });
      });
  };
}

module.exports = DialogController;
// export default DialogController;