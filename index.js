const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const managerArray = [];
const engineerArray = [];
const internArray = [];
let members;

function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
}

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

function askEngineerQuestions() {
  inquirer.prompt(engineerQuestions).then((data) => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    console.log(engineer.getRole());
    engineerArray.push(engineer);
    members = [...managerArray, ...engineerArray, ...internArray];
    if (data.add == 'Engineer') {
      askEngineerQuestions();
    } else if (data.add == 'Intern') {
      askInternQuestions();
    } else if (data.add == 'Finish') {
      writeToFile('test.md', members);
      console.log(members);
    }
  });
}

const internQuestions = [
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

function askInternQuestions() {
  inquirer.prompt(internQuestions).then((data) => {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    console.log(intern.getRole());
    internArray.push(intern);
    members = [...managerArray, ...engineerArray, ...internArray];
    if (data.add == 'Engineer') {
      askEngineerQuestions();
    } else if (data.add == 'Intern') {
      askInternQuestions();
    } else if (data.add == 'Finish') {
      writeToFile('test.md', members);
      console.log(members);
    }
  });
}

inquirer
  .prompt(basicQuestions)
  .then((data) => {
    const manager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officeNumber
    );
    console.log(manager.getRole());
    managerArray.push(manager);
    members = [...managerArray, ...engineerArray, ...internArray];
    if (data.add == 'Engineer') {
      askEngineerQuestions();
    } else if (data.add == 'Intern') {
      askInternQuestions();
    } else if (data.add == 'Finish') {
      writeToFile('test.md', members);
      console.log(members);
    }
  })
  .catch((err) => console.error(err));
