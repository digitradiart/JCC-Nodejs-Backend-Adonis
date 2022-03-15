/*
Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String
var sentence3 = 'wow JavaScript is so cool'; 

var exampleFirstWord3 = sentence3.substring(0, 3); 
var secondWord3; // do your own! 
var thirdWord3; // do your own! 
var fourthWord3; // do your own! 
var fifthWord3; // do your own! 

var firstWordLength = exampleFirstWord3.length  
// lanjutkan buat variable lagi di bawah ini 
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3); 
console.log('Third Word: ' + thirdWord3); 
console.log('Fourth Word: ' + fourthWord3); 
console.log('Fifth Word: ' + fifthWord3); 
Output:
First Word: wow, with length: 3 
Second Word: JavaScript, with length: 10 
Third Word: is, with length: 2 
Fourth Word: so, with length: 2 
Fifth Word: cool, with length: 4 
*/

var sentence3 = 'wow JavaScript is so cool';

var firstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var firstWordLength = firstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

console.log('First Word: ' + firstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);
