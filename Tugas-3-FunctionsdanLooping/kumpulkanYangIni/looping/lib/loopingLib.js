// SOAL 1
function whileLoop() {
  var number = 20;
  console.log('LOOPING PERTAMA');
  let i = 0;
  while (i < number) {
    i += 2;
    console.log(`${i} - I will become a backend developer`);
  }

  console.log('LOOPING KEDUA');
  let j = number;
  while (j > 0) {
    console.log(`${j} - I will become a backend developer`);
    j -= 2;
  }
}
// console.log(whileLoop());

// SOAL 2
function forLoop() {
  let number = 20;
  for (let i = 0; i < number; ) {
    i++;
    if (i % 3 == 0 && i % 2 == 1) {
      console.log(`${i} - I Love Coding`);
    } else if (i % 2 == 0) {
      console.log(`${i} - Berkualitas`);
    } else {
      console.log(`${i} - Santai`);
    }
  }
}
// console.log(forLoop());

// SOAL3
function persegiPanjang(panjang, lebar) {
  var tampung = '';
  for (let i = 0; i < lebar; i++) {
    for (let j = 0; j < panjang; j++) {
      tampung += '#';
    }
    tampung += '\n';
  }
  return tampung;
}
// console.log(persegiPanjang(8, 4));

// SOAL 4
function Tangga(tingkat) {
  var tampung = '';
  for (let i = 0; i <= tingkat; i++) {
    for (let j = 0; j < i; j++) {
      tampung += '#';
    }
    tampung += '\n';
  }
  return tampung;
}
// console.log(Tangga(7));

// SOAL5
function papanCatur(petak) {
  var tampung = '';
  for (let baris = 0; baris < petak; baris++) {
    if (baris % 2 == 0) {
      for (let kolom = 0; kolom < petak; kolom++) {
        if (kolom % 2 == 0) {
          tampung += ' ';
        } else {
          tampung += '#';
        }
      }
    } else {
      for (let kolom = 0; kolom < petak; kolom++) {
        if (kolom % 2 == 1) {
          tampung += ' ';
        } else {
          tampung += '#';
        }
      }
    }
    tampung += '\n';
  }
  return tampung;
}
// console.log(papanCatur(8));

// export module
module.exports = {
  whileLoop: whileLoop,
  forLoop: forLoop,
  persegiPanjang: persegiPanjang,
  Tangga: Tangga,
  papanCatur: papanCatur,
};
