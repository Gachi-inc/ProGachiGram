// export { default as UserCtrl } from "./UserController";
// export { default as DialogCtrl } from "./DialogController";
// export { default as MessageCtrl } from "./MessageController";
//export { default as UploadFileCtrl } from "./UploadController";

var UserCtrl = require('./UserController');
var DialogCtrl = require('./DialogController');
var MessageCtrl = require('./MessageController');

module.exports ={
    UserCtrl,
    DialogCtrl,
    MessageCtrl
}