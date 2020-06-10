var { check } = require("express-validator") ;

module.exports = [
  check("email").isEmail(),
  check("fullname").isLength({ min: 3 }),
  check("password").isLength({ min: 3 })
];