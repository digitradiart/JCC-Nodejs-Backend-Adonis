var functionLib = require('./lib/functionLib');

var teriak = functionLib.teriak;
var kalikan = functionLib.kalikan;
var introduce = functionLib.introduce;

// console.log(teriak());
// console.log(kalikan(-2, 8));
// console.log(introduce('Agus', 30, 'Bandung', 'gaming'));

var args = process.argv;
// console.log(args);

// cek args[2]
switch (args[2]) {
  case 'teriak':
    console.log(teriak());
    break;
  case 'kalikan':
    var num1 = args[3];
    var num2 = args[4];
    console.log(kalikan(num1, num2));
    break;
  case 'introduce':
    var name = args[3];
    var age = args[4];
    var address = args[5];
    var hobby = args[6];
    console.log(introduce(name, age, address, hobby));
    break;
  default:
    console.log('Input yang Anda berikan salah. Pilih fungsi: teriak, kalikan, atau introduce');
    break;
}
