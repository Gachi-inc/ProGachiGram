var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/users', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "Gaev Mikhail"
  }, {
  	id: 2,
  	username: "Ovchinnikov Vladimir"
  }, {
  	id: 3,
  	username: "Savin Grigoriy"
  }, {
  	id: 4,
  	username: "Parenyk Nikita"
  }]);
});

module.exports = router;