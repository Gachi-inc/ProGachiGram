var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
	username: "Gaev Mikhail",
	vk: "https://vk.com/jerry_bom_bom"
  }, {
  	id: 2,
	username: "Ovchinnikov Vladimir",
	vk: "https://vk.com/vovan_teeshot"
  }, {
  	id: 3,
	username: "Savin Grigoriy",
	vk: "https://vk.com/komodood"
  }, {
  	id: 4,
	username: "Parenyuk Nikita",
	vk: "https://vk.com/paren_k"
  }]);
});

module.exports = router;