// export { default as loginValidation } from "./login";
// export { default as registerValidation } from "./registration";


var loginValidation  = require('./signin');
var registerValidation   = require('./signup');

module.exports = loginValidation;
module.exports = registerValidation;