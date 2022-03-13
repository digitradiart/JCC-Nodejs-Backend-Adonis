/*3.
Graduate (8 poin)
Buatlah sebuah function yang menerima parameter array of object berisi data siswa bootcamp dan nilai akhirnya. function akan memproses parameter tersebut dan mengelompokkan siswa berdasarkan kelasnya masing-masing. Selain mengelompokkan, function juga memproses nilai siswa memberikan predikat kelulusan yaitu "participated" bagi siswa dengan nilai < 60, "completed" untuk nilai di antara 60 dan 85, dan "mastered" untuk siswa dengan nilai di atas 85.

function graduate(arr) {

// code di sini

}

// TEST CASE
// Contoh Input

var arr = [

{name:"Ahmad",score:80, class: "Laravel"},

{name:"Regi",score:86, class: "Vuejs"},

{name:"Robert",score:59, class: "Laravel},

{name:"Bondra",score:81, class: "Reactjs" }

]


console.log(graduate(arr))

//Output

{

Laravel:[{name:"Ahmad",score:80, grade: "completed"}, { name: "Robert", score: 59, grade: "participated"}],

Vuejs:[

{name:"Regi",score:86, grade: "mastered"}

],

Reactjs:[{name:"Bondra",score:81, grade: "completed"}]

}

 */

function graduate(arr) {
  var hasil = {};
  var laravel1 = [];
  var vuejs1 = [];
  var reactjs1 = [];

  function pushArr(input, kelas) {
    kelas.push(input.name);
    kelas.push(input.score);
    if (input.score < 60) {
      kelas.push('participated');
    } else if (input.score >= 60 && input.score <= 85) {
      kelas.push('completed');
    } else if (input.score > 85) {
      kelas.push('mastered');
    }
    tampung.name = kelas[0];
    tampung.score = kelas[1];
    tampung.grade = kelas[2];
  }

  for (var i = 0; i < arr.length; i++) {
    var namaKelas = arr[i].class;
    var tampung = {};
    switch (arr[i].class.toLowerCase()) {
      case 'vuejs':
        var vuejs = [];
        pushArr(arr[i], vuejs);
        vuejs1.push(tampung);
        hasil[namaKelas] = vuejs1;
        break;
      case 'reactjs':
        var reactjs = [];
        pushArr(arr[i], reactjs);
        reactjs1.push(tampung);
        hasil[namaKelas] = reactjs1;
        break;
      case 'laravel':
        var laravel = [];
        pushArr(arr[i], laravel);
        laravel1.push(tampung);
        hasil[namaKelas] = laravel1;
        break;
    }
  }
  return hasil;
}

//test case
var arr = [
  { name: 'Ahmad', score: 80, class: 'Laravel' },
  { name: 'Regi', score: 86, class: 'Vuejs' },
  { name: 'Robert', score: 59, class: 'Laravel' },
  { name: 'Bondra', score: 81, class: 'Reactjs' },
];

console.log(graduate(arr));
