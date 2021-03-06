const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;

    if (isNaN(this.officeNumber) || this.officeNumber < 0) {
      throw new Error(
        "Expected parameter 'officeNumber' to be a non-negative number"
      );
    }
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
