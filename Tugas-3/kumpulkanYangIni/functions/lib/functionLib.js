//SOAL 1
function teriak() {
  return 'Halo JCC!';
}
// teriak();

// SOAL 2
function kalikan(angka1, angka2) {
  return angka1 * angka2;
}
// console.log(kalikan(-2, 8));

// SOAL 3

function introduce(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address} dan saya punya hobby yaitu ${hobby}`;
}

// var perkenalan = introduce('Agus', 30, 'Bandung', 'gaming'); //ganti parameter ini
// console.log(perkenalan);

// export module
module.exports = {
  teriak: teriak,
  kalikan: kalikan,
  introduce: introduce,
};
