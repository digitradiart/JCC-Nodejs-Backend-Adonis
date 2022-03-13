/*2.
Mengelompokkan Angka (4 Poin)
Buatlah sebuah function yang menerima parameter berupa array berisi kumpulan angka. Function akan mengelompokkan angka-angka tersebut menjadi tiga kelompok:
- kelompok pertama: angkaganjil
- kelompok kedua: angka genap
- kelompok tiga: angka kelipatan tiga

Output dari function yaitu array multidimensi berisi array tiga kelompok angka diatas.


functionkelompokAngka(arr){

//Code disini

}

//Test Case

console.log(kelompokAngka([1,2,3,4,5,6,7]))

//Output:[[1,5,7],[2,4],[3,6]]

console.log(kelompokAngka([13,27,11,15]))

//Output:[[13,11],[],[27,15]]

console.log(kelompokAngka([]))

//output:[[],[],[]]

 */
function kelompokAngka(arr) {
  //Code disini

  var hasil = [];

  var ganjil = [];

  var genap = [];

  var kelipatanTiga = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      kelipatanTiga.push(arr[i]);
    } else if (arr[i] % 2 === 1 && arr[i] % 3 !== 0) {
      ganjil.push(arr[i]);
    } else if (arr[i] % 3 !== 0 && arr[i] % 2 === 0) {
      genap.push(arr[i]);
    }
  }

  hasil = [ganjil, genap, kelipatanTiga];

  return hasil;
}

console.log(kelompokAngka([1, 2, 3, 4, 5, 6, 7]));

//Output:[[1,5,7],[2,4],[3,6]]

console.log(kelompokAngka([13, 27, 11, 15]));

//Output:[[13,11],[],[27,15]]

console.log(kelompokAngka([]));

//output:[[],[],[]]
