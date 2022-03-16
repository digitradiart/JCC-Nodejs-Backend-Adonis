export default class Kelas {
  constructor(name, level, instructor) {
    this._name = name;
    this._student = [];
    this._level = level;
    this._instructor = instructor;
  }

  get _name() {
    return this._name;
  }

  set _name(x) {
    return (this._name = x);
  }

  get _level() {
    return this._level;
  }

  set _level(x) {
    return (this._level = x);
  }

  get instructor() {
    return this._instructor;
  }

  set _instructor(x) {
    return (this._instructor = x);
  }
}
