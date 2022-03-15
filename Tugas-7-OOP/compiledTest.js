"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Car = /*#__PURE__*/function () {
  function Car(brand, factory) {
    _classCallCheck(this, Car);

    this.brand = brand;
    this.factory = factory;
    this.sound = 'honk! honk!';
  }

  _createClass(Car, [{
    key: "drive",
    value: function drive() {
      console.log('enjoy your ride with ' + this.name);
    }
  }, {
    key: "brake",
    value: function brake() {
      console.log('the ' + this.name + ' car is about to stop, hang on!');
    }
  }, {
    key: "horn",
    value: function horn() {
      console.log(this.sound);
    }
  }, {
    key: "present",
    value: function present() {
      return 'I have a ' + this.brand;
    }
  }]);

  return Car;
}();

console.log(Car.name); // Instance dari class Car

var innovam = new Car('Innovam', 'Toyotwo');
console.log(innovam); // Output: Car { brand: 'Innovam', factory: 'Toyotwo', sound: 'honk! honk!' }

mycar = new Car('Ford');
console.log(mycar.present()); // INHERITANCE

var Car3 = /*#__PURE__*/function () {
  function Car3(brand) {
    _classCallCheck(this, Car3);

    this.carname = brand;
  }

  _createClass(Car3, [{
    key: "present",
    value: function present() {
      return 'I have a ' + this.carname;
    }
  }]);

  return Car3;
}();

var SuperCar = /*#__PURE__*/function (_Car) {
  _inherits(SuperCar, _Car);

  var _super = _createSuper(SuperCar);

  function SuperCar(brand, mod) {
    var _this;

    _classCallCheck(this, SuperCar);

    _this = _super.call(this, brand);
    _this.model = mod;
    return _this;
  }

  _createClass(SuperCar, [{
    key: "show",
    value: function show() {
      return this.present() + ', it is a ' + this.model;
    }
  }]);

  return SuperCar;
}(Car3);

mycar3 = new SuperCar('Ford', 'Mustang');
console.log(mycar3.show()); // GETTER SETTER

var Car4 = /*#__PURE__*/function () {
  function Car4(brand) {
    _classCallCheck(this, Car4);

    this._carname = brand;
  }

  _createClass(Car4, [{
    key: "carname",
    get: function get() {
      return this._carname;
    },
    set: function set(x) {
      this._carname = x;
    }
  }]);

  return Car4;
}();

mycar4 = new Car4('Ford');
mycar4.carname = 'Volvo'; // memanggil setter, mengubah Ford menjadi Volvo

console.log(mycar4.carname); // Volvo
// ASSOCIATION

var Teacher = /*#__PURE__*/function () {
  function Teacher(name) {
    _classCallCheck(this, Teacher);

    this._name = name;
    this._students = [];
  }

  _createClass(Teacher, [{
    key: "addStudent",
    value: function addStudent(student) {
      this._students.push(student);
    }
  }, {
    key: "students",
    get: function get() {
      return this._students;
    }
  }]);

  return Teacher;
}();

var Student = /*#__PURE__*/function () {
  function Student(name) {
    _classCallCheck(this, Student);

    this._name = name;
    this._teachers = [];
  }

  _createClass(Student, [{
    key: "chooseTeachers",
    value: function chooseTeachers(teacher) {
      this._teachers.push(teacher);
    }
  }, {
    key: "teachers",
    get: function get() {
      return this._teachers;
    }
  }]);

  return Student;
}(); // Masing masing class dibuat object nya sendiri-sendiri


var abduh = new Teacher('abduh');
var regi = new Student('Regi'); // suatu object dapat memiliki object class lainnya

abduh.addStudent(regi);
console.log(abduh.students);
regi.chooseTeachers(abduh);
console.log(regi.teachers);
