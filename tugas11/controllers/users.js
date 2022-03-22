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
        let { name, role, password, isLogin } = req.body;

        let count = 0;
        if (role == 'admin') {
          let i;
          for (i = 0; i < users.length; i++) {
            if (users[i].role == 'admin') {
              count++;
            }
          }
        }

        if (count == 0) {
          let newUser = { name, role, password, isLogin };
          users.push(newUser);
          let newData = { ...existingData, users };
          fs.writeFile('data.json', JSON.stringify(newData), (err) => {
            if (err) {
              res.status(400).json({ errors: 'error menyimpan data' });
            } else {
              res.status(201).json({ message: 'berhasil register' });
            }
          });
          res.send({ message: 'Berhasil register' });
        } else {
          res.send({ message: 'Role admin telah terdaftar' });
        }
      }
    });
  }
}

module.exports = UserController;
