import { readData, writeData } from './lib/fscallback';
import { login, addSiswa } from './lib/fspromise';
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'readData':
    readData();
    break;

  case 'login':
    let param = args[1];
    if (param !== undefined) {
      login(param);
    } else {
      console.log('inputan salah');
    }
    break;

  case 'addSiswa':
    let [value1, value2, value3] = args[1].split(',');
    let obj = {
      name: value1,
      password: value2,
      role: value3,
      isLogin: false,
    };
    writeData(obj);
    console.log('Berhasil menambahkan siswa');
    break;

  default:
    console.log('inputan salah');
    break;
}
