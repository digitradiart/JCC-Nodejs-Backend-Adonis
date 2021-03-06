var express = require('express');
var router = express.Router();

// UserController
const UserController = require('../controllers/users');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/karyawan', UserController.showAll);

router.get('/:id', (req, res) => {
  res.send(`Selamat datang ${req.params.id}. Terima kasih sudah menjadi user.`);
});

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/karyawan/:name/siswa', UserController.addSiswa);
module.exports = router;
