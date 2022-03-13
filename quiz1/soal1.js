/*
1.
Tandai A (4 poin)
Buatlah sebuah function yang menerima parameter string. function tersebut akan mencari karakter "a" dan menggantinya dengan huruf "x" lalu mereturn string yang sudah diubah tersebut.
CATATAN: tidak boleh gunakan regex. tidak boleh gunakan function built-in .replace

function tandaiA(str) {

// code di sini

}

// Tes Cases
console.log(tandaiA("abrakadabra")) // xbrxkxdxbrx
console.log(tandaiA("garuda")) // gxrudx
console.log(tandaiA("kucing")) // kucing */

function tandaiA(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === 'a') {
      process.stdout.write('x');
    } else {
      process.stdout.write(text[i]);
    }
  }
  console.log('\n');
}

tandaiA('ayuaaa');
tandaiA('abrakadabra'); // xbrxkxdxbrx
tandaiA('garuda'); // gxrudx
tandaiA('kucing'); // kucing */
