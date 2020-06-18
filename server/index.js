
var express = require('express');
console.log('Server is starting...');

const dotenv = require('dotenv');
dotenv.config();

var createRoutes = require('./core/routes');
var createSocket = require('./core/socket');
require('./core/db');

const app = express();
var server = require('http').createServer(app);
const io = createSocket(server);

createRoutes(app, io);


server.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

