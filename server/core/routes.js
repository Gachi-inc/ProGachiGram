// import {
//     UserCtrl,
//     DialogCtrl,
//     MessageCtrl,
//    // UploadFileCtrl,
//   } from "../controllers";

var bodyParser = require('body-parser');
var {
  UserCtrl,
  DialogCtrl,
  MessageCtrl
} = require('../controllers');
var checkAuth = require('../middlewares/CheckAuth');
var loginValidation = require('../utils/validations/signin');
var registerValidation = require('../utils/validations/signup');
var sendMailerRouter = require('../routes/SendMailerRoute')



const createRoutes = (app, io) => {
  const UserController = new UserCtrl(io);
  const DialogController = new DialogCtrl(io);
  const MessageController = new MessageCtrl(io);
  //const UploadFileController = new UploadFileCtrl();

  app.use(bodyParser.json());
  app.use(checkAuth);
  // app.use(updateLastSeen);

  app.get("/", (_, res) => {
    res.send("Hello, World!");
  });

  app.get("/api/user/me", UserController.getMe);
  app.get("/api/user/verify", UserController.verify);
  app.post('/api/user/signup', registerValidation, UserController.create);
  app.post("/api/user/signin", loginValidation, UserController.login);
  app.get("/api/user/find", UserController.findUsers);
  app.get("/api/user/:id", UserController.show);
  app.delete("/api/user/:id", UserController.delete);

  app.use('/api/sendmailer', sendMailerRouter);
  app.get("/api/dialogs/", DialogController.index);
  app.delete("/api/dialogs/:id", DialogController.delete);
  app.post("/api/dialogs", DialogController.create);

  app.get("/api/messages", MessageController.index);
  app.post("/api/messages", MessageController.create);
  app.delete("/api/messages", MessageController.delete);

  // app.post("/files", multer.single("file"), UploadFileController.create);
  // app.delete("/files", UploadFileController.delete);
};


module.exports = createRoutes;