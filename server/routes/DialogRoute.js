const {dialog}= require('../workers/Dialog.js');
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.get('/dialog', dialog);
router.post('/dialog', dialog);

  
module.exports = router;