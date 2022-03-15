"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sapa = exports.filterData = exports.convert = exports.checkScore = void 0;

// gabungkan semua fungsi dalam satu file functions.js
var sapa = function sapa(nama) {
  return "Halo! Selamat pagi, ".concat(nama, ".");
};

exports.sapa = sapa;

var convert = function convert(nama, domisili, umur) {
  return {
    nama: nama,
    domisili: domisili,
    umur: umur
  };
};

exports.convert = convert;

var filterData = function filterData(inputArr) {
  var data = [{
    name: 'Ahmad',
    "class": 'adonis'
  }, {
    name: 'Regi',
    "class": 'laravel'
  }, {
    name: 'Bondra',
    "class": 'adonis'
  }, {
    name: 'Iqbal',
    "class": 'vuejs'
  }, {
    name: 'Putri',
    "class": 'Laravel'
  }];
  return data.filter(function (a) {
    return a["class"].toLowerCase() === inputArr.toLowerCase();
  });
};

exports.filterData = filterData;

var checkScore = function checkScore(str) {
  var nama = str.split(',')[0].split(':')[1];
  var kelas = str.split(',')[1].split(':')[1];
  var skor = str.split(',')[2].split(':')[1];
  return {
    name: nama,
    "class": kelas,
    score: skor
  };
};

exports.checkScore = checkScore;