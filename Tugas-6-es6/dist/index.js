"use strict";

var _functions = require("./lib/functions");

// import { sapa } from './lib/sapa';
// import { convert } from './lib/convert';
// import { checkScore } from './lib/checkScore';
// import { filterData } from './lib/filterData';
var args = process.argv;

switch (args[2]) {
  case 'sapa':
    console.log((0, _functions.sapa)(args[3]));
    break;

  case 'convert':
    console.log((0, _functions.convert)(args[3], args[4], args[5]));
    break;

  case 'checkScore':
    console.log((0, _functions.checkScore)(args[3]));
    break;

  case 'filterData':
    console.log((0, _functions.filterData)(args[3]));
    break;

  default:
    console.log('Perintah yang Anda masukkan salah');
    break;
} // console.log(sapa('Ayu'));
// console.log(convert('Bondra', 'Medan', 25));
// console.log(checkScore('name:Ahmad,class:Adonis,score:89'));
// console.log(filterData('adonis'));