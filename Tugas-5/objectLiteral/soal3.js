/*Soal No. 3 (Naik Angkot)
Problem

Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [ ['Dimitri', 'B', 'F'] ] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]
 */

function naikAngkot(listPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var hasil = [];

  for (var i = 0; i < listPenumpang.length; i++) {
    var output = {};
    var start = '';
    var end = '';
    var bayar = 0;
    // Deklarasi Object
    for (var j = 0; j <= 3; j++) {
      switch (j) {
        case 0:
          output.penumpang = listPenumpang[i][j];
          break;
        case 1:
          output.naikDari = listPenumpang[i][j];
          start = j;
          break;
        case 2:
          output.tujuan = listPenumpang[i][j];
          end = j;
          break;
        case 3:
          // Slice rute
          for (var k = 0; k < rute.length; k++) {
            if (rute[k] === listPenumpang[i][start]) {
              iris1 = k;
            } else if (rute[k] === listPenumpang[i][end]) {
              iris2 = k;
            }
          }
          // Menghitung biaya
          var hitung = rute.slice(iris1, iris2 + 1);
          for (var l = 1; l < hitung.length; l++) {
            bayar = bayar + 2000;
          }
          output.bayar = bayar;
          break;
      }
    }
    hasil.push(output);
  }
  return hasil;
}

//TEST CASE
console.log(
  naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B'],
    ['Ayu', 'B', 'D'],
    ['Agus', 'E', 'A'],
  ])
);

console.log(naikAngkot([]));
