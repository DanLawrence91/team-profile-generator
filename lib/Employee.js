class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    if (typeof this.id !== 'number' || this.id < 0) {
      throw new Error("Expected parameter 'ID' to be a non-negative number");
    }

    if (typeof this.name !== 'string' || !this.name) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    if (typeof this.email !== 'string' || !this.email) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    if (this.email.indexOf('@') === -1) {
      throw new Error('This must be a proper email address');
    }
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
