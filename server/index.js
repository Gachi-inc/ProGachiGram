
var express = require('express');
console.log('Server is starting...');
//require('dotenv/config')
//const dotenv = require('dotenv');
//dotenv.config();

var createRoutes = require('./core/routes');
var createSocket = require('./core/socket');
require('./core/db');

var app = express();
var server = require('http').createServer(app);
var io = createSocket(server);

createRoutes(app, io);
console.log(process.env.uri);

server.listen(process.env.PORT, ()=>{
    //console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

