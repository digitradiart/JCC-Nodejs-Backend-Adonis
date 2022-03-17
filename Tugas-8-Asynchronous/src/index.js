import readData from './lib/fscallback';

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'readData':
    readData();
    break;

  default:
    break;
}
