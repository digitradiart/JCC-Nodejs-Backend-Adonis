/*
Soal No. 1 (Range)
Buatlah sebuah function dengan nama range() yang menerima dua parameter berupa number. Function mengembalikan sebuah array yang berisi angka-angka mulai dari angka parameter pertama hingga angka pada parameter kedua. Jika parameter pertama lebih besar dibandingkan parameter kedua maka angka-angka tersusun secara menurun (descending).

struktur fungsinya seperti berikut range(startNum, finishNum) {}
Jika parameter pertama dan atau kedua tidak diisi maka function akan menghasilkan sebuah array kosong []

Perintah: node array range <startNum> <finishNum> 
Contoh Perintah: 

node array range 1 10 
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

node array range 54 50 
Output : [54, 53, 52, 51, 50]

node array range 1
Output : []

node array range
Output: []
 */
var numbers = [12, 1, 3, 100, -100];
// Mengurutkan secara Ascending
numbers.sort(function (value1, value2) {
  return value1 - value2;
});

console.log(numbers); // [1, 3, 12]

// Mengurutkan secara Descending
numbers.sort(function (value1, value2) {
  return value2 - value1;
});
console.log(numbers); // [12, 3, 1]
