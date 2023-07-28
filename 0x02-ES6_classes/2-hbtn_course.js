export default class HolbertonCourse {
  constructor (name, length, students) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students must be array');
    }
    if (!students.every(student => typeof student === 'string')) {
      throw new TypeError('every students entry must be a string');
    }

    this._name = name;
    this.length = length;
    this.students = students;
  }

  setName (value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be string');
    }
    this.name = value;
    this._name = this.name;
  }

  getName () {
    return this._name;
  }

  setLength (value) {
    this._length = value;
  }

  getLength () {
    return this._length;
  }

  setStudents (value) {
    this._students = value;
  }

  getStudents () {
    return this._students;
  }
}
