"use strict";

var _fscallback = require("./lib/fscallback");

var _fspromise = require("./lib/fspromise");

var args = process.argv.slice(2);
var command = args[0];

switch (command) {
  case 'readData':
    (0, _fscallback.readData)();
    break;

  case 'login':
    var param = args[1];

    if (param !== undefined) {
      (0, _fspromise.login)(param);
    } else {
      console.log('inputan salah');
    }

    break;

  default:
    console.log('inputan salah');
    break;
}