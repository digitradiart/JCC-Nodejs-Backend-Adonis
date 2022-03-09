var loopingLib = require('./lib/loopingLib');

var whileLoop = loopingLib.whileLoop;
var forLoop = loopingLib.forLoop;
var persegiPanjang = loopingLib.persegiPanjang;
var Tangga = loopingLib.Tangga;
var papanCatur = loopingLib.papanCatur;

var args = process.argv;

switch (args[2]) {
  case 'whileLoop':
    whileLoop();
    break;
  case 'forLoop':
    forLoop();
    break;
  case 'persegiPanjang':
    var panjang = args[3];
    var lebar = args[4];
    console.log(persegiPanjang(panjang, lebar));
    break;
  case 'Tangga':
    var angka = args[3];
    console.log(Tangga(angka));
    break;
  case 'papanCatur':
    var petak = args[3];
    console.log(papanCatur(petak));
    break;
  default:
    console.log('pilih fungsi: whileLoop, forLoop, persegiPanjang, Tangga, atau papanCatur');
    break;
}
