/* 
Soal No.2 Mengurai kalimat (Akses karakter dalam string),
Terdapat satu kalimat seperti berikut:
var sentence = "I am going to be React Native Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord; // lakukan sendiri 
var fourthWord; // lakukan sendiri 
var fifthWord; // lakukan sendiri 
var sixthWord; // lakukan sendiri 
var seventhWord; // lakukan sendiri 
var eighthWord; // lakukan sendiri 

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + secondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)
Buat menjadi Output berikut:
First word: I 
Second word: am 
Third word: going 
Fourth word: to 
Fifth word: be 
Sixth word: React 
Seventh word: Native 
Eighth word: Developer
*/

var sentence = 'I am going to be React Native Developer';

var firstWord = sentence.substr(0, 1);
var secondWord = sentence.substr(2, 2);
var thirdWord = sentence.substr(5, 5);
var fourthWord = sentence.substr(11, 2);
var fifthWord = sentence.substr(14, 2);
var sixthWord = sentence.substr(17, 5);
var seventhWord = sentence.substr(23, 6);
var eighthWord = sentence.substr(30, 9);

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('Sixth Word: ' + sixthWord);
console.log('Seventh Word: ' + seventhWord);
console.log('Eighth Word: ' + eighthWord);
