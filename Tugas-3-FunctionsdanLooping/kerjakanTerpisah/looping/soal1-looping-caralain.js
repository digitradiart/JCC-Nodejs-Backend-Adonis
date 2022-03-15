/*No. 1 Looping While
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'."

Perintah : $ node looping while 

Output:

LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become a backend developer
18 - I will become a backend developer                                                                              
16 - I will become a backend developer
14 - I will become a backend developer
12 - I will become a backend developer
10 - I will become a backend developer
8 - I will become a backend developer
6 - I will become a backend developer
4 - I will become a backend developer
2 - I will become a backend developer 
*/

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

/// menggunakan i yang sama
