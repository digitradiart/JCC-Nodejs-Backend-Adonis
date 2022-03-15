/*No. 2 Looping menggunakan for
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk memenuhi syarat tertentu yaitu:

SYARAT:
A. Jika angka ganjil maka tampilkan Santai
B. Jika angka genap maka tampilkan Berkualitas
C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.

Perintah : $ node looping for 

OUTPUT 
1 - Santai
2 - Berkualitas
3 - I Love Coding 
4 - Berkualitas
5 - Santai
6 - Berkualitas
7 - Santai
8 - Berkualitas
9 - I Love Coding
10 - Berkualitas
11 - Santai
12 - Berkualitas
13 - Santai
14 - Berkualitas
15 - I Love Coding
16 - Berkualitas
17 - Santai
18 - Berkualitas
19 - Santai
20 - Berkualitas */

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
