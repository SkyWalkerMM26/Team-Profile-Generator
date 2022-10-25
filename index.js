const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require("./src/page-template.js");

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
        message: "What is the your email?",
      },
      {
        type: 'input',
        name: 'number',
        message: "What is the team your office number?",
      },
      {
        type: 'list',
        name: 'role',
        message: "What is the team your role?",
        choices: ['Manager','Engineer','Intern'],
      },
    ])

    // Manager answers
    if (answers.role === "Manager") {
        const newManager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber,
          answers.role
        );
        staffInformation.push(newManager);
        
      // Engineer answers
    } else if (answers.role === "Engineer") {
        const newEngineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber,
          answers.role
        );
        staffInformation.push(newEngineer);
        
      // Intern Answers
    } else if (answers.role === "Intern") {
        const newIntern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber,
          answers.role
        );
        staffInformation.push(newIntern);     
      } 
}

// Listens if user wants to add more members.
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

  if (teamAddAns.teamAdd !== "I don't want to add any more team members."){
    return addNewMember()
  }
  return generateTeam();
}

addNewMember();

// create html file with the answers
function generateTeam(){
  fs.writeFileSync("./dist/team.html", htmlTeam(staffInformation));
}