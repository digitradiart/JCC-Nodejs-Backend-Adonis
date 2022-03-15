/*
If-else
Petunjuk : Kita akan memasuki dunia game werewolf. Pada saat akan bermain kamu diminta memasukkan nama dan peran . Untuk memulai game pemain harus memasukkan variable nama dan peran. Jika pemain tidak memasukkan nama maka game akan mengeluarkan warning "Nama harus diisi!". Jika pemain memasukkan nama tapi tidak memasukkan peran maka game akan mengeluarkan warning "Pilih Peranmu untuk memulai game". Terdapat tiga peran yaitu penyihir, guard, dan werewolf. Tugas kamu adalah membuat program untuk mengecek input dari pemain dan hasil response dari game sesuai input yang dikirimkan.

Petunjuk:

Nama dan peran diisi manual dan bisa diisi apa saja
Nama tidak perlu dicek persis sesuai dengan input/output
Buat kondisi if-else untuk masing-masing peran
Input:

var nama = "John"
var peran = ""
Output:

// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"
 
//Output untuk Input nama = 'John' dan peran = ''
"Halo John, Pilih peranmu untuk memulai game!"
 
//Output untuk Input nama = 'Jane' dan peran 'Penyihir'
"Selamat datang di Dunia Werewolf, Jane"
"Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!"
 
//Output untuk Input nama = 'Jenita' dan peran 'Guard'
"Selamat datang di Dunia Werewolf, Jenita"
"Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf."
 
//Output untuk Input nama = 'Junaedi' dan peran 'Werewolf'
"Selamat datang di Dunia Werewolf, Junaedi"
"Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!"  
*/
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question('Nama: ', (nama) => {
//   //   console.log(`Hey there ${nama}!`);
//   readline.close();
// });

var nama = 'Ayu';
var peran = 'siapa';

if (nama == '' && peran == '') {
  console.log('Nama harus diisi!');
} else if (nama != '' && peran != '') {
  if (peran == 'Penyihir' || peran == 'penyihir') {
    console.log(`
          "Selamat datang di Dunia Penyihir, ${nama}"
          "Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!"
          `);
  } else if (peran == 'Guard' || peran == 'guard') {
    console.log(`
              "Selamat datang di Dunia Guard, ${nama}"
              "Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf."
              `);
  } else if (peran == 'Werewolf' || peran == 'werewolf') {
    console.log(`
                "Selamat datang di Dunia Werewolf, ${nama}"
                "Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!"
                `);
  } else {
    console.log('Silakan pilih: Penyihir, Guard, atau Werewolf');
  }
} else {
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
}
