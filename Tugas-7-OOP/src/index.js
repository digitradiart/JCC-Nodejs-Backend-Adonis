import Bootcamp from './lib/bootcamp';
import Student from './lib/student';

console.log('===========RELEASE 0==========');
const jcc = new Bootcamp('jabarcodingcamp');
jcc.createClass('Laravel', 'beginner', 'abduh');
jcc.createClass('React', 'beginner', 'abdul');
console.log(jcc.classes);

console.log('\n===========RELEASE 1==========');
let names = ['regi', 'ahmad', 'bondra', 'iqbal', 'putri', 'rezky'];
names.map((nama, index) => {
  let newStud = new Student(nama);
  let kelas = jcc.classes[index % 2].name;
  jcc.register(kelas, newStud);
});
// menampilkan data kelas dan student nya
jcc.classes.forEach((kelas) => {
  console.log(kelas);
});

console.log('\n===========RELEASE 2 dan 3==========');
jcc.runBatch();
