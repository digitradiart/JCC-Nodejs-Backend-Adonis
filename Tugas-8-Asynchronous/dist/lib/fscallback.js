"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  _fs["default"].readFile('data.json', function (err, data) {
    if (err) console.log(err);
    console.log(JSON.parse(data));
  });
};

exports["default"] = _default;