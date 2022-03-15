/*
No. 3 Membuat Persegi Panjang #
Kamu diminta untuk menampilkan persegi dengan dimensi panjang x lebar dengan tanda pagar (#) dengan perulangan atau looping. Looping boleh menggunakan syntax apa pun (while, for, do while).

Perintah : $ node looping persegiPanjang <panjang> <lebar>

Contoh Perintah : $ node looping persegiPanjang 8 4 

Output:

########
########
########
######## 
*/

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
