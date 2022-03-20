/*
2.
Tulislah class javascript yang berisi method-method untuk mengolah tipe data string di antaranya : pengecekkan palindrome*dan mengubah huruf kapital.

*Palindrome adalah kata yang jika dibalik akan menghasilkan kata yang persis sama.

class OlahString {

// code kamu di sini

}

Contoh Penggunaan class nya seperti berikut

OlahString.palindrome('kakak') // Output: true

OlahString.palindrome('makan') // Output: false

OlahString.palindrome('malam') // Output: true

OlahString.ubahKapital('asep') // Output : Asep

OlahString.ubahKapital('abduh') // Output: Abduh


Bobot soal: 20 */

class OlahString {
  palindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
  }

  ubahKapital(str) {
    let newStr = str.split('');
    newStr[0] = newStr[0].toUpperCase();
    return newStr.join('');
  }
}

const olahstring = new OlahString('');

console.log(olahstring.palindrome('kakak'));
console.log(olahstring.palindrome('makan'));
console.log(olahstring.palindrome('malam'));
console.log(olahstring.ubahKapital('asep'));
console.log(olahstring.ubahKapital('abduh'));
