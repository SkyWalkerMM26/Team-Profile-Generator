// Generate the team from index.js

const team = (crew) => {
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



}