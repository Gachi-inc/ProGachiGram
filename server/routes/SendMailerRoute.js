var express = require('express');
const {
    SendMail
} = require('../workers/SendMailer.js.js.js');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.post('/', SendMail);

module.exports = router;