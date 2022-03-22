var express = require('express');
var router = express.Router();

// UserController
const UserController = require('../controllers/users');

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', UserController.findAll);

router.get('/:id', (req, res) => {
  res.send(`Selamat datang ${req.params.id}. Terima kasih sudah menjadi user.`);
});

router.post('/register', UserController.register);
module.exports = router;
