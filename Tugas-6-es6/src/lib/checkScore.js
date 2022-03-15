/*Soal 3 Check Score
Buatlah sebuah function yang menerima satu parameter berupa string. string tersebut berisi data-data yang dipisahkan dengan tanda koma(,) dan titik dua (:). Function tersebut mengolah data parameter menjadi sebuah object berdasarkan data yang dikirim dari parameter.

Hint: Destructuring, Enhanced Objects, arrow functions

Perintah

node dist checkScore <string-data>

Contoh Perintah

node dist checkScore name:Ahmad,class:Adonis,score:89

Output

{ name: "Ahmad", class: "Adonis", score: 89 }
 */
export const checkScore = (str) => {
  const nama = str.split(',')[0].split(':')[1];
  const kelas = str.split(',')[1].split(':')[1];
  const skor = str.split(',')[2].split(':')[1];

  return { name: nama, class: kelas, score: skor };
};
