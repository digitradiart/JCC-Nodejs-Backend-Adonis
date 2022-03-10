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

function range(firstNum, secondNum) {
  firstNum = parseInt(firstNum);
  secondNum = parseInt(secondNum);
  var numbers = [];

  // cek ascending atau descending
  if (firstNum < secondNum) {
    for (let i = firstNum; i <= secondNum; i++) {
      numbers.push(i);
    }
  } else if (firstNum > secondNum) {
    for (let i = firstNum; i >= secondNum; i--) {
      numbers.push(i);
    }
  } else {
    return '[]';
  }
  return numbers;
}

// console.log(range(1, 10));
// console.log(range(10, 1));
// console.log(range(-10, 10));
// console.log(range(1, 0));
// console.log(range(1));
// console.log(range(1, 1));
// console.log(range());

/**
 * Soal No. 2 (Range with Step)
Pada soal kali ini kamu diminta membuat function rangeWithStep yang mirip dengan function range di soal sebelumnya namun parameternya ditambah dengan parameter ketiga yaitu angka step yang menyatakan selisih atau beda dari setiap angka pada array. Jika parameter pertama lebih besar dibandingkan parameter kedua maka angka-angka tersusun secara menurun (descending) dengan step sebesar parameter ketiga.

struktur fungsinya seperti berikut rangeWithStep(startNum, finishNum, step) {}

Perintah: node array rangeWithStep <startNum> <finishNum> <step>

contoh perintah : 
node array rangeWithStep 1 10 2 
Output: [1, 3, 5, 7, 9]

node array rangeWithStep 5 2 1 
Output : [5, 4, 3, 2]
 */

function rangeWithStep(firstNumber, secondNumber, step) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  step = parseInt(step);
  var tampung = [];
  if (firstNumber < secondNumber) {
    for (let i = firstNumber; i <= secondNumber; i += step) {
      tampung.push(i);
    }
  } else if (firstNumber > secondNumber) {
    for (let i = firstNumber; i >= secondNumber; i -= step) {
      tampung.push(i);
    }
  }
  return tampung;
}

// console.log(rangeWithStep(10, 0, 2));
// console.log(rangeWithStep(5, 2, 1));
// console.log(rangeWithStep(0, 10, 2));

/*Soal No. 3 (Sum of Range)
Kali ini kamu akan menjumlahkan sebuah range (Deret) yang diperoleh dari function range di soal-soal sebelumnya. Kamu boleh menggunakan function range dan rangeWithStep pada soal sebelumnya untuk menjalankan soal ini.

Buatlah sebuah function dengan nama sum() yang menerima tiga parameter yaitu angka awal deret, angka akhir deret, dan beda jarak (step). Function akan mengembalikan nilai jumlah (sum) dari deret angka. contohnya sum(1,10,1) akan menghasilkan nilai 55.

ATURAN: Jika parameter ke-3 tidak diisi maka stepnya adalah 1.

Perintah: node array sum <startNum> <finishNum> <step>

Contoh:
node array sum 1 10
Output : 55 

node array sum 5 50 2
Output : 621

node array sum 1
Output: 1 */

function sum(firstNumber, secondNumber, step = 1) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  step = parseInt(step);
  var tampung = [];
  var sumElement = 0;
  if (firstNumber < secondNumber) {
    for (let i = firstNumber; i <= secondNumber; i += step) {
      tampung.push(i);
    }
  } else if (firstNumber > secondNumber) {
    for (let i = firstNumber; i >= secondNumber; i -= step) {
      tampung.push(i);
    }
  }

  for (let i = 0; i < tampung.length; i++) {
    sumElement += tampung[i];
  }
  return sumElement;
}

/*Soal No. 4 (Array Multidimensi)
Sering kali data yang diterima dari database adalah array yang multidimensi (array di dalam array). Sebagai developer, tugas kita adalah mengolah data tersebut agar dapat menampilkan informasi yang diinginkan.

Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. Contoh input dapat dilihat dibawah:

//contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ] 
Tulis data input di atas di dalam file library yang kamu. data tersebut digunakan sebagai input.

Tugas kamu adalah mengimplementasikan fungsi dataHandling() agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:

Perintah: node array dataHandling

Output: 

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca
 
Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar
 
Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak
 
Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun  */

/*
Soal No. 5 (Balik Kata)
Kamu telah mempelajari beberapa method yang dimiliki oleh String dan Array. String sebetulnya bersifat mirip sebuah array karena kita dapat mengakses karakter-karakter pada sebuah string layaknya mengakses elemen pada array.

Buatlah sebuah function balikKata() yang menerima sebuah parameter berupa string dan mengembalikan kebalikan dari string tersebut.

Perintah node array balikKata <kata>

Contoh Perintah: 
node array balikKata JabarCodingCamp 
Output: pmaCgnidoCrabaJ

node array balikKata racecar 
Output: racecar

node array balikKata 'kasur rusak'
Output: kasur rusak

node array balikKata 'haji ijah' 
Output: haji ijah

node array balikKata 'I am JCCs'
Output: sCCJ ma I

Dilarang menggunakan sintaks .split , .join , .reverse() ,.replace() hanya gunakan looping! */
function balikKata(kata) {
  let i = 0;
  if (kata === undefined) {
    return 'Masukkan kata';
  }
  for (i = kata.length - 1; i >= 0; i--) {
    process.stdout.write(kata[i]);
  }
}

// EXPORT MODULE
module.exports = {
  range: range,
  rangeWithStep: rangeWithStep,
  sum: sum,
  balikKata: balikKata,
};
