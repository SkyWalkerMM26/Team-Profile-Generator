const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>

</body>
</html>`;

inquirer
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
      choices: ["Engineer","Intern","I don't want to add any more team members."],
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('team.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created team.html!')
    );
  });
