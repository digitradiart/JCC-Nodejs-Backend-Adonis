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

  static register(req, res) {
    fs.readFile('data.json', (err, data) => {
      if (err) {
        res.status(400).json({ errors: 'error membaca data' });
      } else {
        let existingData = JSON.parse(data);
        let { users } = existingData;
        let { name, role, password } = req.body;
        let newUser = { name, role, password };
        users.push(newUser);
        let newData = { ...existingData, users };
        fs.writeFile('data.json', JSON.stringify(newData), (err) => {
          if (err) {
            res.status(400).json({ errors: 'error menyimpan data' });
          } else {
            res.status(201).json({ message: 'berhasil menyimpan data' });
          }
        });
      }
    });
  }
}

module.exports = UserController;
