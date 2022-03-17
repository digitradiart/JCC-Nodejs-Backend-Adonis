"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteData = void 0;

var _promises = _interopRequireDefault(require("fs/promises"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = 'data.json';

var deleteData = function deleteData(param) {
  _promises["default"].readFile(path).then(function (data) {
    var realData = JSON.parse(data);
    var indexDelete = realData.findIndex(function (item) {
      return item.name == param;
    });
    realData.splice(indexDelete, 1);
    return _promises["default"].writeFile(path, JSON.stringify(realData));
  }).then(function () {
    return console.log('berhasil hapus data');
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.deleteData = deleteData;