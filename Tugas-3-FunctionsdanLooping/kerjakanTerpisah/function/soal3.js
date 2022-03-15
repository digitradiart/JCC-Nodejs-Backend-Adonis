/*
Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: "Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!"

/* 
    Contoh Perintah & Output 
    $ node function kenalan Agus 30 Bandung Gaming

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Bandung dan saya punya hobby yaitu Gaming!"  */

function introduce(name, age, address, hobby) {
  return `Nama saya ${name}, umut saya ${age} tahun, alamat saya di ${address} dan saya punya hobby yaitu ${hobby}`;
}

var perkenalan = introduce('Agus', 30, 'Bandung', 'gaming'); //ganti parameter ini
console.log(perkenalan);
