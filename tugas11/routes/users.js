var express = require('express');
var router = express.Router();

// UserController
const UserController = require('../controllers/users');

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', UserController.findAll);

module.exports = router;
