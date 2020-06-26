const express = require('express');


console.log('Server is starting...');
// require('dotenv/config')
// const dotenv = require('dotenv');
// dotenv.config();





const createRoutes = require('./core/routes');
const createSocket = require('./core/socket');
require('./core/db');

console.log('mongoose connected!');
const app = express();

const server = require('http').createServer(app);
const io = createSocket(server);


createRoutes(app, io);


server.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

