const {
    insertDialog
} = require('../workers/Dialog.js');
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.post('/', insertDialog);

module.exports = router;