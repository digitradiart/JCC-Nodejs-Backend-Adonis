var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', (req, res) => {
  res.send(`Selamat datang ${req.params.id}. Terima kasih sudah menjadi user.`);
});
module.exports = router;
