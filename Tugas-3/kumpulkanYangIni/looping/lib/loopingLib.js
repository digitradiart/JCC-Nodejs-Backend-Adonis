// SOAL 1
console.log('LOOPING PERTAMA');
var i = 0;
while (i < 20) {
  i += 2;
  console.log(`${i} - I will become a backend developer`);
}

console.log('LOOPING KEDUA');
while (i > 0) {
  console.log(`${i} - I will become a backend developer`);
  i -= 2;
}

// SOAL 2
for (let i = 0; i < 20; ) {
  i++;
  if (i % 3 == 0 && i % 2 == 1) {
    console.log(`${i} - I Love Coding`);
  } else if (i % 2 == 0) {
    console.log(`${i} - Berkualitas`);
  } else {
    console.log(`${i} - Santai`);
  }
}

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
console.log(persegiPanjang(8, 4));

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

console.log(Tangga(7));

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

console.log(papanCatur(8));
