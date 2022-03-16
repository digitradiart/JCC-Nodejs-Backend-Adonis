"use strict";

var _bootcamp = _interopRequireDefault(require("./lib/bootcamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var jcc = new _bootcamp["default"]('jabarcodingcamp');
jcc.createClass('Laravel', 'beginner', 'abduh');
jcc.createClass('React', 'beginner', 'abdul');
console.log(jcc.classes);