import { readData, writeData } from './lib/fscallback';

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'readData':
    readData();
    break;

  case 'writeData':
    let [nameRaw, kelasRaw] = args[1].split(',');
    let [key1, val1] = nameRaw.split(':');
    let [key2, val2] = kelasRaw.split(':');
    let obj = {};
    obj[key1] = val1;
    obj[key2] = val2;
    console.log(obj);
    writeData(obj);
    break;

  default:
    break;
}
