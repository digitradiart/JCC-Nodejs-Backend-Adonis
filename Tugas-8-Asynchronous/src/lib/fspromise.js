import fspromise from 'fs/promises';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const path = 'data.json';
export const login = (param) => {
  fspromise
    .readFile(path)
    .then((data) => {
      let realData = JSON.parse(data);
      let [name, password] = param.split(',');
      let index = realData.findIndex((item) => item.name == name);
      if (index !== -1) {
        if (realData[index].name == name && realData[index].password == password) {
          realData[index].isLogin = true;
          console.log('Berhasil Login');
        } else {
          console.log('Password salah');
        }
      } else {
        console.log('Data tidak ditemukan');
      }
      return fspromise.writeFile(path, JSON.stringify(realData));
    })
    .catch((err) => {
      console.log(err);
    });
};
