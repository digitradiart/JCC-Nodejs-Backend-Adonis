// import { sapa } from './lib/sapa';
// import { convert } from './lib/convert';
// import { checkScore } from './lib/checkScore';
// import { filterData } from './lib/filterData';
import { sapa, convert, checkScore, filterData } from './lib/functions';

var args = process.argv;

switch (args[2]) {
  case 'sapa':
    console.log(sapa(args[3]));
    break;
  case 'convert':
    console.log(convert(args[3], args[4], args[5]));
    break;
  case 'checkScore':
    console.log(checkScore(args[3]));
    break;
  case 'filterData':
    console.log(filterData(args[3]));
    break;
  default:
    console.log('Perintah yang Anda masukkan salah');
    break;
}

// console.log(sapa('Ayu'));
// console.log(convert('Bondra', 'Medan', 25));
// console.log(checkScore('name:Ahmad,class:Adonis,score:89'));
// console.log(filterData('adonis'));
