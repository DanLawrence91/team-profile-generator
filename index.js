const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const generatorQuestions = [
  {
    type: 'list',
    name: 'job',
    message: 'What is your role?',
    choices: ['Manager', 'Engineer', 'Intern'],
  },
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
    validate: (email) => {
      return email ? email.indexOf('@') !== -1 : 'Please use a valid email';
    },
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?',
    validate: (officeNumber) => {
      var valid = !isNaN(officeNumber);
      return valid ? true : 'Please enter a valid office number as a number';
    },
    when: (answers) => answers.job === 'Manager',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide your github username',
    validate: (github) => {
      return github ? true : 'Please add a Github username';
    },
    when: (answers) => answers.job === 'Engineer',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Please provide your school',
    validate: (school) => {
      return school ? true : 'Please add a school';
    },
    when: (answers) => answers.job === 'Intern',
  },
];

const newMember = [
  {
    type: 'confirm',
    name: 'choice',
    message: 'Do you want to add another team member?',
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(generatorQuestions)
    .then(newMember)
    .then((data) => writeToFile('test.md', JSON.stringify(data)))
    .then(() => console.log('test creation successful'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
