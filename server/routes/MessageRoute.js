const {
    showMessage
} = require('../workers/showMessage.js');
const {
    insertMessage
} = require('../workers/Message.js');
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.get('/:dialog', showMessage);
router.post('/', insertMessage);

module.exports = router;