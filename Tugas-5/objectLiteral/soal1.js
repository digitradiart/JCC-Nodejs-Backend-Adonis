/*
Soal No. 1 (Array to Object)
Buatlah function dengan nama arrayToObject() yang menerima sebuah parameter berupa array multidimensi. Dalam array tersebut berisi value berupa First Name, Last Name, Gender, dan Birthyear. Data di dalam array dimensi tersebut ingin kita ubah ke dalam bentuk Object dengan key bernama : firstName, lastName, gender, dan age. Untuk key age ambillah selisih tahun yang ditulis di data dengan tahun sekarang. Jika tahun tidak terdefinisi atau tahunnya lebih besar dibandingkan dengan tahun sekarang maka kembalikan nilai : "Invalid birth year".

Contoh: jika input nya adalah [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]]

maka outputnya di console seperti berikut :

1. Abduh Muhamad : { firstName: "Abduh", lastName: "Muhamad", gender: "male", age: 28}
2. Ahmad Taufik : { firstName: "Ahmad", lastName: "Taufik", gender: "male", age: 35} 
Untuk mendapatkan tahun sekarang secara otomatis bisa gunakan Class Date dari Javascript.

var now = new Date()
var thisYear = now.getFullYear() // 2020 (tahun sekarang)
Code

function arrayToObject(arr) {
    // Code di sini 
}
 
// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

var now = new Date();
var thisYear = now.getFullYear();

function arrayToObject(arr) {
  var biodata = {};
  let i, j;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < 4; j++) {
      switch (j) {
        case 0:
          biodata.firstName = arr[i][j];
          break;
        case 1:
          biodata.lastName = arr[i][j];
          break;
        case 2:
          biodata.gender = arr[i][j];
          break;
        case 3:
          // Check input tahun
          if (arr[i][j] === undefined || arr[i][j] > thisYear) {
            biodata.age = 'Invalid birth year';
          } else {
            biodata.age = thisYear - arr[i][j];
          }
          break;
      }
    }
    // Memanggil Object
    console.log(`${i + 1}. ${biodata.firstName} ${biodata.lastName}:`, biodata);
    console.log('\n');
  }
}

// input berupa array
var people = [
  ['Bruce', 'Banner', 'male', 1975],
  ['Natasha', 'Romanoff', 'female'],
  ['Ayu', 'Agustina', 'female', 2022],
];

arrayToObject(people);
// arrayToObject([]);
var people2 = [
  ['Tony', 'Stark', 'male', 1980],
  ['Pepper', 'Pots', 'female', 2023],
];
arrayToObject(people2);
