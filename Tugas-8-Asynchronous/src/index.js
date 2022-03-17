import { readData, writeData } from './lib/fscallback';
import { login } from './lib/fspromise';
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

  default:
    console.log('inputan salah');
    break;
}
