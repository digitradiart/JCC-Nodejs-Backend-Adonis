/*
No. 5 Membuat Papan Catur
Buatlah suatu looping untuk menghasilkan sebuah papan catur dengan ukuran  sisi yang ditentukan oleh parameter. Papan berwarna hitam memakai tanda pagar (#) sedangkan papan putih menggunakan spasi. Looping boleh menggunakan syntax apa pun (while, for, do while).

Perintah : $ node looping catur <sisi>

Contoh Perintah : $ node looping catur 8

Output:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #  
*/

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
