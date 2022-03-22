const fs = require('fs');

class UserController {
  static findAll(req, res) {
    fs.readFile('data.json', (err, data) => {
      if (err) {
        res.status(400).json({ errors: 'error membaca data' });
      } else {
        let realData = JSON.parse(data);
        res.status(200).json({ message: 'berhasil membaca data', data: realData.users });
      }
    });
  }
}

module.exports = UserController;
