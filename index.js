const inquirer = require('inquirer');
const fs = require('fs');

// These are library modules.
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// The answers of the questions will go in here.
const staffInformation = [];

// These are the questions for the prompt.
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
    ])
}

    async function addNewMember(){
      await questions()

      const teamAddAns = await inquirer
        .prompt([
          {
            type: 'list',
            name: 'teamAdd',
            message: "Which type of the team member would you like to add?",
            choices: ["Manager","Engineer","Intern","I don't want to add any more team members."],
          },
        ])

      if (teamAddAns.teamAdd === "I don't want to add any more team members."){
        return addNewMember()
      }
      return generateTeam();
}

