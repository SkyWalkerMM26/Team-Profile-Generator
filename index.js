const inquirer = require('inquirer');
const fs = require('fs');
const team = require("./src/template.js");

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
        message: "What is the your name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the your id?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your email?",
      },
      {
        type: 'list',
        name: 'role',
        message: "What is your role?",
        choices: ['Manager','Engineer','Intern'],
      },
    ])

    // manager answers
    if (answers.role === "Manager") {
      const managerAns = await inquirer
        .prompt([
          {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
          },
        ])
        const newManager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          managerAns.officeNumber
        );
        staffInformation.push(newManager);
        
      // if engineer selected answer these set of questions
    } else if (answers.role === "Engineer") {
      const engineerAns = await inquirer
        .prompt([
          {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
          }
        ])
          const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            engineerAns.github
          );
          staffInformation.push(newEngineer);
        
      // if intern selected answer these set of questions
    } else if (answers.role === "Intern") {
      const internSchool = await inquirer
        .prompt([
          {
            type: "input",
            name: "school",
            message: "What school did you go to?",
          },
        ])
        
        const newIntern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          internSchool.school
        );
        staffInformation.push(newIntern);          
    } 

};

// add a new member or not.
async function addMemberQuestion() {
  await questions()
    const addMemberAns = await inquirer
    .prompt([
      {
        name:'addNewMember',
        type: 'list',
        message: "Do you want to add a team member?",
        choices: ['Yes! Add more!', 'Create team']
      }
    ])
    if (addMemberAns.addNewMember === 'Yes! Add more!') {
      return addMemberQuestion()
    }
    return generateTheTeam();
}  

addMemberQuestion();

function generateTheTeam () {
  console.log("new guy", staffInformation)
  fs.writeFileSync(
  "./dist/index.html",
  team(staffInformation),
  "utf-8"
  );
}

