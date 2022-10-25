// Generate the team from index.js

const team = (crew) => {
    const createIntern = (intern) => {
        return `
        <div class="card team-member-card">
        <div class="card-header">
            <h2 class="card-title"></i>${intern.role()}</h2>
            <h3 class="card-title">${intern.name()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="data-list-info">ID: ${intern.id()}</li>
                <li class="data-list-info">Email: <a href="mailto:${intern.email()}">${intern.email()}</a></li>
                <li class="data-list-info">Office number: ${intern.officeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
};
    const createEngineer = (engineer) => {
        return `
        <div class="card team-member-card">
        <div class="card-header">
            <h2 class="card-title"></i>${engineer.role()}</h2>
            <h3 class="card-title">${engineer.name()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="data-list-info">ID: ${engineer.id()}</li>
                <li class="data-list-info">Email: <a href="mailto:${engineer.email()}">${engineer.email()}</a></li>
                <li class="data-list-info">Office number: ${engineer.officeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };
    const createManager = (manager) => {
        return `
        <div class="card team-member-card">
        <div class="card-header">
            <h2 class="card-title"></i>${manager.role()}</h2>
            <h3 class="card-title">${manager.name()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="data-list-info">ID: ${manager.id()}</li>
                <li class="data-list-info">Email: <a href="mailto:${manager.email()}">${manager.email()}</a></li>
                <li class="data-list-info">Office number: ${manager.officeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const html = [];

    html.push(
        team
          .filter((employee) => employee.role() === "Intern")
          .map((intern) => createIntern(intern))
          .join("")
    );
    html.push(
        team
          .filter((employee) => employee.role() === "Engineer")
          .map((engineer) => createEngineer(engineer))
          .join("")
    );
    html.push(
        team
          .filter((employee) => employee.role() === "Manager")
          .map((manager) => createManager(manager))
    );
    
    return html.join("");
};
