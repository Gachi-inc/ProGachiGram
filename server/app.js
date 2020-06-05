var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var socket = require('socket.io');
const uri = "";
//DataBase
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sendMailerRouter = require('./routes/SendMailerRoute')
var regRoute = require('./routes/RegRoute.js')
var logRoute = require('./routes/LogRoute.js');
var userRouter = require('./routes/user');
var dialogRoute = require('./routes/dialogRoute.js');
//var register = require('../client/src/Pages/Registrate');
//app.use('/registrate');



//Socket setup


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
require('./config-passport');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/api', indexRouter);
// app.use('/api/sendmailer', sendMailerRouter);
app.use('/api/registrate', regRoute);
app.use('/api/login', logRoute);
app.use('/api/users', usersRouter);
app.use('/api/dialog', dialogRoute);
app.use('/api/user', userRouter);
// Swagger UI
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.post('/sendmailer', function (request, response) {
  if (!request.body) return response.sendStatus(400)
  console.log(request.body)
})



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

/*const handler1 = require('./routes/SendMailer');
app.get('/first',  handler1.get.bind(handler1, {mail}));*/
module.exports = app, client;