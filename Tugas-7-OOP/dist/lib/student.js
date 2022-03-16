"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Student = /*#__PURE__*/function () {
  function Student(nama) {
    _classCallCheck(this, Student);

    this._name = nama;
    this._scores = [];
    this._finalScore = 0;
  }

  _createClass(Student, [{
    key: "finalscore",
    get: function get() {
      return this._finalScore;
    },
    set: function set(x) {
      this._finalScore = x;
    }
  }]);

  return Student;
}();

exports["default"] = Student;