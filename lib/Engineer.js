const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;

    if (typeof this.github !== 'string') {
      throw new Error("Expected parameter 'github' to be a non-empty string");
    }
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
