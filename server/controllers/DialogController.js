// import express from 'express';
// import socket from 'socket.io';

//import { MessageModel, DialogModel } from '../models/Schemes';
var {
  MessageModel
} = require("../models/Schemes");
var {
  DialogModel
} = require("../models/Schemes");
const moment = require('moment');

class DialogController {
  constructor(io) {
    this.io = io;
  }

  index = (req, res) => {                         //поиск диалогов всех в которых состоит юзер из токена.
    const userId = req.user._id;
    //const userId = req.params.user;
    DialogModel.find()
      .or([{
          fromUser: userId,
        },
        {
          toUser: userId,
        },
      ])
      .populate(["fromUser", "toUser"])
      .populate({
        path: "lastMessage",
        populate: {
          path: "user",
        },
      })
      .exec(function (err, dialogs) {
        if (err) {
          return res.status(404).json({
            message: "Dialogs not found",
          });
        }
        return res.json(dialogs);
      });
  };

  create = (req, res) => {
    console.log("Create");
    const postData = {
      fromUser: req.user._id,
      toUser: req.body.partner,
      dateOfCreate: Date(),
      updateDate: moment().format("YYYY-MM-DD HH:mm:s")
    };

    DialogModel.findOne({
        fromUser: req.user._id,
        toUser: req.body.partner,
      },
      (err, user) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: err,
          });
        }
        if (user) {
          return res.status(403).json({
            status: "error",
            message: "Такой диалог уже есть",
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
              message
                .save()
                .then(() => {
                  dialogObj.lastMessage = message._id;
                  dialogObj.save().then(() => {
                    res.json(dialogObj);
                    this.io.emit("SERVER:DIALOG_CREATED", {
                      ...postData,
                      dialog: dialogObj,
                    });
                  });
                })
                .catch((reason) => {
                  res.json({
                    status: "catch",
                    message: err
                  });
                });
            })
            .catch((err) => {
              res.json({
                status: "error",
                message: err,
              });
            });
        }
      }
    );
  };

  delete = (req, res) => {            //По id диалога
    const id = req.params.id;
    DialogModel.findOneAndRemove({
        _id: id,
      })
      .then((dialog) => {
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