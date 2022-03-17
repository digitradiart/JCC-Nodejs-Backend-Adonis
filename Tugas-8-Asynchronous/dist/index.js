"use strict";

var _fscallback = _interopRequireDefault(require("./lib/fscallback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var args = process.argv.slice(2);
var command = args[0];

switch (command) {
  case 'readData':
    (0, _fscallback["default"])();
    break;

  default:
    break;
}