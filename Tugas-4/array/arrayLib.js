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
  var tampung = [];
  if (firstNumber < secondNumber) {
    for (let i = firstNumber; i <= secondNumber; i++) {
      tampung.push(i);
      i += step - 1;
    }
  } else if (firstNumber > secondNumber) {
    for (let i = firstNumber; i >= secondNumber; i--) {
      tampung.push(i);
      i -= step - 1;
    }
  }
  return tampung;
}

// console.log(rangeWithStep(10, 0, 2));
// console.log(rangeWithStep(5, 2, 1));
// console.log(rangeWithStep(0, 10, 2));
