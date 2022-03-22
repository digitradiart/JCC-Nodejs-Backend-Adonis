const fs = require('fs');

class UserController {
  // release 0
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

  // release 1
  static showAll(req, res) {
    fs.readFile('data.json', (err, data) => {
      if (err) {
        res.status(400).json({ errors: 'error membaca data' });
      } else {
        let realData = JSON.parse(data);
        res.status(200).json({ message: 'Berhasil get data users', data: realData.users });
      }
    });
  }

  // release 2
  static login(req, res) {
    fs.readFile('data.json', (err, data) => {
      if (err) {
        res.status(400).json({ message: 'Tidak berhasil login' });
      } else {
        let existingData = JSON.parse(data);
        let { users } = existingData;
        let { name, password } = req.body;
        let index = users.findIndex((item) => item.name == name);
        let i,
          count = 0;
        for (i = 0; i < users.length; i++) {
          if (users[i].isLogin == true) {
            count++;
          }
        }
        if (count == 0) {
          if (index !== -1) {
            if (users[index].name == name && users[index].password == password) {
              users[index].isLogin = true;
            } else {
              res.status(400).json({ message: 'Password salah' });
            }
          } else {
            res.status(400).json({ message: 'Data tidak ditemukan' });
          }
          let newData = { ...existingData, users };
          fs.writeFile('data.json', JSON.stringify(newData), (err) => {
            if (err) {
              res.status(400).json({ errors: 'error menyimpan data' });
            } else {
              res.status(201).json({ message: 'Berhasil Login' });
            }
          });
        } else {
          res.send({ message: 'Ada akun yang telah login' });
        }
      }
    });
  }

  static addSiswa(req, res) {
    fs.readFile('data.json', (err, data) => {
      if (err) {
        res.status(400).json({ message: 'Tidak berhasil menambahkan siswa' });
      } else {
        let existingData = JSON.parse(data);
        let { users } = existingData;
        let { name, kelas } = req.body;
        let trainerName = req.params.name;
        let indexAdmin = users.findIndex((items) => items.isLogin == true && items.role == 'admin');
        let index = users.findIndex((item) => item.name == trainerName);
        if (indexAdmin !== -1) {
          if (index !== -1) {
            if (users[index]['students'] == undefined) {
              users[index]['students'] = [];
            }
            users[index].students.push({ name, kelas });
          } else {
            res.status(400).json({ message: 'Data tidak ditemukan' });
          }
        } else {
          res.status(400).json({ message: 'admin perlu login' });
        }
        let newData = { ...existingData, users };
        fs.writeFile('data.json', JSON.stringify(newData), (err) => {
          if (err) {
            res.status(400).json({ errors: 'error menyimpan data' });
          } else {
            res.status(201).json({ message: 'Berhasil add siswa' });
          }
        });
      }
    });
  }
}

module.exports = UserController;
