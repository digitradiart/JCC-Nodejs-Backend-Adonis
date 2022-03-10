const { dataInput } = require('./lib/arrayLib');
var funcLib = require('./lib/arrayLib');

var range = funcLib.range;
var rangeWithStep = funcLib.rangeWithStep;
var sum = funcLib.sum;
var dataHandling = funcLib.dataHandling;
var balikKata = funcLib.balikKata;

var args = process.argv;

switch (args[2]) {
  case 'range':
    console.log(range(args[3], args[4]));
    break;
  case 'rangeWithStep':
    console.log(rangeWithStep(args[3], args[4], args[5]));
    break;
  case 'sum':
    console.log(sum(args[3], args[4], args[5]));
    break;
  case 'dataHandling':
    dataHandling(dataInput);
    break;
  case 'balikKata':
    console.log(balikKata(args[3]));
    break;
  default:
    console.log('Inputan Salah, pilihlah: range, rangeWithStep, sum, atau balikKata');
    break;
}
