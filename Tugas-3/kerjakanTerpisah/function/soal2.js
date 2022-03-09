/*Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim melalui process.argv


    Contoh Perintah & Output
    $ node functions kalikan 4 12
    48 // Output nya 4 x 12 = 48

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

*/
/// menggunakan return function
function kalikan(angka1, angka2) {
  return angka1 * angka2;
}
console.log(kalikan(-2, 8));

/// cara lain
function kalikan2(num1, num2) {
  let hasilKali = num1 * num2;
  console.log(`Hasil kali= ${hasilKali}`);
}
kalikan2(-2, 8);
