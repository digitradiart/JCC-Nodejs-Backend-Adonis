/*No. 4 Membuat Tangga
Kali ini kamu diminta untuk menampilkan sebuah segitiga sama sisi dengan tanda pagar (#) dengan panjang sisi sesuai parameter yang diberikan . Looping boleh menggunakan syntax apa pun (while, for, do while).

Perintah : $ node looping tangga <sisi>

Contoh Perintah : $ node looping tangga 7

Output:

#
##
###
####
#####
######
#######
*/

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
