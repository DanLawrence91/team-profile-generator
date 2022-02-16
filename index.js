const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const members = [];

const basicQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: (name) => {
      return name ? true : 'Please add a name';
    },
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the your ID?',
    validate: (id) => {
      var valid = !isNaN(id);
      return valid ? true : 'Please enter a valid ID as a number';
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the your email?',
    validate: function (email) {
      valid = email.indexOf('@');

      if (valid !== -1) {
        return true;
      } else {
        return 'Please enter a valid email';
      }
    },
  },
  {
    type: 'confirm',
    name: 'manager',
    message: 'Are you a manager?',
  },
];
const managerQuestions = [
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?',
    validate: (officeNumber) => {
      var valid = !isNaN(officeNumber);
      return valid ? true : 'Please enter a valid office number as a number';
    },
  },
  {
    type: 'list',
    name: 'add',
    message: 'Do you want to add an engineer, an intern or finish',
    choices: ['Engineer', 'Intern', 'Finish'],
  },
];
const engineerQuestions = [
  {
    type: 'input',
    name: 'github',
    message: 'Please provide your github username',
    validate: (github) => {
      return github ? true : 'Please add a Github username';
    },
  },
  {
    type: 'list',
    name: 'add',
    message: 'Do you want to add an engineer, an intern or finish',
    choices: ['Engineer', 'Intern', 'Finish'],
  },
];
const internQuestions = [
  {
    type: 'input',
    name: 'school',
    message: 'Please provide your school',
    validate: (school) => {
      return school ? true : 'Please add a school';
    },
  },
  {
    type: 'list',
    name: 'add',
    message: 'Do you want to add an engineer, an intern or finish',
    choices: ['Engineer', 'Intern', 'Finish'],
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(generatorQuestions)
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      console.log(manager.getRole());
      members.push(manager);
      if (data.employee === 'Engineer') {
        const engineer = new Engineer(
          data.name,
          data.id,
          data.email,
          data.github
        );
        console.log(engineer.getRole());
        members.push(engineer);
      } else if (data.employee === 'Intern') {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        console.log(intern.getRole());
        members.push(intern);
      } else if (data.employee === 'Finish' || data.newEmployee === 'Finish') {
        return writeToFile('test.md', members);
      }

      // console.log(members);
      // console.log(data.job);
      // console.log(data.name);
      // console.log(data.id);
      // console.log(data.email);
      // console.log(data.choice);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
