const path = require('path');
const express = require('express');
console.log('Server is starting...');
require('dotenv/config')
const dotenv = require('dotenv');
dotenv.config();



var createRoutes = require('./core/routes');
var createSocket = require('./core/socket');
require('./core/db');
console.log('mongoose connected!');
var app = express();
let staticPath = path.join(__dirname, '../client/build');
app.use(express.static(staticPath))
var server = require('http').createServer(app);
var io = createSocket(server);

createRoutes(app, io);

server.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

