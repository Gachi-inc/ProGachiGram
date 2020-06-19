var { check, oneOf } = require("express-validator") ;
//VA { check, oneOf, validationResult } = require('express-validator/check');

module.exports = [
    //check('email').isEmail(), 
    check('password')
        .exists()
        .isLength({ min: 3 }),
    oneOf([
        check('fullname')
          .exists()
          .withMessage('fullname is required')
          .isLength({ min: 2 })
          .withMessage('wrong fullname length'),
        check('fullname')
          .exists()
          .withMessage('fullname is required')
          .isEmail()
          .withMessage('fullname not valid')
    ])
];