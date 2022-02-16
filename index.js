const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const members = [];

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
      return email
        ? true && email.indexOf('@') !== -1
        : 'Please use a valid email address';
    },
    //need to sort validate
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
  {
    type: 'confirm',
    name: 'choice',
    message: 'Do you want to add another team member?',
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
      if (data.job === 'Manager') {
        members.push(
          new Manager(data.name, data.id, data.email, data.officeNumber)
        );
      } else if (data.job === 'Engineer') {
        members.push(new Engineer(data.name, data.id, data.email, data.github));
      } else if (data.job === 'Intern') {
        members.push(new Intern(data.name, data.id, data.email, data.school));
      }

      // console.log(members);
      // console.log(data.job);
      // console.log(data.name);
      // console.log(data.id);
      // console.log(data.email);
      // console.log(data.choice);

      if (data.choice) {
        init();
      } else {
        //create file here
        return writeToFile('test.md', members);
      }
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
