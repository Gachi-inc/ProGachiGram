const {register}= require('../workers/registrate.js');
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.post('/', register);

  
module.exports = router;