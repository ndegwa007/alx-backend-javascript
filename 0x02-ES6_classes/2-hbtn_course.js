export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.validateString(name, 'Name');
    this._length = HolbertonCourse.validateLength(length, 'Length');
    this._students = HolbertonCourse.validateStudents(students);
  }

  set name(newName) {
    this._name = HolbertonCourse.validateString(newName, 'Name');
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    this._length = HolbertonCourse.validateLength(newLength, 'Length');
  }

  get length() {
    return this._length;
  }

  set students(students) {
    this._students = HolbertonCourse.validateStudents(students);
  }

  get students() {
    return this._students;
  }

  static validateString(value, attrname) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attrname} must be a string`);
    }
    return value;
  }

  static validateLength(value, attrname) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attrname} must be a number`);
    }
    return value;
  }

  static validateStudents(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('students must be array');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('every students entry must be a string');
    }

    return value;
  }
}
