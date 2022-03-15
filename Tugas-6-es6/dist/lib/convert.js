"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert = void 0;

/*
Soal 2 Konversi Object
Buatlah sebuah function yang menerima tiga parameter yaitu nama, domisili, dan umur. function akan mengembalikan object berisi data dari parameter yang diberikan.

Hint: Enhanced Objects, Destructuring, arrow functions

Perintah

node dist convert <nama> <domisili> <umur>

Contoh Perintah

node dist convert Bondra Medan 25

Output

{ "nama" : "Bondra", "domisili": "Medan", "umur": 25 }*/
var convert = function convert(nama, domisili, umur) {
  return {
    nama: nama,
    domisili: domisili,
    umur: umur
  };
};

exports.convert = convert;