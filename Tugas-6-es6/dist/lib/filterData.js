"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterData = void 0;

/*
Soal 4 Filter Data
Buatlah sebuah function yang menerima dua paramater berupa array of object berisi data peserta bootcamp Indonesia Mengoding, dan parameter string nama kelas. Function tersebut akan mengembalikan array of object berisi data peserta yang sudah terfilter menggunakan parameter nama kelas yang diberikan.

Hint: Rest Parameter, Enhance Object, arrow functions

CATATAN: data array tidak dikirimkan lewat perintah arguments node (process.argv) melainkan data nya ditulis langsung di library. Berikut ini data array nya:

const data = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "Laravel" }
]

Perintah:

node dist filterData <nama-kelas>

Contoh Perintah:

node dist filterData adonis

Output:

[
  { name: "Ahmad", class: "adonis"} ,
  { name: "Bondra", class: "adonis"}
]
*/
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