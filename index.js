const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

// const managerArray = [];
// const engineerArray = [];
// const internArray = [];
const members = [];

const generateHTML = () =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profiles</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- when html is generated there should be a header saying team name followed 
        by cards below with individual information for each team member -->

    <header class="jumbotron jumbotron-fluid bg-warning">
      <div class="container">
        <h1 class="display-3 text-center">Team Name</h1>
      </div>
    </header>

    <div class="d-flex justify-content-center">
      <div class="card-deck">
        <div id="manager">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title bg-primary">
                ${manager.getName()}<br />${manager.getRole()}
              </h4>
              <ul class="list-group">
                <li class="list-group-item">${manager.getID()}</li>
                <li class="list-group-item">
                  <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                </li>
                <li class="list-group-item">${manager.getOfficeNumber()}</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="engineer">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title bg-primary">
                ${engineer.getName}<br />${engineer.getRole()}
              </h4>
              <ul class="list-group">
                <li class="list-group-item">${engineer.getID()}</li>
                <li class="list-group-item">
                  <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                </li>
                <li class="list-group-item">
                  <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="intern">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title bg-primary">
                ${intern.getName()}<br />${intern.getRole()}
              </h4>
              <ul class="list-group">
                <li class="list-group-item">${intern.getID()}</li>
                <li class="list-group-item">
                  <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                </li>
                <li class="list-group-item">${intern.getSchool()}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
      integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;

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
    members.push(engineer);
    // members = [...managerArray, ...engineerArray, ...internArray];
    if (data.add == 'Engineer') {
      askEngineerQuestions();
    } else if (data.add == 'Intern') {
      askInternQuestions();
    } else if (data.add == 'Finish') {
      fs.writeFileSync('index.html', generateHTML(members));
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
    members.push(intern);
    // members = [...managerArray, ...engineerArray, ...internArray];
    if (data.add == 'Engineer') {
      askEngineerQuestions();
    } else if (data.add == 'Intern') {
      askInternQuestions();
    } else if (data.add == 'Finish') {
      fs.writeFileSync('index.html', generateHTML(members));
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
    members.push(manager);
    // members = [...managerArray, ...engineerArray, ...internArray];
    if (data.add == 'Engineer') {
      askEngineerQuestions();
    } else if (data.add == 'Intern') {
      askInternQuestions();
    } else if (data.add == 'Finish') {
      fs.writeFileSync('index.html', generateHTML(members));
      console.log(members);
    }
  })
  .catch((err) => console.error(err));
