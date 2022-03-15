class Car {
  constructor(brand, factory) {
    this.brand = brand;
    this.factory = factory;
    this.sound = 'honk! honk!';
  }

  drive() {
    console.log('enjoy your ride with ' + this.name);
  }
  brake() {
    console.log('the ' + this.name + ' car is about to stop, hang on!');
  }
  horn() {
    console.log(this.sound);
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

console.log(Car.name);

// Instance dari class Car
var innovam = new Car('Innovam', 'Toyotwo');
console.log(innovam);
// Output: Car { brand: 'Innovam', factory: 'Toyotwo', sound: 'honk! honk!' }

mycar = new Car('Ford');
console.log(mycar.present());

// INHERITANCE
class Car3 {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class SuperCar extends Car3 {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar3 = new SuperCar('Ford', 'Mustang');
console.log(mycar3.show());

// GETTER SETTER

class Car4 {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

mycar4 = new Car4('Ford');
mycar4.carname = 'Volvo'; // memanggil setter, mengubah Ford menjadi Volvo
console.log(mycar4.carname); // Volvo

// ASSOCIATION
/*Association
Assosiasi adalah sebuah relasi dimana semua object memiliki lifecycle nya sendiri dan tidak ada yang bertindak sebagai parent/owner atas class lainnya. Contohnya class Teacher dan class Student. Teacher dapat memiliki banyak Student. Begitu pun Student dapat memiliki banyak Teacher yang diikuti. Kedua class dapat membuat Object nya masing-masing tanpa tergantung oleh object lain. Ketika object Teacher dihapus maka object Student tetap ada.
 */
class Teacher {
  constructor(name) {
    this._name = name;

    this._students = [];
  }

  addStudent(student) {
    this._students.push(student);
  }

  get students() {
    return this._students;
  }
}

class Student {
  constructor(name) {
    this._name = name;

    this._teachers = [];
  }

  chooseTeachers(teacher) {
    this._teachers.push(teacher);
  }

  get teachers() {
    return this._teachers;
  }
}

// Masing masing class dibuat object nya sendiri-sendiri

const abduh = new Teacher('abduh');

const regi = new Student('Regi');

// suatu object dapat memiliki object class lainnya

abduh.addStudent(regi);

console.log(abduh.students);

regi.chooseTeachers(abduh);

console.log(regi.teachers);

/*Aggregation
Aggregation adalah relasi yang lebih khusus dari Association dimana suatu class dapat berdiri sendiri tapi terdapat class child dan class parent. class yang menjadi child  tidak dapat memiliki class parent sedangkan class Parent dapat memiliki class child. Kedua class dapat membuat object nya masing-masing tanpa tergantung oleh object lain. Ketika object Parent dihapus maka object child tetap ada (tidak ikut terhapus).

Contohnya adalah Teacher dan Department. Suatu Department dapat memiliki banyak Teacher. Tapi Teacher tidak dapat memiliki Department. Ketika object Department dihapus/tidak ada maka object Teacher tetap ada.  */

class Teacher2 {
  constructor(name) {
    this._name = name;

    this._students = [];
  }

  addStudent(student) {
    this._students.push(student);
  }

  get students() {
    return this._students;
  }
}

class Department {
  constructor(name) {
    this._name = name;

    this._teachers = [];
  }

  assignTeacher(teacher) {
    this._teachers.push(teacher);
  }

  get teachers() {
    return this._teachers;
  }
}

// Object Creation
const abduh2 = new Teacher2('abduh');
const fmipa = new Department('FMIPA');

fmipa.assignTeacher(abduh2);

console.log(fmipa.teachers);

/**Composition
Composition adalah relasi antar dua object dimana lifecycle object child bergantung dengan object parent nya. Ciri dari relasi ini yaitu object child diinstance di dalam class parent nya. Berbeda dengan aggregation, di dalam composition ketika object parent nya tidak ada / dihapus maka object child akan ikut terhapus. 

Contohnya adalah University dan Department. suatu Department hanya akan eksis di suatu University tertentu. Ketika University nya dihapus/tidak ada maka Department akan ikut terhapus. 

 */
class Department2 {
  constructor(name) {
    this._name = name;

    this._teachers = [];
  }

  assignTeacher(teacher) {
    this._teachers.push(teacher);
  }

  get teachers() {
    return this._teachers;
  }
}

class University {
  constructor(name) {
    this._name = name;

    this._departments = [];
  }

  addDepartment(department_name) {
    var department = new Department(department_name);

    this._departments.push(department);
  }

  get departments() {
    return this._departments;
  }
}
const itebe = new University('itebeh');

itebe.addDepartment('fmipa');

console.log(itebe.departments);
