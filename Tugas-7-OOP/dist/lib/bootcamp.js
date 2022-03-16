"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _kelas = _interopRequireDefault(require("./kelas"));

var _student = _interopRequireDefault(require("./student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Bootcamp = /*#__PURE__*/function () {
  function Bootcamp(name) {
    _classCallCheck(this, Bootcamp);

    this._name = name;
    this._kelas = [];
  }

  _createClass(Bootcamp, [{
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "classes",
    get: function get() {
      return this._kelas;
    }
  }, {
    key: "createClass",
    value: function createClass(kelas, level, instructor) {
      var kelas = new _kelas["default"](kelas, level, instructor);

      this._kelas.push(kelas);
    }
  }, {
    key: "register",
    value: function register(kelas, newStud) {
      for (var i = 0; i < this._kelas.length; i++) {
        if (kelas === this._kelas[i]._name) {
          this._kelas[i]._students.push(newStud);
        }
      }
    }
  }, {
    key: "runBatch",
    value: function runBatch() {
      var jumlahKelas = this._kelas.length;

      for (var i = 0; i < jumlahKelas; i++) {
        var kelas = this._kelas[i];
        var namaKelas = this._kelas[i]._name;

        for (var j = 0; j < kelas._students.length; j++) {
          for (var k = 0; k < 4; k++) {
            var nilai = Math.floor(Math.random() * 100 + 1);

            kelas._students[j]._scores.push(nilai);
          }

          var finalScores = 0;

          for (var _k = 0; _k < kelas._students[j]._scores.length; _k++) {
            finalScores = finalScores + kelas._students[j]._scores[_k];
          }

          kelas._students[j]._finalScore = finalScores / kelas._students[j]._scores.length;
        }

        console.log("graduated from ".concat(namaKelas, ": "), _kelas["default"].graduate(kelas));
      }
    }
  }]);

  return Bootcamp;
}();

exports["default"] = Bootcamp;