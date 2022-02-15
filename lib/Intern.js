const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;

    if (typeof this.school !== 'string') {
      throw new Error("Expected parameter 'School' to be a non-empty string");
    }
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
