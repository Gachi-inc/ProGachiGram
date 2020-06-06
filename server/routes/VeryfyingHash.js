const {Verify}= require('../workers/VerifyMail.js');
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.get('/', Verify);

module.exports = router;