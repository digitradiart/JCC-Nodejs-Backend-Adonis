/*1.
Buatlah sebuah function yang akan mengupdate data dari sebuah object. Function tersebut menerima parameter berupa object berisi update data terbaru.

CATATAN: WAJIB menulis dengan ES6.
Hint: spread operator, arrow function, enhanced object literals, let, const.

Ubah Menjadi ES6!

var data = {
name: 'Bondra',
nilai:70,
kelas:'Adonis',
isLogin:true
}

function updateData(update) {
//
}


// TEST CASES
console.log(updateData({ isLogin: false }))
// Output : { name: 'Bondra', nilai: 70, kelas: 'Adonis', isLogin: false }

console.log(updateData({nilai: 65, kelas: 'Laravel'})
// Output: { name: 'Bondra', nilai: 65, kelas: 'Laravel', isLogin: true }


Bobot soal: 20 */

const data = {
  name: 'Bondra',
  nilai: 70,
  kelas: 'Adonis',
  isLogin: true,
};

const updateData = (update) => {
  let { name, nilai, kelas, isLogin } = { ...update };
  name === undefined ? (data.name = data.name) : (data.name = nilai);
  nilai === undefined ? (data.nilai = data.nilai) : (data.nilai = nilai);
  kelas === undefined ? (data.kelas = data.kelas) : (data.kelas = kelas);
  isLogin === undefined ? (data.isLogin = data.isLogin) : (data.isLogin = isLogin);

  return data;
};

console.log(data);
console.log(updateData({ isLogin: false }));
console.log(updateData({ nilai: 65, kelas: 'Laravel' }));
console.log(data);
