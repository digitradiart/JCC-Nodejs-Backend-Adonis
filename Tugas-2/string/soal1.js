/*
Soal No. 1 (Membuat kalimat),
Terdapat kumpulan variable dengan data string sebagai berikut
var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';
Buatlah agar kata-kata di atas menjadi satu kalimat . Output:
JavaScript is awesome and I love it! 
*/

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

// var sentence = word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh;
var sentence = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`;
console.log(sentence);
