const {message}= require('../workers/Message.js');
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.post('/message', message);
  
module.exports = router;