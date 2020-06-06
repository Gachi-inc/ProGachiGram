const {
    getDialog
} = require('../workers/GetDialog.js');
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.get('/:user/dialogs', getDialog);

module.exports = router;