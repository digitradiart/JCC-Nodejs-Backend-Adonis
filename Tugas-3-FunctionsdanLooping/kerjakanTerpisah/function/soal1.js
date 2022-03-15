/*
No. 1
Tulislah sebuah function dengan nama teriak() yang mengembalikan nilai "Halo JCC!" yang kemudian dapat ditampilkan di console.


    Contoh Perintah & output
    $ node functions teriak


console.log(teriak()); // "Halo JCC!"  

*/

/// cara pertama, fungsi tanpa paramater
function teriak() {
  console.log('Halo JCC!');
}
teriak();

/// cara lain menggunakan return
function teriak2() {
  return 'Halo JCC!';
}
console.log(teriak2());
