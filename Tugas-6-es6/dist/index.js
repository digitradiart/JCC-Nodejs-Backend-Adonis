"use strict";

var _sapa = require("./lib/sapa");

var _convert = require("./lib/convert");

var _checkScore = require("./lib/checkScore");

var _filterData = require("./lib/filterData");

var args = process.argv;

switch (args[2]) {
  case 'sapa':
    console.log((0, _sapa.sapa)(args[3]));
    break;

  case 'convert':
    console.log((0, _convert.convert)(args[3], args[4], args[5]));
    break;

  case 'checkScore':
    console.log((0, _checkScore.checkScore)(args[3]));
    break;

  case 'filterData':
    console.log((0, _filterData.filterData)(args[3]));
    break;

  default:
    console.log('Perintah yang Anda masukkan salah');
    break;
} // console.log(sapa('Ayu'));
// console.log(convert('Bondra', 'Medan', 25));
// console.log(checkScore('name:Ahmad,class:Adonis,score:89'));
// console.log(filterData('adonis'));