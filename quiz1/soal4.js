/*
4.
Menghitung Vokal (4 poin)
Buatlah sebuah function yang menerima parameter berupa string. function akan menghitung berapa jumlah huruf vokal "a","i","u","e","o" dan mengembalikan nilai (return) sebuah number. Function tersebut harus case insensitive (tidak mempedulikan besar kecil).

function hitungVokal(str){

//code disini

}

// Test Cases

console.log(hitungVokal("Adonis"))// Output:3

console.log(hitungVokal("Error"))//Output:2

console.log(hitungVokal("Eureka"))//Output:4

console.log(hitungVokal("Rsch")) // Output: 0


Bobot soal: 4 */

function hitungVokal(text) {
  let hitung = 0;

  for (let i = 0; i < text.length; i++) {
    // console.log(text[i]);
    if (text[i].toLowerCase() === 'a' || text[i].toLowerCase() === 'e' || text[i].toLowerCase() === 'i' || text[i].toLowerCase() === 'o' || text[i].toLowerCase() === 'u') {
      hitung += 1;
    }
  }
  return `hitung: ${hitung}`;
}
console.log(hitungVokal('ayuaaa')); // output: 5

console.log(hitungVokal('Adonis')); // Output:3

console.log(hitungVokal('Error')); //Output:2

console.log(hitungVokal('Eureka')); //Output:4

console.log(hitungVokal('Rsch')); // Output: 0

console.log(hitungVokal('aeioubcdAEIOU')); // Output: 10
