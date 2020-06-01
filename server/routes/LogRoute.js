const {login}= require('../workers/UserLogin.js');
var express = require('express');
const passport = require('passport');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());



router.post('/', login);

  
module.exports = router;