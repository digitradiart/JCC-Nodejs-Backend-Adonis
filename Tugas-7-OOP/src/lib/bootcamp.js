import Kelas from './kelas';

export default class Bootcamp {
  constructor(name) {
    this._name = name;
    this._kelas = [];
  }
  get name() {
    return this._name;
  }
  get classes() {
    return this._kelas;
  }
  createClass(kelas, level, instructor) {
    var kelas = new Kelas(kelas, level, instructor);
    this._kelas.push(kelas);
  }

  register(kelas, newStud) {
    for (let i = 0; i < this._kelas.length; i++) {
      if (kelas === this._kelas[i]._name) {
        this._kelas[i]._students.push(newStud);
      }
    }
  }
}
