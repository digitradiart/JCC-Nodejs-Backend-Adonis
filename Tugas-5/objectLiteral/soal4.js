/*Soal No 4. Nilai Tertinggi
Problem

Buatlah sebuah function nilaiTertinggi yang menerima input berupa array of object berisi data-data peserta Jabar Coding Camp beserta nilai nya. function akan mengembalikan sebuah object seperti berikut: 

   {

    <nama-kelas> : { name: <nama-siswa>, score: <nilai-siswa> }, 

    <nama-kelas> : { name: <nama-siswa>, score : <nilai-siswa> }

   }
   // TEST CASE
console.log(nilaiTertinggi([
  {
    name: 'Asep',
    score: 90,
    class: 'adonis'
  },
  {
    name: 'Ahmad',
    score: 85,
    class: 'vuejs'
  },
  {
    name: 'Regi',
    score: 74,
    class: 'adonis'
  },
  {
    name: 'Afrida',
    score: 78,
    class: 'reactjs'
  }
]));

// OUTPUT:

// {
//   adonis: { name: 'Asep', score: 90 },
//   vuejs: { name: 'Ahmad', score: 85 },
//   reactjs: { name: 'Afrida', score: 78}
// }
   */
function nilaiTertinggi(siswa) {
  var hasil = {};
  var adonis = [];
  var vuejs = [];
  var reactjs = [];
  var laravel = [];

  function pushHasil(kelas) {
    var namaKelas = kelas[0].class;
    if (kelas.length !== 1) {
      for (var j = 0; j < kelas.length; j++) {
        if (kelas[j].score < kelas[j + 1].score) {
          kelas = kelas[j + 1];
        } else {
          kelas = kelas[j];
        }
      }
      hasil[namaKelas] = {};
      hasil[namaKelas].name = kelas.name;
      hasil[namaKelas].score = kelas.score;
    } else {
      hasil[namaKelas] = {};
      hasil[namaKelas].name = kelas[0].name;
      hasil[namaKelas].score = kelas[0].score;
    }
  }
  for (var i = 0; i < siswa.length; i++) {
    switch (siswa[i].class) {
      case 'adonis':
        adonis.push(siswa[i]);
        break;
      case 'vuejs':
        vuejs.push(siswa[i]);
        break;
      case 'reactjs':
        reactjs.push(siswa[i]);
        break;
      case 'laravel':
        laravel.push(siswa[i]);
        break;
    }
  }
  for (var i = 0; i < siswa.length; i++) {
    switch (siswa[i].class) {
      case 'adonis':
        pushHasil(adonis);
        break;
      case 'vuejs':
        pushHasil(vuejs);
        break;
      case 'reactjs':
        pushHasil(reactjs);
        break;
      case 'laravel':
        pushHasil(laravel);
        break;
    }
  }
  return hasil;
}

console.log(
  nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis',
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs',
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis',
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs',
    },
  ])
);

console.log(
  nilaiTertinggi([
    {
      name: 'Bondra',
      score: 100,
      class: 'adonis',
    },
    {
      name: 'Putri',
      score: 76,
      class: 'laravel',
    },
    {
      name: 'Iqbal',
      score: 92,
      class: 'adonis',
    },
    {
      name: 'Tyar',
      score: 71,
      class: 'laravel',
    },
    {
      name: 'Hilmy',
      score: 80,
      class: 'vuejs',
    },
  ])
);
