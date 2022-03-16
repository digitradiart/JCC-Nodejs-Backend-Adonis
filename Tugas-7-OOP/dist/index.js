"use strict";

var _bootcamp = _interopRequireDefault(require("./lib/bootcamp"));

var _student = _interopRequireDefault(require("./lib/student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log('===========RELEASE 0==========');
var jcc = new _bootcamp["default"]('jabarcodingcamp');
jcc.createClass('Laravel', 'beginner', 'abduh');
jcc.createClass('React', 'beginner', 'abdul');
console.log(jcc.classes);
console.log('\n===========RELEASE 1==========');
var names = ['regi', 'ahmad', 'bondra', 'iqbal', 'putri', 'rezky'];
names.map(function (nama, index) {
  var newStud = new _student["default"](nama);
  var kelas = jcc.classes[index % 2].name;
  jcc.register(kelas, newStud);
}); // menampilkan data kelas dan student nya

jcc.classes.forEach(function (kelas) {
  console.log(kelas);
});
console.log('\n===========RELEASE 2 dan 3==========');
jcc.runBatch();