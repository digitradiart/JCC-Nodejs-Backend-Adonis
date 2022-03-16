import Kelas from './kelas';

export default class Bootcamp {
  constructor(_name) {
    this._name = _name;
    this._kelas = this._kelas;
  }

  get _name() {
    return this._name;
  }

  get _classes() {
    return this._classes;
  }

  createClass(kelas, level, instructor) {
    var kelas = new Kelas(kelas, level, instructor);
    this._kelas.push(kelas);
  }
}
