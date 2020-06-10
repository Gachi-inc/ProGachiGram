
var express = require('express');
var createServer = require('http');

var createRoutes = require('./core/routes');
var createSocket = require('./core/socket');
require('./core/db');
// import dotenv from 'dotenv';
//import { createServer } from 'http';

// dotenv.config();

// import './core/db.mjs';
// import createRoutes from './core/routes.mjs';
// import createSocket from './core/socket.mjs';

const app = express();
var server = require('http').createServer(app);
const io = createSocket(server);

createRoutes(app, io);



server.listen(5000);

// const PORT= process.env.PORT ? Number(process.env.PORT) : 5000;

// http.listen(PORT, function () {
//   console.log(`Server: http://localhost:${PORT}`);
// });