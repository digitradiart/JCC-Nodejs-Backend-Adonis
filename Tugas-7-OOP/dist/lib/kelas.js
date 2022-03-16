"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _student = _interopRequireDefault(require("./student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Kelas = /*#__PURE__*/function () {
  function Kelas(name, level, instructor) {
    _classCallCheck(this, Kelas);

    this._name = name;
    this._students = [];
    this._level = level;
    this._instructor = instructor;
  }

  _createClass(Kelas, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(x) {
      this._name = x;
    }
  }, {
    key: "level",
    get: function get() {
      return this._level;
    },
    set: function set(x) {
      this._level = x;
    }
  }, {
    key: "instructor",
    get: function get() {
      return this._instructor;
    },
    set: function set(x) {
      this._instructor = x;
    }
  }], [{
    key: "graduate",
    value: function graduate(student) {
      var graduate = {
        participant: [],
        completed: [],
        mastered: []
      };

      for (var i = 0; i < student._students.length; i++) {
        var finalScore = student._students[i]._finalScore;

        if (finalScore < 60) {
          graduate.participant.push(student._students[i]);
        }

        if (finalScore >= 60 && finalScore <= 85) {
          graduate.completed.push(student._students[i]);
        }

        if (finalScore > 85) {
          graduate.mastered.push(student._students[i]);
        }
      }

      return graduate;
    }
  }]);

  return Kelas;
}();

exports["default"] = Kelas;