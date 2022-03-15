/*Soal 1 Function Sapa
buatlah sebuah function yang menerima satu parameter berupa string nama. function tersebut me-return kalimat sapaan berdasarkan parameter nama yang diberikan.

Hint: gunakan arrow function, template literals

Perintah :

node dist sapa <nama>

Contoh Perintah:

node dist sapa Abduh

Output

"halo selamat pagi, Abduh" */

export const sapa = (nama) => `Halo! Selamat pagi, ${nama}.`;
