export default class Kelas {
  constructor(name, level, instructor) {
    this._name = name;
    this._students = [];
    this._level = level;
    this._instructor = instructor;
  }

  get name() {
    return this._name;
  }
  set name(x) {
    this._name = x;
  }
  get level() {
    return this._level;
  }
  set level(x) {
    this._level = x;
  }
  get instructor() {
    return this._instructor;
  }
  set instructor(x) {
    this._instructor = x;
  }
}
