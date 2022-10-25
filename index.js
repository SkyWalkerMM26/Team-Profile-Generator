const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// These are the questions for the prompt
const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
      },
      {
        type: 'input',
        name: 'number',
        message: "What is the team manager's office number?",
      },
      {
        type: 'list',
        name: 'teammate add',
        message: "Which type of the team member would you like to add?",
        choices: ["Manager","Engineer","Intern","I don't want to add any more team members."],
      },
    ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('team.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created team.html!')
    );
  });
