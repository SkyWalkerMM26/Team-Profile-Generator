// Generate the team from index.js

const team = (crew) => {
    const createIntern = (intern) => {
        return `
        <div class="card team-member-card ml-3">
        <div class="card-header bg-dark text-white"">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="data-list-info">ID: ${intern.getId()}</li>
                <li class="data-list-info">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="data-list-info">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
};
    const createEngineer = (engineer) => {
        return `
        <div class="card team-member-card ml-3">
        <div class="card-header bg-dark text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="data-list-info">ID: ${engineer.getId()}</li>
                <li class="data-list-info">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="data-list-info">GitHub Username: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
        `;
    };
    const createManager = (manager) => {
        return `
        <div class="card team-member-card ml-3">
        <div class="card-header bg-dark text-white"">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="data-list-info">ID: ${manager.getId()}</li>
                <li class="data-list-info">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="data-list-info">Office number: ${manager.getofficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const html = [];

    html.push(
        crew
          .filter((employee) => employee.getRole() === "Intern")
          .map((intern) => createIntern(intern))
          .join("")
    );
    html.push(
        crew
          .filter((employee) => employee.getRole() === "Engineer")
          .map((engineer) => createEngineer(engineer))
          .join("")
    );
    html.push(
        crew
          .filter((employee) => employee.getRole() === "Manager")
          .map((manager) => createManager(manager))
          .join("")
    );
    
    return html.join("");
};

module.exports = (crew) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./dist/style.css"/>
        </head>
        
        <body>
            <div class="container-fluid">
                <div class="row mx-md-n5">
                    <div class="col-12 jumbotron mb-3 team-heading bg-success">
                        <h1 class="header text-center font-weight-bold text-dark">Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        ${team(crew)}
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
};